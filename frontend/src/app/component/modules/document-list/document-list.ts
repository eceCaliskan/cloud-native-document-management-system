import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
export interface DocumentListInterface {
  projectID: number;
  projectName: string;
  author: string;
  actions: string;
}

const ELEMENT_DATA: DocumentListInterface[] = [
  {projectID: 1, projectName: 'Project 1', author: 'Author 1', actions: 'Action 1'},
  {projectID: 2, projectName: 'Project 2', author: 'Author 2', actions: 'Action 2'},
  {projectID: 3, projectName: 'Project 3', author: 'Author 3', actions: 'Action 3'},
  {projectID: 4, projectName: 'Project 4', author: 'Author 4', actions: 'Action 4'},
  {projectID: 5, projectName: 'Project 5', author: 'Author 5', actions: 'Action 5'},
 
];

@Component({
  selector: 'app-document-list',
  imports: [MatTableModule, MatCard, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  displayedColumns: string[];
  filter: {filterLabel:string, placeholder:string};
  dataSource: MatTableDataSource<DocumentListInterface>;

  constructor() {
    this.displayedColumns = ['projectID', 'projectName', 'author', 'actions'];
    this.filter = {filterLabel: 'Filter', placeholder: 'Enter filter text'};
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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
