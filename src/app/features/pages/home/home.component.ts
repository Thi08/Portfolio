import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { ExperiencesComponent } from "../../components/experiences/experiences.component";
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [ProfileComponent, ExperiencesComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
