import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WeekDayComponent } from './dashboard/components/week-day/week-day.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent as ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    WeekDayComponent,
    ModalComponent,
  ],
  imports: [CommonModule,    
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule],
  exports: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    WeekDayComponent,
    ModalComponent,
  ],
  entryComponents: [ModalComponent]
})
export class ComponentsModule {}
