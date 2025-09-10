import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-navbar',
  imports: [
    ThemeToggleComponent,
    RouterLink,
    RouterLinkActive,
    UpperCasePipe,
    NzButtonModule,
    NzButtonModule,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private translateService = inject(TranslateService);
  readonly isOpen = signal(false);

  currentLang = this.translateService.currentLang || 'pt';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.translateService.use(this.currentLang);
  }

  toggleMenu(): void {
    this.isOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: UIEvent): void {
    const w = (e.target as Window).innerWidth;
    if (w >= 1024 && this.isOpen()) this.closeMenu();
  }
}
