import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../shared/material-import';
import { DocumentService } from '../../../service/document/document-service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

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
  sectionLabel: string;
  selectedFile: File | null = null;
  uploadProgress: number;

  constructor(private documentService: DocumentService) {
    this._formBuilder = inject(FormBuilder);
    this.sectionLabel = 'Document Upload';
    this.setUpForms();
    this.uploadProgress = 0;
  }

  /**
   * Sets up the form groups for the document upload process.
   *
   * @returns void
   */
  setUpForms(): void {
    this.projectNameFormGroup = this._formBuilder.group({
      projectNameCtrl: ['', Validators.required],
    });
    this.regionPreferenceFormGroup = this._formBuilder.group({
      regionPreferenceCtrl: [''],
    });
    this.documentFormGroup = this._formBuilder.group({
      documentCtrl: ['', Validators.required],
    });
  }

  /**
   * Uploads the selected file using the DocumentService.
   *
   * @returns void
   */
  uploadFile(): void {
    this.documentService
      .uploadFile(
        this.selectedFile as File,
        this.projectNameFormGroup.value.projectNameCtrl,
        this.regionPreferenceFormGroup.value.regionPreferenceCtrl
      )
      .subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            const percent = Math.round((100 * event.loaded) / event.total);
            this.uploadProgress = percent;
          } else if (event instanceof HttpResponse) {
            console.log('Upload finished', event.body);
          }
        },
        (err) => {
          console.error('Upload failed', err);
        }
      );
  }

  /**
   * Handles the file selection event.
   *
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
