import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [MatFormFieldModule, MatExpansionModule, MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatTabsModule,MatMenuModule],
  exports: [MatFormFieldModule, MatExpansionModule, MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatTabsModule,MatMenuModule],
})
export class MaterialModule { }
