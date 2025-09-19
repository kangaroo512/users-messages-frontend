import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'message-box',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {



  activeTab: string = '';

  constructor() {

  }


  onClick(arg0: string) {
throw new Error('Method not implemented.');
}




}
