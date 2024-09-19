import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogeComponent } from '../buysim-detailed/buysim-detailed.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

public notifications:any[] =[
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

constructor(public dialog: MatDialog){}


openCart(){
  const dialog = this.dialog.open(CartDialogeComponent, {
    panelClass: ['dilogue-custom', 'dilogue-cart', 'device-compatibility'],
    autoFocus: false
  })
  dialog.afterClosed().subscribe(result => {
    if(result){
    }
    
  })
}

}
