import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class MaterialModule { }
