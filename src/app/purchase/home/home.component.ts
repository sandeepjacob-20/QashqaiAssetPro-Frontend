import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //declaring types
  private typed: Typed | undefined;
  private emojis: string[] = [
    "😀", "😁", "😂", "🤣", "😌",
    "😄", "😅", "😆", "😉", "😊",
    "😋", "😎", "😍", "🫡", "😮",
    "😐", "😏", "🤓", "🙂", "🤗",
    // Add more emojis as needed
  ];

  constructor() { }

  ngOnInit(): void {
    //random index for emoji
    const randomIndex = Math.floor(Math.random() * this.emojis.length);
    // Define your typing options
    const name = localStorage.getItem('USER_NAME');
    const options = {
      strings: ['Welcome ' + name + this.emojis[randomIndex]],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 0, // Backspacing speed in milliseconds
      loop: false // Loop the animation
    };
    this.typed = new Typed('.typing-element', options);
  }

  ngOnDestroy() {
    // Destroy the Typed instance to prevent memory leaks
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
