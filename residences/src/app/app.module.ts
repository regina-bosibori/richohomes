import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,

} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  
  MatDialogTitle,
  FormsModule,
  MatCheckboxModule,
  



    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
