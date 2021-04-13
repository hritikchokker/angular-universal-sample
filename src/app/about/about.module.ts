import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }])
  ]
})
export class AboutModule { }
