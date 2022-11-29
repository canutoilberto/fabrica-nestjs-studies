import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IMessage } from './IMessage';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id);
  }

  @Post()
  create(@Body() message: IMessage) {
    return this.messagesService.create(message);
  }
}
