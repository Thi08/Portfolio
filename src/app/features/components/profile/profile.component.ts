import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [NzIconModule, NgOptimizedImage, ButtonComponent, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  translateService = inject(TranslateService);

  downloadCV(): void {
    const currentLang = this.translateService.getCurrentLang();
    let filePath: string;

    if (currentLang === 'pt') {
      filePath = 'curriculums/cv-thiago-albino-pt.pdf';
    } else {
      filePath = 'curriculums/cv-thiago-albino-en.pdf';
    }

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'curriculum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
