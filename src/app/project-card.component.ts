import {
  Component, Input, EventEmitter, Output, HostListener, OnInit, OnChanges, OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'demo-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() private project;
  @Input() private selected: boolean;
  @Output() private select = new EventEmitter<number>();
  @Output() private started = new EventEmitter<string>();

  ngOnInit(): void {
    this.started.emit(this.project.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes", JSON.stringify(changes));
  }

  ngDoCheck() {
    console.log("doCheck");
  }

  ngAfterContentInit() {
    console.log("ContentInit");
  }

  ngAfterContentCheck() {
    console.log("ContentCheck");
  }

  ngAfterViewInit() {
    console.log("ViewInit");
  }

  ngAfterViewCheck() {
    console.log("ViewCheck");
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }

  @HostListener('click') private selectProject() {
    if (this.selected) {
      this.select.emit(null);
    } else {
      this.select.emit(this.project.id);
    }
  }
}
