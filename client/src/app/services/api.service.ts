import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private socket: Socket) {}

  joinRoom(username: string, room: string) {
    this.socket.connect();
    this.socket.emit('join', {
      username: username,
      room: room,
    });
  }

  createRoom(username: string, cards: string[], defaultOperator: boolean) {
    this.socket.emit('create', {
      username: username,
      cards: cards,
      defaultOperator: defaultOperator,
    });
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message');
  }
}
