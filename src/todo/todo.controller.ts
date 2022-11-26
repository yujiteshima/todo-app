import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todo')
export class TodoController {
    // moduleのprovidersに含まれているServiceをメソッドとしてコンストラクタの引数に渡して使用できる。
    // サービスをインスタンス化
    constructor(private readonly todoService: TodoService){}

    @Get(':id')
    findOne(@Param('id') id: string ) {
        return this.todoService.findOne(id);
    }
    @Post()
    createTodo(@Body() createTodoDto: CreateTodoDto) {
        return this.todoService.createTodo(createTodoDto);
    }
}
