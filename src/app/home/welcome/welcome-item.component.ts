import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item">
      <i>
        <ng-content select="[icon]"></ng-content>
      </i>
      <div class="details">
        <h3>
          <ng-content select="[heading]"></ng-content>
        </h3>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .item {
        margin-top: 2rem;
        display: flex;
      }

      .details {
        flex: 1;
        margin-left: 1rem;
      }

      i {
        display: flex;
        place-items: center;
        place-content: center;
        width: 32px;
        height: 32px;

        color: var(--color-text);
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
        color: var(--color-heading);
      }

      @media (min-width: 1024px) {
        .item {
          margin-top: 0;
          padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
        }

        i {
          top: calc(50% - 25px);
          left: -26px;
          position: absolute;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          border-radius: 8px;
          width: 50px;
          height: 50px;
        }

        :host:before {
          content: ' ';
          border-left: 1px solid var(--color-border);
          position: absolute;
          left: 0;
          bottom: calc(50% + 25px);
          height: calc(50% - 25px);
        }

        :host:after {
          content: ' ';
          border-left: 1px solid var(--color-border);
          position: absolute;
          left: 0;
          top: calc(50% + 25px);
          height: calc(50% - 25px);
        }

        :host:first-of-type:before {
          display: none;
        }

        :host:last-of-type:after {
          display: none;
        }
      }
    `,
  ],
})
export class WelcomeItemComponent {}
