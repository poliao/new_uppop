import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditDetailComponent } from './edit-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [
    EditComponent,
    EditDetailComponent
  ],
})
export class EditModule { }
