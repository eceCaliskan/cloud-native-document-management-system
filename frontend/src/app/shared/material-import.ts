import { Component, Inject, NgModule, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { DocumentUpload } from '../component/modules/document-upload/document-upload';
import { MatDivider } from '@angular/material/divider';



@NgModule({
  imports: [   
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule, 
    MatButtonToggleModule,
    MatTableModule, MatCard, MatPaginatorModule, MatDivider
],
   exports: [   
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule, 
    MatButtonToggleModule,
    MatTableModule, MatCard, MatPaginatorModule, MatDivider]
  
})
export class MaterialModule {
 
}
