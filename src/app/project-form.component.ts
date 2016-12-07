import { Component, Output, EventEmitter } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from "@angular/forms";
import { ProjectsDataService } from "./projects-data.service";

function validateMention(c: AbstractControl) {
  let title = c.get('title').value;
  let notes = c.get('notes').value;
  return (!title || (notes && notes.toLowerCase().includes(title.toLowerCase())))
    ? null : { 'nomention': true };
}

@Component({
  selector: 'demo-project-form',
  template: `
<md-card>
<form novalidate [formGroup]="form" (submit)="onSubmit()">
  <div formGroupName="project">
  
  <md-input name="title" placeholder="Title" formControlName="title">
    <md-hint>Title must be at least 3 chars long</md-hint>
  </md-input>
  <md-textarea name="notes" placeholder="Notes" formControlName="notes"></md-textarea>
</div>
  <md-card-actions align="end">
  <button md-button type="submit" [disabled]="form.invalid">Create</button>
  </md-card-actions>
</form>
<md-card-content>{{form.get('project').errors | json}}</md-card-content>
</md-card>
`,
  styles: [`
md-input, md-textarea {
  width: 100%;
}
.ng-valid md-hint, .ng-untouched md-hint {
  display: none;
}
md-hint {
color: red;
}
`
  ]
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
