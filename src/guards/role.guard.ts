import {
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
    Injectable,
    HttpException,
    HttpStatus
} from "@nestjs/common"
import {JwtService} from "@nestjs/jwt"
import {Reflector} from "@nestjs/core"
import {Observable} from "rxjs"

import {ROLES_KEY} from "../decorators/role.auth.decorator"

@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private jwt: JwtService, private reflector: Reflector) {}

   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      try {
        const roles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()])

        if (!roles) {
           return true
        }

        const req = context.switchToHttp().getRequest()
        const autherizationHeader = req.headers.authorization
        const bearer = autherizationHeader.split(" ")[0]
        const token = autherizationHeader.split(" ")[1]

        if (bearer !== "Bearer" || !token) {
            throw new UnauthorizedException({message: "User is not authorized"})
        }

        const user = this.jwt.verify(token)
        req.user = user
        return user.roles.some(value => roles.includes(value.role))
      } catch (e) {
          throw new HttpException("No access", HttpStatus.FORBIDDEN)
      }
   }
}