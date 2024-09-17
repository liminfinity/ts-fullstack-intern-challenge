import { Injectable } from '@nestjs/common';
import type { Repository } from 'typeorm';
import { Like } from './like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import type { CreateLikeDto } from './dto';

@Injectable()
export class LikeService {
  constructor(@InjectRepository(Like) private readonly likeRepository: Repository<Like>) {}

  findAll(): Promise<Like[]> {
    return this.likeRepository.find();
  }

  create(createLikeDto: CreateLikeDto): Promise<Like> {
    const newLike = this.likeRepository.create(createLikeDto);
    return this.likeRepository.save(newLike);
  }

  async remove(catId: string): Promise<void> {
    await this.likeRepository.delete(catId);
  }
}
