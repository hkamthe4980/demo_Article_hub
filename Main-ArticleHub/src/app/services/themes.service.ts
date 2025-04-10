import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  

  constructor() { }

  setTheme(theme: string) {
    this.applyTheme(theme);
    localStorage.setItem('themeColor', theme)
    console.warn(theme);
  }


  private applyTheme(theme: string) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('primary-theme', 'accent-theme', 'warn-theme');
    body.classList.add(`${theme}-theme`);
  }

  getTheme(): ThemePalette {
    if (localStorage.getItem('themeColor') === null || localStorage.getItem('themeColor') === undefined) {
      return 'warn';
    }
    else {
      const storedThemeColor = localStorage.getItem('themeColor');
      return storedThemeColor as ThemePalette
    }


  }
}
