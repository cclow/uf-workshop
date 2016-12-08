import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectsDataService } from "./projects-data.service";
import { Id, Project } from "./project.model";
import { Subscription } from "rxjs";
@Component({
  selector: 'demo-project-details',
  template: `
<md-card>
<md-card-title>{{project?.title}}</md-card-title>
<md-card-content>{{project?.notes}}</md-card-content>
</md-card>
`
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private project: Project;
  constructor(private route: ActivatedRoute,
              private projectsDataService: ProjectsDataService) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .switchMap(params => this.projectsDataService.getProject$(params['id']))
      .subscribe(project => this.project = project);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
