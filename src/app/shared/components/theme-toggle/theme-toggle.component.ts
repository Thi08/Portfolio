import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  isLightTheme = false;

  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.isLightTheme = !this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
    this.isLightTheme = !this.isLightTheme;
  }
}
