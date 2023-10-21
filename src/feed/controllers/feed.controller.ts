import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm/driver/mongodb/typings';
import { DeleteResult } from 'typeorm';

@Controller('feed')
export class FeedController {
    constructor (private feedService:FeedService){}
    @Post()
    create(@Body() post:FeedPost):Observable<FeedPost>{
        return this.feedService.createPost(post)
    }
    @Get()
    findAll():Observable<FeedPost[]>
    {
        return this.feedService.findAllPosts()
        
    }
    // @Put(':id')
    // update(
    // @Body() feedPost:FeedPost,
    // @Param('id') id:number
    // ):Observable<UpdateResult>
    // {
    //     return this.feedService.updatePost(id,feedPost)
    // }
      @Delete(':id')
     delete(@Param('id') id:number):Observable<DeleteResult>{
        return this.feedService.deletePost(id)
     }

    
}
