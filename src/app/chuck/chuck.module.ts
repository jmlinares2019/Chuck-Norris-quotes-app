import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerfraseComponent } from './componentes/verfrase/verfrase.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [VerfraseComponent],
  imports: [
    CommonModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [VerfraseComponent]
})
export class ChuckModule { }
