import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
 
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
 
  MatDialogTitle,

} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';






@Component({
  selector: 'app-downloadpdf',
  standalone: true,
  imports: [FormsModule,MatLabel,MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
 
  MatDialogTitle,
  FormsModule,
  MatCheckboxModule
  ],
  templateUrl: './downloadpdf.component.html',
  styleUrl: './downloadpdf.component.css'
})
export class DownloadpdfComponent {
  name:any
  email:any
  phone:any
  company:any
  message:any



}
