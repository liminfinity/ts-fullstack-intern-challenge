import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import type { LikeService } from './like.service';
import type { CreateLikeDto } from './dto';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  getLikes() {
    return this.likeService.findAll();
  }

  @Post()
  createLike(@Body() like: CreateLikeDto) {
    return this.likeService.create(like);
  }

  @Delete(':catId')
  deleteLike(@Param('catId') catId: string) {
    return this.likeService.remove(catId);
  }
}
