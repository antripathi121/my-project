import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  message: string;
  messages: string[] = [];
  // data = [];
  constructor(private chatService: ChatService) { }
  sendMessage() {
    this.chatService.sendMessage(this.message);
    // this.data.push(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        console.log(message);
      });
  }

}
