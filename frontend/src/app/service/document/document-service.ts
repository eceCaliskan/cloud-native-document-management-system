import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  uploadProgress: number;

  constructor(private http: HttpClient) {
    this.uploadProgress = 0;
  }

  /**
   * Uploads a file along with project name and region preference.
   *
   * @param file selected file
   * @param projectName name of the project
   * @param regionPreference preferred region
   * @returns Subscription
   */
  uploadFile(file: File, projectName: string, regionPreference: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('projectName', projectName);
    formData.append('regionPreference', regionPreference);

    return this.http.post('http://localhost:8000/pdf-upload', formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
