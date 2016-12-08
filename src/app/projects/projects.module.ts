import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { ProjectFormComponent } from "./project-form.component";
import { ProjectCardComponent } from "./project-card.component";
import { ValidateMentionDirective } from "./validate-mention.directive";
import { ProjectsDataService } from "./projects-data.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { ProjectDetailsComponent } from "./project-details.component";

const ROUTES: Routes = [
  {path: '', component: ProjectsComponent, pathMatch: 'full'},
  {path: 'new', component: ProjectFormComponent},
  {path: ':id', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProjectsComponent,
    ProjectFormComponent,
    ProjectCardComponent,
    ValidateMentionDirective,
    ProjectDetailsComponent
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    ProjectsDataService
  ]
})
export class ProjectsModule { }
