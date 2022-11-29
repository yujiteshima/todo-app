import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
    // moduleのprovidersに含まれているServiceをメソッドとしてコンストラクタの引数に渡して使用できる。
    // サービスをインスタンス化
    constructor(private readonly todoService: TodoService){}

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.todoService.findOne(id);
    }
    @Post()
    createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.createTodo(createTodoDto);
    }
    @Patch()
    updateTodo(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
        return this.todoService.updateTodo(updateTodoDto);
    }
    @Delete(':id')
    deleteTodo(@Param('id') id: number): Promise<boolean> {
        return this.todoService.deleteTodo(id);
    }
}
