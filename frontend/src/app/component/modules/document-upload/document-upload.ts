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
  projectNameFormGroup!: FormGroup;
  regionPreferenceFormGroup!: FormGroup;
  documentFormGroup!: FormGroup;
  sectionLabel: string 
  selectedFile: File | null = null;

  constructor(private router: Router) {
    this._formBuilder = inject(FormBuilder);
    this.sectionLabel = 'Document Upload';
    this.setUpForms();
  }

  /**
   * Sets up the form groups for the document upload process.
   * @returns void
   */
  setUpForms(): void {
    this.projectNameFormGroup = this._formBuilder.group({
      projectNameCtrl: ['', Validators.required],
    });
    this.regionPreferenceFormGroup = this._formBuilder.group({
      regionPreferenceCtrl: ['']
    });
    this.documentFormGroup = this._formBuilder.group({
      documentCtrl: ['', Validators.required],
    });
  }

/**
 * Handles the file upload process.
 * @returns void
 */
  uploadFile(): void {
    console.log(this.regionPreferenceFormGroup.value.regionPreferenceCtrl);
    console.log(this.projectNameFormGroup.value.projectNameCtrl);
    console.log(typeof this.documentFormGroup.value.documentCtrl);
    console.log(this.documentFormGroup);
    console.log(this.selectedFile);
  }

/**
 * Handles the file selection event.
 * @param event The file selection event.
 * @returns void
 */
onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0] ?? null;
  if (!file) return;
  this.documentFormGroup.patchValue({ documentCtrl: file });
  this.documentFormGroup.get('documentCtrl')?.updateValueAndValidity();
  this.selectedFile = file;
}
}


