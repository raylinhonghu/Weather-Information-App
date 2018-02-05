import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }
