import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';


@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    ) {}

    async findOne(id: number): Promise<Todo> {
        const todo = await this.todoRepository.findOne({where:{id: id}});
        if (todo) return todo;
        throw new NotFoundException(`Todo ${id} not found`);
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = this.todoRepository.create(createTodoDto);
        return this.todoRepository.save(todo);
    }

    async updateTodo(updateTodoDto: UpdateTodoDto): Promise<Todo> {
        const { id, ...other } = updateTodoDto;
        const todo = {
            ...(await this.findOne(id)),
            ...other,
        };
        console.log(todo);
        return this.todoRepository.save(todo);
    }
    
    async deleteTodo(id: number): Promise<boolean> {
        const todo = await this.findOne(id);
        return !!(await this.todoRepository.remove(todo));
    }
}
