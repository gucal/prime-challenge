import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar.component';
import { SidebarComponent } from './sidebar.component';
import { MainComponent } from './main.component';
import { HorizontalItemCardComponent } from '../horizontal-item-card/horizontal-item-card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    MainComponent,
    HorizontalItemCardComponent,
  ],
  imports: [CommonModule],
})
export class LayoutModule {}
