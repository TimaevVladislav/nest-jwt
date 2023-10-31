import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  getUsers(): Array<{id: number, name: string}> {
    return [{id: 1, name: "Vlad"}, {id: 2, name: "Elena"}]
  }
}
