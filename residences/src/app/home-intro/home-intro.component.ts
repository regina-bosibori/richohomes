import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { DownloadpdfComponent } from '../downloadpdf/downloadpdf.component';
import { DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-home-intro',
  standalone: true,
  imports: [MatButtonModule,DownloadpdfComponent,MatDialogModule,MatDialogActions,DialogModule],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.css'
})
export class HomeIntroComponent {
  constructor(public dialog: MatDialog) {}
  openDialogue():void{
    const dialogRef = this.dialog.open(DownloadpdfComponent);
  }


}
