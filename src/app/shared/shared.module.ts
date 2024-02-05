import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';
import { BigtextDirective } from './bigtext.directive';
import { MatFormField } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    FullnamePipe,
    BigtextDirective
  ],
  imports: [
    CommonModule,
    MatFormField,
    MatButton,
    MatInput,
    MatIcon
  ],
  exports:[
    FullnamePipe,
    BigtextDirective,
    MatFormField,
    MatButton,
    MatInput,
    MatIcon 
  ]
})
export class SharedModule { }
