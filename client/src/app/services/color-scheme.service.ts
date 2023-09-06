import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: Theme) {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '-theme.css';
    }

    localStorage.setItem('theme', theme);
  }

  currentTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || 'light';
  }

  initialize(): void {
    this.switchTheme(this.currentTheme());
  }
}
