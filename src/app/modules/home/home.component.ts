import { Component, HostListener, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
  }


  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 900;
  }

  images = [
    { itemImageSrc: 'assets/svg/group/group-1.svg' },
    { itemImageSrc: 'assets/svg/group/group-2.svg' },
    { itemImageSrc: 'assets/svg/group/group-3.svg' },
    { itemImageSrc: 'assets/svg/group/group-4.svg' },
  ];
}
