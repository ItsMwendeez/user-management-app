import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {

  // Array containing the slideshow images
  images = [
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
    'assets/images/slide4.jpg',
  ];

  currentImage = signal(0);
 

  changeImage(){
    if (this.currentImage() < this.images.length - 1) {
      this.currentImage.set(this.currentImage() + 1);
    } else {
      this.currentImage.set(0);
    }

  }

  ngOnInit() {
    setInterval(() => {
      this.changeImage();
    }, 3000);
  }
}