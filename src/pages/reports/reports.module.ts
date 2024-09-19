import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export const routes: any[] = [
  {
      path: '', component: ReportsComponent
  },
];



@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    CanvasJSAngularChartsModule 
    
  ]
})
export class ReportsModule { }
