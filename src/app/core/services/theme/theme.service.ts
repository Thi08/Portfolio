import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('darkMode') === 'true';
      if (saved) {
        this.enableDarkMode();
        this.darkMode = true;
      }
    }
  }

  toggleDarkMode(): void {
    this.darkMode ? this.disableDarkMode() : this.enableDarkMode();
  }

  private enableDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('darkMode', 'true');
    }
    this.darkMode = true;
  }

  private disableDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('darkMode', 'false');
    }
    this.darkMode = false;
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
