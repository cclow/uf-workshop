import { Component, OnDestroy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Http } from "@angular/http";
import { Subscription } from "rxjs";

const API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

@Component({
  selector: 'demo-books',
  template: `
<md-card>
  <form [formGroup]="form">
  <md-input formControlName="search" name="search" placeholder="Search"></md-input>
  </form>
  <md-card-content *ngFor="let book of books">{{book}}</md-card-content>
</md-card>
`,
  styles: [`
md-input {
width: 100%;
}
`]
})
export class BooksComponent implements OnDestroy {
  private form: FormGroup;
  private books;
  private subscription: Subscription;

  constructor(private http: Http) {
    this.form = new FormGroup({
      search: new FormControl()
    });

    this.subscription = this.form.get('search').valueChanges
      .debounceTime(300)
      .switchMap(e => this.http.get(`${API_PATH}?q=${e}`))
      .map(e => e.json() || {})
      .map(e => e['items'])
      .map(e => e.map(item => [item['volumeInfo']['title'], item['volumeInfo']['authors']]))
      .subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
