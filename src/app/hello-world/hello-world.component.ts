import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://angular.io" target="_blank" rel="noopener">Angular</a>. What's next?
      </h3>
    </div>
  `,
  styles: [
    `
      h1 {
        font-weight: 500;
        font-size: 2.6rem;
        top: -10px;
      }

      h3 {
        font-size: 1.2rem;
      }

      .greetings h1,
      .greetings h3 {
        text-align: center;
      }

      @media (min-width: 1024px) {
        .greetings h1,
        .greetings h3 {
          text-align: left;
        }
      }
    `,
  ],
})
export class HelloWorldComponent {
  @Input() msg = '';
}
