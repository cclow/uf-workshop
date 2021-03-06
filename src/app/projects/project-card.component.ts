import {
  Component, Input, HostListener, ChangeDetectionStrategy
} from '@angular/core';
import { Project } from "./project.model";
import { ProjectsDataService } from "./projects-data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'demo-project-card',
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent
// implements OnInit, OnChanges, OnDestroy
{
  @Input() project: Project;
  @Input() selected: boolean;

  constructor(private projectsDataService: ProjectsDataService,
              private router: Router, private route: ActivatedRoute) {
  }

  // @Output() private started = new EventEmitter<string>();

  // ngOnInit(): void {
  //   this.started.emit(this.project.title);
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Changes", JSON.stringify(changes));
  // }
  //
  // ngDoCheck() {
  //   console.log("doCheck");
  // }
  //
  // ngAfterContentInit() {
  //   console.log("ContentInit");
  // }
  //
  // ngAfterContentCheck() {
  //   console.log("ContentCheck");
  // }
  //
  // ngAfterViewInit() {
  //   console.log("ViewInit");
  // }
  //
  // ngAfterViewCheck() {
  //   console.log("ViewCheck");
  // }
  //
  // ngOnDestroy(): void {
  //   console.log("destroy")
  // }

  @HostListener('click')
  private selectProject() {
    this.router.navigate([this.project.id], {relativeTo: this.route});
    // if (this.selected) {
    //   this.projectsDataService.setSelectedId(null);
    // } else {
    //   this.projectsDataService.setSelectedId(this.project.id);
    // }
  }
}
