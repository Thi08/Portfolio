import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CardComponent, ButtonComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
