import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEsimComponent, AddUserComponent, AssignConfirmDialogComponent, AssignDialogComponent, InventoryManagementComponent } from './inventory-management.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

export const routes: any[] = [
  {
      path: '', component: InventoryManagementComponent
  },
];


@NgModule({
  declarations: [
    InventoryManagementComponent,
    AssignDialogComponent,
    AssignConfirmDialogComponent,
    AddUserComponent,
    AddEsimComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
})
export class InventoryManagementModule { }
