import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Project, Id } from "./project.model";
import { ProjectsDataService } from "./projects-data.service";
import { Observable } from "rxjs";
@Component({
  selector: 'demo-projects',
  template: `
  <demo-project-form></demo-project-form>
  <demo-project-card *ngFor="let project of projects$ | async" 
    [project]="project"
    [selected]="project.id===(selectedId$ | async)"></demo-project-card>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private projects$: Observable<Project[]>;

  private selectedId$: Observable<Id>;

  constructor(private projectsDataService: ProjectsDataService) {
    this.projects$ = this.projectsDataService.projects$;
    this.selectedId$ = this.projectsDataService.selectedId$;
  }
}
