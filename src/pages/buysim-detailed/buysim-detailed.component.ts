import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buysim-detailed',
  templateUrl: './buysim-detailed.component.html',
  styleUrls: ['./buysim-detailed.component.scss']
})
export class BuysimDetailedComponent {


  showLocal: boolean = true;
  showRegional: boolean = false;


  public dataPlans:any[] = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]



  constructor(public router: Router, public dialog: MatDialog){}


  localeSim(){
    this.showLocal = true;
    this.showRegional = false;
    
  }
  regionalEsim(){
    this.showLocal = false;
   this.showRegional = true;
  }
  backToPage(){
    this.router.navigate(['/dashboard/buy-sims'])
  }
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



@Component({
  selector: 'app-cartDialoge',
  templateUrl: './cartDialoge.component.html',
  styleUrls: ['./buysim-detailed.component.scss']
})
export class CartDialogeComponent {

  agree:boolean = false;
  errorFlag:boolean = false
  count:number = 1;
  constructor(public dialogRef: MatDialogRef<CartDialogeComponent>, public router: Router, public dialog: MatDialog) { }

  gotoCart() {
    this.router.navigate(['/dashboard/shiping-details'])
    this.dialogRef.close()
  }

  close() {
    // document.getElementsByClassName("animate__animated")[0].classList.remove("animate__slideInLeft")
    // document.getElementsByClassName("animate__animated")[0].classList.add("animate__slideOutRight");
    // setTimeout(() => { this.dialogRef.close(); }, 1000);
    // let val:any = this.count++

    this.dialogRef.close()
  }

  


}



