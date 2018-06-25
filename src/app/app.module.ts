import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { ScrollToDirective } from './scroll-to/scroll-to.directive';
import { ScrollToService } from './scroll-to/scroll-to.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    ScrollToDirective
  ],
  imports: [
    BrowserAnimationsModule
  ],
  providers: [
    ScrollToService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
