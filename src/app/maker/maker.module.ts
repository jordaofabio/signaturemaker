import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerComponent } from './maker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MaskPhonePipe } from '../shared/pipes/mask-phone.pipe';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [MakerComponent, MaskPhonePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
  ]
})
export class MakerModule { }
