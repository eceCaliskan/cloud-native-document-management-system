import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentUpload } from '../document-upload/document-upload';
import { MaterialModule } from '../../../shared/material-import';
import { AuthService } from '../../../service/auth/auth-service';

export interface DocumentListInterface {
  projectID: number;
  projectName: string;
  author: string;
  actions: string;
}

const ELEMENT_DATA: DocumentListInterface[] = [
  { projectID: 1, projectName: 'Project 1', author: 'Author 1', actions: 'Action 1' },
  { projectID: 2, projectName: 'Project 2', author: 'Author 2', actions: 'Action 2' },
  { projectID: 3, projectName: 'Project 3', author: 'Author 3', actions: 'Action 3' },
  { projectID: 4, projectName: 'Project 4', author: 'Author 4', actions: 'Action 4' },
  { projectID: 5, projectName: 'Project 5', author: 'Author 5', actions: 'Action 5' },
];

@Component({
  selector: 'app-document-list',
  imports: [MaterialModule, DocumentUpload],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  displayedColumns: string[];
  filter: { filterLabel: string; placeholder: string };
  dataSource: MatTableDataSource<DocumentListInterface>;
  isUploadSectionOpen: boolean;
  userRole: string | null 

  constructor(private authService: AuthService) {
    this.displayedColumns = ['projectID', 'projectName', 'author', 'actions'];
    this.filter = { filterLabel: 'Filter', placeholder: 'Enter filter text' };
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.isUploadSectionOpen = false;
    this.userRole = this.authService.getUserRoleFromLocalStorage();
  }

  /**
   * Applies a filter to the data source based on the input event.
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
