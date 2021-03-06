import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<Array<any>>;
  constructor(private $postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.$postService.getPosts();
  }

}
