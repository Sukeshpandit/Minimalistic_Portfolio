import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroSectionComponent,ExperienceSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App1';
}
