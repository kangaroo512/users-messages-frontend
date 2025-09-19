import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'language-app',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterModule],
  templateUrl: './language-app.component.html',
  styleUrl: './language-app.component.css'
})
export class LanguageAppComponent {

}
