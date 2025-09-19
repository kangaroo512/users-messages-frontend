import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageAppComponent } from "./components/language-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LanguageAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'languageApp';
}
