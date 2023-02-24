import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent],
  template: ` <main><app-welcome></app-welcome></main> `,
  styles: [],
})
export class HomeComponent {}
