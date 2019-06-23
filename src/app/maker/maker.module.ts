import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerComponent } from './maker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MakerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MakerModule { }
