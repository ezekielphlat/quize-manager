import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private quizRepository: QuizRepository,
  ) {}
  getAllQuiz(): Number[] {
    return [1, 2, 3, 4, 5];
  }
  async CreateNewQuiz(quiz: CreateQuizDto) {
    // const quizEntity = new Quiz();
    // quizEntity.title = quiz.title;
    // quizEntity.description = quiz.description;
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: number) {
    return await this.quizRepository.findOne(id);
  }
}
