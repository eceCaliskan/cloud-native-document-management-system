import { Component, inject } from '@angular/core'; // <-- Add inject import
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../shared/material-import';

@Component({
  selector: 'app-document-upload',
  imports: [MaterialModule],
  templateUrl: './document-upload.html',
  styleUrl: './document-upload.css',
})
export class DocumentUpload {
  
  private _formBuilder: FormBuilder;
  firstFormGroup: FormGroup;
  secondFormGroup : FormGroup;
  sectionLabel: string 

  constructor(private router: Router) {
    this._formBuilder = inject(FormBuilder);
    this.sectionLabel = 'Document Upload';
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}


