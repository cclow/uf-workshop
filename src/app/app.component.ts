import { Component } from '@angular/core';
// import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
// <h1>
//   {{title}}
// </h1>
// `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Demo';

  // ngOnInit() {
    // let o1 = Observable.interval(500)
    //   .take(10)
    //   .map(e => e*2);
    //   // .do(e => { if (e === 4) throw("It's 4")});
    //
    // let o2 = Observable.interval(700)
    //   .take(10)
    //   .scan((sum, i) => sum+i, 0)
    //   .subscribe(
    //     e => { console.log(e)},
    //     err => {console.error(err)},
    //     () => { console.log("completed")}
    //   );

    // Observable.combineLatest(o1, o2, (e1, e2) => [e1, e2])
    // let down$ = Observable.fromEvent(document, 'mousedown');
    // let up$ = Observable.fromEvent(document, 'mouseup');
    // let move$ = Observable.fromEvent(document, 'mousemove');
    // down$
    //   .switchMap(() => move$.takeUntil(up$))
    //   .subscribe(
    //     (e: MouseEvent) => { console.log(e.clientX, e.clientY)},
    //     err => {console.error(err)},
    //     () => { console.log("completed")}
    //   );
  // }
}
