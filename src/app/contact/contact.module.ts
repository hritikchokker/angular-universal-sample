import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }])
  ]
})
export class ContactModule { }
