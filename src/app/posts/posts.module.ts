import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PostService } from './service/post.service';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ], providers: [PostService]
})
export class PostsModule { }
