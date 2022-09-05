import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [LayoutComponent, TopbarComponent, SidebarComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
