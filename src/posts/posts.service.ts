import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"

import {CreatePostDto} from "./dto/create.post.dto"
import {Post} from "./posts.model"

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private posts: Post) {}
    async createPost(dto: CreatePostDto, image: any): Promise<Post> {
        const fileName = image.originalname
        const post = await this.posts.create({...dto, image: fileName})
        return post
    }
}
