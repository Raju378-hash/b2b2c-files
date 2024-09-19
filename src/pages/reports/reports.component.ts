import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';


declare var require: any;
if(typeof document === 'object' && !!document) {
  var CanvasJS = require('../../../node_modules/@canvasjs/charts');
  CanvasJS.addColorSet("customColorSet",["#756CE3", "#7A41D3", "#C1A514", "#2C9173", "#912C2C", ]);
}




export interface PeriodicElement {
  month:string,
  eSIM:string,
  PhysicaleSIM:string

}

const ELEMENT_DATA: PeriodicElement[] = [
  {month: "January", eSIM: '99', PhysicaleSIM: "80", },
  {month: "February", eSIM: '48', PhysicaleSIM: "62", },
  {month: "March", eSIM: '108', PhysicaleSIM: "46", },
  {month: "April", eSIM: '47', PhysicaleSIM: "13", },
  {month: "May", eSIM: '47', PhysicaleSIM: "13", },
  {month: "June", eSIM: '47', PhysicaleSIM: "13", },
  
];




@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {


  showActive: boolean = true;
  showExpired: boolean = false;

  displayedColumns: string[] = ['month', 'eSIM', 'PhysicaleSIM',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  activeCustomers(){
    this.showActive = true;
    this.showExpired = false;
    
  }
  expired(){
    this.showActive = false;
   this.showExpired = true;
  }

  @ViewChild('linearChart') linearChart!: ElementRef;
  chart: any;
 

  ngOnInit(): void {
   
  }



  dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];

	
	chartOptions = {
    theme: "dark2",
    backgroundColor: "#0f1014",
	  title: {
		// text: "Cumulative sales"
	  },
	  data: [{
		type: "line",
		dataPoints: this.dps
	  }]
	}
	getChartInstance(chart: object) {
		this.chart = chart;
	}
	updateChart = () => {
		var yVal = this.dps[this.dps.length - 1].y +  Math.round(5 + Math.random() *(-5-5));
		this.dps.push({x: this.dps[this.dps.length - 1].x + 1, y: yVal});
 
		if (this.dps.length >  10 ) {
			this.dps.shift();
		}
		this.chart.render();
		setTimeout(this.updateChart, 1000); //Chart updated every 1 second
	}	
  chartOptions1 = {
	  animationEnabled: true,
    theme: "dark2",
    colorSet: "customColorSet",
    backgroundColor: "#0f1014",
    textColor:'#15171c',
	  title:{
		// text: "Popular countries"
	  },
	  data: [{
		type: "doughnut",    
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "India" },
		  { y: 10, name: "USA" },
		  { y: 20, name: "France" },
		  { y: 15, name: "Mexico" },
		  { y: 23, name: "Others" },
		  
		]
	  }]
	}	

  chartOptions2 = {
    title: {
      // text: 'Monthly Sales Data',
    },
    theme: 'dark2',
    backgroundColor: "#0f1014",
    animationEnabled: true,
    // exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '$#,##0k',
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        yValueFormatString: '$#,##0k',
        color: '#9564F8',
        dataPoints: [
          { label: 'Jan', y: 172},
          { label: 'Feb', y: 189 },
          { label: 'Mar', y: 201 },
          { label: 'Apr', y: 240 },
          { label: 'May', y: 166 },
          { label: 'Jun', y: 196 },
          { label: 'Jul', y: 218 },
          { label: 'Aug', y: 167 },
          { label: 'Sep', y: 175 },
          { label: 'Oct', y: 152 },
          { label: 'Nov', y: 156 },
          { label: 'Dec', y: 164 },
        ],
        
      },
    ],
  };

}
