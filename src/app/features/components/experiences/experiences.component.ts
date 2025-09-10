import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  imports: [CardComponent, TranslateModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiencesKeys = signal([
    {
      img: '/icons/vonbraunlabs.jpeg',
      companyKey: 'EXPERIENCES.COMPANY_VON_BRAUN_1',
      positionKey: 'EXPERIENCES.POSITION_TRAINEE',
      durationKey: 'EXPERIENCES.DURATION_VON_BRAUN_1',
      link: 'https://www.linkedin.com/company/cpa-wernher-von-braun',
      tasksKeys: [
        'EXPERIENCES.TASK_1_VON_BRAUN_1',
        'EXPERIENCES.TASK_2_VON_BRAUN_1',
        'EXPERIENCES.TASK_3_VON_BRAUN_1',
      ],
    },
    {
      img: '/icons/vonbraunlabs.jpeg',
      companyKey: 'EXPERIENCES.COMPANY_VON_BRAUN_2',
      positionKey: 'EXPERIENCES.POSITION_INTERN',
      durationKey: 'EXPERIENCES.DURATION_VON_BRAUN_2',
      link: 'https://www.linkedin.com/company/cpa-wernher-von-braun',
      tasksKeys: [
        'EXPERIENCES.TASK_1_VON_BRAUN_2',
        'EXPERIENCES.TASK_2_VON_BRAUN_2',
        'EXPERIENCES.TASK_3_VON_BRAUN_2',
      ],
    },
    {
      img: '/icons/petufscar.jpeg',
      companyKey: 'EXPERIENCES.COMPANY_PET_UFSCAR',
      positionKey: 'EXPERIENCES.POSITION_FULLSTACK',
      durationKey: 'EXPERIENCES.DURATION_PET_UFSCAR',
      link: 'https://www.linkedin.com/company/cpa-wernher-von-braun',
      tasksKeys: [
        'EXPERIENCES.TASK_1_PET_UFSCAR',
        'EXPERIENCES.TASK_2_PET_UFSCAR',
      ],
    },
  ]);

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
