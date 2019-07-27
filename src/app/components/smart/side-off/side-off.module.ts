import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideOffComponent } from './side-off.component';



@NgModule({
  declarations: [SideOffComponent],
  exports: [
    SideOffComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SideOffModule { }
