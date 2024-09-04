import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadpdfComponent } from '../downloadpdf/downloadpdf.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,DownloadpdfComponent,MatDialogModule,MatDialogActions,DialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}
  openDialogue():void{
    const dialogRef = this.dialog.open(DownloadpdfComponent);
  }

}
