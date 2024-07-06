import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  } from '../components/formulario/formulario.component';




@NgModule({
  declarations: [],
  imports: [
    MatCardModule, 
    MatButtonModule,
    CommonModule,
   
  ],
  exports: [
    MatCardModule, 
    MatButtonModule,
    CommonModule,
    
  ]
})
export class MaterialModule { }
