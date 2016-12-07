import { Component, Output, EventEmitter } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from "@angular/forms";

function validateMention(c: AbstractControl) {
  let title = c.get('title').value.toLowerCase();
  let notes = c.get('notes').value.toLowerCase();
  if (notes.includes(title)) {
    return null;
  } else {
    return { 'nomention': true }
  }
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
  <md-card-actions align="end"><button md-button type="submit">Create</button></md-card-actions>
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
  @Output() create = new EventEmitter<any>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      project: this.fb.group({
        title: '',
        notes: ''
      }),
    });
    // this.form.valueChanges
    //   .subscribe(v => console.log("form", JSON.stringify(v)));
  }


  onSubmit() {
    this.create.emit(this.form.get('project').value);
  }
}
