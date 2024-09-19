import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from '../inventory-management/inventory-management.component';

export interface PeriodicElement {
  id:string;
  name: string;
  email:string;
  phone:string;
  nationality:string;
  img: string;
  eKYC: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "../../assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876368", name: 'Zacky', email: "zacky@gmail.com",  img: "../../assets/img/user2.jpg", phone: "+91 8796542130",  nationality: 'Spain', eKYC: "Rejected"},
  {id: "#876412", name: 'Emily ', email: "emily@gmail.com",  img: "../../assets/img/user3.jpg", phone: "+91 8541230795",  nationality: 'Asia', eKYC: "Completed"},
  {id: "#876364", name: 'Mark', email: "mark@gmail.com",  img: "", phone: "+91 9854632104",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876621", name: 'Rajesh', email: "rajesh@gmail.com",  img: "../../assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'USA', eKYC: "Pending"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Rejected"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "../../assets/img/user3.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "../../assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Pending"},
  {id: "#876368", name: 'Zacky', email: "zacky@gmail.com",  img: "../../assets/img/user2.jpg", phone: "+91 8796542130",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876412", name: 'Emily ', email: "emily@gmail.com",  img: "../../assets/img/user3.jpg", phone: "+91 8541230795",  nationality: 'Asia', eKYC: "Completed"},
  {id: "#876364", name: 'Mark', email: "mark@gmail.com",  img: "", phone: "+91 9854632104",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876621", name: 'Rajesh', email: "rajesh@gmail.com",  img: "../../assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'USA', eKYC: "Pending"},
];


@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {

  showActive: boolean = true;
  showExpired: boolean = false;
  tooltipContent:any ='ghgh'
  showMenu:boolean = false
  
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'nationality', 'eKYC', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild('tooltipTemplate') tooltipTemplate!: TemplateRef<any>;

  

  constructor(public dialog: MatDialog){

  }

  openMenu(){
    this.showMenu = !this.showMenu
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  activeCustomers(){
    this.showActive = true;
    this.showExpired = false;
    
  }

  ekycRejected(element: any) {
    
      if(element.eKYC === 'Rejected'){
        const dialog = this.dialog.open(EkycDialogeComponent, {
          panelClass: ['dilogue-custom'],
          autoFocus: false
        })
        dialog.afterClosed().subscribe(result => {
          if(result){
          }
          
        })
      }else if(element.eKYC === 'Pending'){

        const dialog = this.dialog.open(AddUserComponent, {
          panelClass: ['dilogue-custom'],
          autoFocus: false
        })
        dialog.afterClosed().subscribe(result => {
          if(result){
          }
          
        })

      }
    
    
    
  }


 

  expired(){
    this.showActive = false;
   this.showExpired = true;
  }

  getTooltipContent():any{
       return this.tooltipContent
  }

  add() {
    const dialog = this.dialog.open(AddCustomerDialog, {
      panelClass: ['dilogue-custom'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })
  }

}


@Component({
  selector: 'add-customer-dialog',
  templateUrl: 'add-customer.html'
})

export class AddCustomerDialog {

  addAddressForm!:FormGroup
  profileToken:any
  profileData:any
  constructor(public dialogRef: MatDialogRef<AddCustomerDialog>,@Inject(MAT_DIALOG_DATA) public data: any,  public fb: FormBuilder) {

  }


  close() {
    this.dialogRef.close()
  }

  


}


@Component({
  selector: 'add-ekyc-dialoge',
  templateUrl: 'ekyc-dialoge.component.html'
})

export class EkycDialogeComponent {

  imageUrl:any;
  
  constructor(public dialogRef: MatDialogRef<EkycDialogeComponent>,) {

  }


  close() {
    this.dialogRef.close()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
  


}
