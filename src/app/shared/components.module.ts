import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WeekDayComponent } from './dashboard/components/week-day/week-day.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, MenuComponent, WeekDayComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, HeaderComponent, MenuComponent],
})
export class ComponentsModule {}
