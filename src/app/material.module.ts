import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatTabsModule,MatMenuModule],
  exports: [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatTabsModule,MatMenuModule],
})
export class MaterialModule { }
