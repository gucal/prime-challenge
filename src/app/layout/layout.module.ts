import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar.component';
import { SidebarComponent } from './sidebar.component';
import { MainComponent } from './main.component';
import { HorizontalCardComponent } from '../horizontal-card/horizontal-card.component';
import { RatingModule } from 'primeng/rating';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    MainComponent,
    HorizontalCardComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, FormsModule, RatingModule],
})
export class LayoutModule {}
