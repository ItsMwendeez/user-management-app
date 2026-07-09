import { Component, OnInit, NgZone } from '@angular/core';
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

  // Keeps track of the image currently displayed
  currentImage = 0;


  constructor(private ngZone: NgZone) {}


  // Changes the slideshow image
  changeImage() {

    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }

    console.log(this.currentImage);
  }


  // Runs when the component loads
  ngOnInit() {

    this.ngZone.run(() => {

      setInterval(() => {
        this.changeImage();
      }, 3000);

    });

  }

}