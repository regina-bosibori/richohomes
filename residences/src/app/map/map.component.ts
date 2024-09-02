import { Component } from '@angular/core';
import { DownloadpdfComponent } from '../downloadpdf/downloadpdf.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [DownloadpdfComponent,MatDialogModule,MatDialogActions,DialogModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(public dialog: MatDialog) {}
  openDialogue():void{
    const dialogRef = this.dialog.open(DownloadpdfComponent);
  }

}
