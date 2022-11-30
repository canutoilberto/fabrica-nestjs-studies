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

  update(id: number, message: IMessage) {
    const index = this.messages.findIndex((message) => message.id === id);

    this.messages[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    delete this.messages[index];
  }
}
