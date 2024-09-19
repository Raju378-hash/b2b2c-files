import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buy-sims',
  templateUrl: './buy-sims.component.html',
  styleUrls: ['./buy-sims.component.scss']
})
export class BuySimsComponent {

  showLocal: boolean = true;
  showRegional: boolean = false;


  public countries:any[] = [
    {countryflag:"../../assets/img/usa.png", countryName:'United States'},
    {countryflag:"../../assets/img/india.png", countryName:'India'},
    {countryflag:"../../assets/img/china.png", countryName:'China'},
    {countryflag:"../../assets/img/japan.png", countryName:'Japan'},
    {countryflag:"../../assets/img/turkey.png", countryName:'Turkey'},
    {countryflag:"../../assets/img/egypt.png", countryName:'Egypt'},
    {countryflag:"../../assets/img/thailand.png", countryName:'Thailand'},
    {countryflag:"../../assets/img/united-kingdom.png", countryName:'United Kingdom'},
    {countryflag:"../../assets/img/switzerland.png", countryName:'Switzerland'},
    {countryflag:"../../assets/img/malaysia.png", countryName:'Malaysia'},
    {countryflag:"../../assets/img/vietnam.png", countryName:'Vietnam'},
    {countryflag:"../../assets/img/usa.png", countryName:'United States'},
    {countryflag:"../../assets/img/italy.png", countryName:'Italy'},
    {countryflag:"../../assets/img/kenya.png", countryName:'Kenya'},
  ]


  public Regional:any[] = [
    {countryflag:"../../assets/img/Africa.png", countryName:'Africa', data:'$19/GB'},
    {countryflag:"../../assets/img/Asia.png", countryName:'Asia', data:'$6/GB'},
    {countryflag:"../../assets/img/Caribbean-Islands.png", countryName:'Caribbean Islands', data:'$9/GB'},
    {countryflag:"../../assets/img/Europe.png", countryName:'Europe', data:'$24/GB'},
    {countryflag:"../../assets/img/latin.png", countryName:'Latin America', data:'$3/GB'},
    {countryflag:"../../assets/img/Middle-east.png", countryName:'Middle East & North Africa', data:'$17/GB'},
    {countryflag:"../../assets/img/North-America.png", countryName:'North America', data:'$8/GB'},
  ]

  
  constructor(public router: Router){

  }

  ngOnInit(): void {
    
  }


  
  localeSim(){
    this.showLocal = true;
    this.showRegional = false;
    
  }
  regionalEsim(){
    this.showLocal = false;
   this.showRegional = true;
  }

  buySimDetailed(){
    this.router.navigate(['/dashboard/buysim-detailed']);
  }
}
