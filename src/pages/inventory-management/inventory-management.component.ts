import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';




export interface PeriodicElement {
  id:string;
  country: string;
  PlanName:string;
  DataVoiceSms:string;
  Validitity:string;
  Speed: string;
  SimType:string;
  PurchasedData:string;
  assign:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "#876364", country: 'India', PlanName: "100 MB", DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '30 Days', Speed: "4G/5G", SimType:'eSIM', PurchasedData:'05/01/2024', assign:'Assign'},
  {id: "#876368", country: 'USA', PlanName: "1 GB",  DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '7 Days', Speed: "5G", SimType:'Physical', PurchasedData:'07/01/2024', assign:'Assign'},
  {id: "#876412", country: 'Thailand ', PlanName: "1 GB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '15 Days', Speed: "4G/5G", SimType:'eSIM', PurchasedData:'07/01/2024', assign:'Assign'},
  {id: "#876364", country: 'Japan', PlanName: "2 GB",  DataVoiceSms: "2GB/100MIN/40SMS",  Validitity: '30 Days', Speed: "5G", SimType:'eSIM', PurchasedData:'09/01/2024', assign:'Assign'},
  {id: "#876621", country: 'USA', PlanName: "2 GB",   DataVoiceSms: "5GB/100MIN/40SMS",  Validitity: '30 Days', Speed: "5G", SimType:'eSIM', PurchasedData:'12/01/2024', assign:'Assign'},
  {id: "#876364", country: 'China', PlanName: "100 MB",   DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '30 Days', Speed: "5G", SimType:'Physical', PurchasedData:'12/01/2024', assign:'Assign'},
  {id: "#876364", country: 'Thailand', PlanName: "100 MB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '15 Days', Speed: "3G", SimType:'eSIM', PurchasedData:'12/01/2024', assign:'Assign'},
  {id: "#876364", country: 'USA', PlanName: "100 MB",   DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '15 Days', Speed: "4G/5G", SimType:'eSIM', PurchasedData:'13/01/2024', assign:'Assign'},
  {id: "#876364", country: 'Japan', PlanName: "100 MB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '15 Days', Speed: "3G", SimType:'Physical', PurchasedData:'13/01/2024', assign:'Assign'},
  {id: "#876368", country: 'USA', PlanName: "1 GB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '15 Days', Speed: "3G", SimType:'eSIM', PurchasedData:'15/01/2024', assign:'Assign'},
  {id: "#876412", country: 'Turkey ', PlanName: "3 GB",   DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '7 Days', Speed: "4G", SimType:'eSIM', PurchasedData:'15/01/2024', assign:'Assign'},
  {id: "#876364", country: 'Thailand', PlanName: "2 GB",   DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '7 Days', Speed: "4G", SimType:'Physical', PurchasedData:'15/01/2024', assign:'Assign'},
  {id: "#876621", country: 'Japan', PlanName: "2 GB",   DataVoiceSms: "5GB/100MIN/30SMS",  Validitity: '7 Days', Speed: "4G", SimType:'eSIM', PurchasedData:'17/01/2024', assign:'Assign'},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {id: "#876364", country: 'Rajesh', PlanName: "100 MB",   DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '02/01/2024', Speed: "03/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876368", country: 'Zacky', PlanName: "1 GB",   DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '03/01/2024', Speed: "04/01/2024", SimType:'Physical', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876412", country: 'Emily ', PlanName: "1 GB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '04/01/2024', Speed: "05/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Mark', PlanName: "2 GB",   DataVoiceSms: "2GB/100MIN/40SMS",  Validitity: '05/01/2024', Speed: "06/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876621", country: 'Rajesh', PlanName: "2 GB",   DataVoiceSms: "5GB/100MIN/40SMS",  Validitity: '06/01/2024', Speed: "07/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Rajesh', PlanName: "100 MB",   DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '07/01/2024', Speed: "08/01/2024", SimType:'Physical', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Rajesh', PlanName: "100 MB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '08/01/2024', Speed: "09/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Rajesh', PlanName: "100 MB",   DataVoiceSms: "2GB/100MIN/30SMS",  Validitity: '09/01/2024', Speed: "10/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Rajesh', PlanName: "100 MB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '10/01/2024', Speed: "11/01/2024", SimType:'Physical', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876368", country: 'Zacky', PlanName: "1 GB",   DataVoiceSms: "1GB/100MIN/20SMS",  Validitity: '11/01/2024', Speed: "13/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876412", country: 'Emily ', PlanName: "3 GB",   DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '03/01/2024', Speed: "04/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876364", country: 'Mark', PlanName: "2 GB",   DataVoiceSms: "3GB/100MIN/30SMS",  Validitity: '02/01/2024', Speed: "03/01/2024", SimType:'Physical', PurchasedData:'Delete', assign:'Assign'},
  {id: "#876621", country: 'Rajesh', PlanName: "2 GB",   DataVoiceSms: "5GB/100MIN/30SMS",  Validitity: '03/01/2024', Speed: "04/01/2024", SimType:'eSIM', PurchasedData:'Delete', assign:'Assign'},
];



@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent {



  showActive: boolean = true;
  showExpired: boolean = false;
  
  displayedColumns: string[] = ['id', 'country', 'PlanName', 'SimType', 'DataVoiceSms', 'Validitity', 'Speed', 'PurchasedData','assign'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  

  constructor(public dialog: MatDialog){

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
  expired(){
    this.showActive = false;
   this.showExpired = true;
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

  addEsim(){
    const dialog = this.dialog.open(AddEsimComponent, {
      panelClass: ['dilogue-custom','dilogue-custom1'],
      autoFocus: false,
      width:'50%',
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })
  }

}


@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class AssignDialogComponent {

  public inventoryCustomers:any[] =[
    {customerImg:'../../assets/img/customer-img.png', customerName:'Iseya', orderID:'#876364', email:'iseyah@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/us.png',countryName:'United States' },
    {customerImg:'../../assets/img/customer1-img.png', customerName:'Rajesh Cooper', orderID:'#876364', email:'raj@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/europ1.png',countryName:'Europe' },
    {customerImg:'../../assets/img/customer2-img.png', customerName:'George Matt', orderID:'ID: #876364', email:'matt.g@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/mexicon1.png',countryName:'Mexico' },
    {customerImg:'../../assets/img/customer3-img.png', customerName:'Imam Syed', orderID:'ID: #876364', email:'imamy2@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/japan1.png',countryName:'Japan' },
    {customerImg:'../../assets/img/customer4-img.png', customerName:'Helda', orderID:'ID: #876364', email:'helda@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/turkey1.png',countryName:'Turkey' },
    {customerImg:'../../assets/img/customer5-img.png', customerName:'Collin Supper', orderID:'ID: #876364', email:'collin@gmail.com', phone:'+91 7904242864', countryFlag:'../../assets/img/uk1.png',countryName:'United Kingdom' },
  ]

  constructor(public dialog: MatDialog){

  }

  confirmDialoge(){
    this.dialog.open(AssignConfirmDialogComponent,{
      panelClass:'assign-dialog',
      width:'35%',
    });
  }
  add() {
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


@Component({
  selector: 'app-assign-confirm-dialog',
  templateUrl: './assign-confirm-dialog.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class AssignConfirmDialogComponent {


  constructor(public dialogRef: MatDialogRef<AssignConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public router: Router) {

  }

  proceedPayment(){
    this.router.navigate(['/dashboard/order-placed'])
    
  }

  
  close() {
    this.dialogRef.close(AssignDialogComponent)
  }

  
}




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class AddUserComponent {

  showAddUser:boolean = true
  showEkyc:boolean = false
  imageUrl!: string;


  constructor(public dialogRef: MatDialogRef<AssignConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  nextDialoge(){
    this.showAddUser = false
    this.showEkyc = true
  }
  back(){
    this.showAddUser = true
    this.showEkyc = false
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
  
  
  close() {
    this.dialogRef.close()
  }

  
}




@Component({
  selector: 'app-add-esim',
  templateUrl: './add-esim.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class AddEsimComponent {


  public addeSim:any[] = [
    {},
    {},
    {},
   
  ]

  constructor(public dialogRef: MatDialogRef<AddEsimComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  
  close() {
    this.dialogRef.close()
  }

  
}


