import {HttpException, HttpStatus, Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"

import {CreatePostDto} from "./dto/create.post.dto"
import {Post} from "./posts.model"

import {FilesService} from "../files/files.service"

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private posts: typeof Post, private fileService: FilesService) {}

    async createPost(dto: CreatePostDto, image: any): Promise<Post> {
       try {
           const fileName = await this.fileService.createFile(image)
           const post = await this.posts.create({...dto, image: fileName})
           return post
       } catch (e) {
           throw new HttpException("An error occurred while create the post.", HttpStatus.INTERNAL_SERVER_ERROR)
       }
    }

    async getAllPosts(): Promise<Post[]> {
        try {
            const posts = await this.posts.findAll()
            return posts
        } catch (e) {
            throw new HttpException("An error occurred while getting the posts.", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
