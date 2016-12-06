import { Component } from "@angular/core";
@Component({
  selector: 'demo-projects',
  template: `
  <demo-project-card *ngFor="let project of projects" 
    [project]="project"
    [selected]="project.id===selectedId"
    (started)="log($event)"
    (select)="selectedId=$event"></demo-project-card>
`,
})
export class ProjectsComponent {
  private projects = [
    {id: 1, title: 'Project A', notes: 'This is a great project, the best EVER!'},
    {id: 2, title: 'Project B', notes: 'This is a great project, the best EVER!'},
    {id: 3, title: 'Project C', notes: 'This is a great project, the best EVER!'},
  ];

  private selectedId: number;

  private log(s: string) {
    console.log('started', s);
  }
}
