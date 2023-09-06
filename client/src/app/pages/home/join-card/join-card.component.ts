import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-join-card',
  templateUrl: './join-card.component.html',
  styleUrls: ['./join-card.component.scss'],
})
export class JoinCardComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // this.apiService.
    this.apiService.getMessage().subscribe((msg: any) => {
      console.log(msg);
    });
  }

  onJoin() {
    this.apiService.joinRoom('test', 'test');
  }
}
