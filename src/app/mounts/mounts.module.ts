import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountListDetailsComponent } from './mount-list-details/mount-list-details.component';



@NgModule({
  declarations: [
    MountListDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MountListDetailsComponent
  ]
})
export class MountsModule { }
