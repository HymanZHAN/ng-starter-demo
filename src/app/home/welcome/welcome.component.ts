import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeItemComponent } from './welcome-item.component';
import { IconCommunityComponent } from 'src/app/icons/icon-community.component';
import { IconToolingComponent } from 'src/app/icons/icon-tooling.component';
import { IconEcosystemComponent } from 'src/app/icons/icon-ecosystem.component';
import { IconDocumentationComponent } from 'src/app/icons/icon-documentation.component';
import { IconSupportComponent } from 'src/app/icons/icon-support.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeItemComponent,
    IconCommunityComponent,
    IconToolingComponent,
    IconEcosystemComponent,
    IconDocumentationComponent,
    IconSupportComponent,
  ],
  templateUrl: './welcome.component.html',
  styles: [],
})
export class WelcomeComponent {}
