import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  `,
  styles: [
    `
      @media (min-width: 1024px) {
        .about {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
      }
    `,
  ],
})
export class AboutComponent {}
