import { Injectable } from '@nestjs/common';
import { IMessage } from './IMessage';

@Injectable()
export class MessagesService {
  private messages: IMessage[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: IMessage) {
    return this.messages.push(message);
  }
}
