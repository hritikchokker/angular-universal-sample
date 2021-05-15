import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  postDetails!: any;
  constructor() { }

  @Input() set post(detail: any) {
    if (detail) {
      this.postDetails = detail;
    }
  }
  ngOnInit(): void {
  }

}
