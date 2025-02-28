import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isModalOpen = false;

  constructor(
    private router: Router,
  ) {}

  navigateToFrontpage() {
    if (this.isModalOpen) {
      this.closeModal();
    }
    setTimeout(() => {
      this.router.navigate(['/frontpage']);
    }, 300);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
