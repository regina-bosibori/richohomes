import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { DownloadpdfComponent } from '../downloadpdf/downloadpdf.component';
import { DialogModule } from '@angular/cdk/dialog';




@Component({
  selector: 'app-floorplans',
  standalone: true,
  imports: [MatButtonModule,DownloadpdfComponent,MatDialogModule,MatDialogActions,DialogModule], 
    
  templateUrl: './floorplans.component.html',
  styleUrl: './floorplans.component.css'
})
export class FloorplansComponent {
  constructor(public dialog: MatDialog) {}
  openDialogue():void{
    const dialogRef = this.dialog.open(DownloadpdfComponent);
  }

}
