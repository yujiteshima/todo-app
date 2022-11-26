import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
export interface Todo {
    title: string;
    description: string;
}

export interface Todos {
    [id: string]: Todo;
}

@Injectable()
export class TodoService {
    private todos: Todos = {};

    findOne(id: string): Todo {
        return this.todos[id];
    }

    createTodo(createTodoDto: CreateTodoDto) {
        this.todos[Object.keys(this.todos).length] = createTodoDto;
        console.log(this.todos);
        return createTodoDto;
    }
}
