import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, MenuComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, HeaderComponent, MenuComponent],
})
export class ComponentsModule {}
