import { Component, Output, EventEmitter } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from "@angular/forms";
import { ProjectsDataService } from "./projects-data.service";

export function validateMention(c: AbstractControl) {
  let title = c.get('title').value;
  let notes = c.get('notes').value;
  return (!title || (notes && notes.toLowerCase().includes(title.toLowerCase())))
    ? null : { 'nomention': true };
}

@Component({
  selector: 'demo-project-form',
  templateUrl: 'project-form.component.html',
  styleUrls: ['project-form.component.css']
})
export class ProjectFormComponent {
  private form: FormGroup;

  constructor(private fb: FormBuilder,
              private projectsDataService: ProjectsDataService) {
    this.form = new FormGroup({
      project: new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(3)]),
        notes: new FormControl()
      }
      , validateMention
      ),
    });
    // this.form.valueChanges
    //   .subscribe(v => console.log("form", JSON.stringify(v)));
  }


  onSubmit() {
    let project = this.form.get('project').value;
    this.projectsDataService.createProject(project.title, project.notes);
    this.form.reset();
  }
}
