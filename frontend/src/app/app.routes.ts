import { Routes } from '@angular/router';
import { Login } from './component/auth/login/login';
import { DocumentList } from './component/modules/document-list/document-list';
import { DocumentUpload } from './component/modules/document-upload/document-upload';

export const routes: Routes = [
    {component: Login, path: ''},
    {component: DocumentList, path: 'list'},
    {component: DocumentUpload, path: 'upload'}
];
