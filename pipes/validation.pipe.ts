import {Injectable, PipeTransform} from "@nestjs/common"

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    transform(value: any, metadata: any): any {
        return value
    }
}