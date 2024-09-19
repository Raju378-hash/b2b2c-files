import { Component } from '@angular/core';
import { AssignDialogComponent } from '../../pages/inventory-management/inventory-management.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.scss']
})
export class OrderSummeryComponent {

  public orderList:any[]=[
    {},
    {},
    {},
  ]

  
  constructor(public dialog: MatDialog, public router: Router){

  }


  openDialog(){
    const dialog = this.dialog.open(AssignDialogComponent,{
      panelClass:'assign-dialog',
      width:'60%',
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })
  }

  proceedPayment(){
    this.router.navigate(['/dashboard/order-placed'])
  }


}
