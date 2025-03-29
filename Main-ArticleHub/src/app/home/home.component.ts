import { Component } from '@angular/core';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public themeService: ThemesService) {}

  changeTheme(theme: any) {
    this.themeService.setTheme(theme);
  }
}
