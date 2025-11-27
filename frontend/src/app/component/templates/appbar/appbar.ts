import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import {  MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css',
})
export class Appbar {
  appName: string;
  buttonName: string;

  constructor(){
    this.appName = 'Cost and Carbon Aware Document Management System';
    this.buttonName = 'menu';
  }
}
