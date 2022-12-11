import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import{Chart,registerables}from'node_modules/chart.js';
import { ChartsService } from '../Services/charts.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import * as XLSX from 'xlsx';



Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allData:any[]=[];
  busNumber:any[]=[];
  studentCount:any[]=[];
  dtoptoins:any={};
  markers: any = [];



  constructor(public service:AdminService,private Chartservice:ChartsService) { 
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }
 
  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 31.99377324595812,
    lng: 35.910535112247764,
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom:30,
    minZoom: 8,
  }
  addMarkers() {

    for (let i = 0; i < this.service.routes.length; i++) {
    
          if(this.service.routes[i].xcurrent=='null'&& this.service.routes[i].ycurrent=='null'){
            this.markers.push({
              position: {
                lat: Number(this.service.school[0].xschool),
                lng: Number(this.service.school[0].yschool),
              },
              label: {
                color: 'green',
                text: (this.service.routes[i].busnumber+ ' ' + this.service.routes[i].fullname),
              },
              options: { animation: google.maps.Animation.DROP },
            })
          }else{
            this.markers.push({
              position: {
                lat: Number(this.service.routes[i].xcurrent),
                lng: Number(this.service.routes[i].ycurrent),
              },
              label: {
                color: 'black',
                text: (this.service.routes[i].busnumber+ ' ' + this.service.routes[i].fullname),
              },
              options: { animation: google.maps.Animation.DROP },
              
            })
          }
          

    }
  }
  ngOnInit(): void {
    this.service.stdCount();
    this.service.TeacherCounter();
    this.service.ParentCounter();
    this.service.DriverCounter();
    this.service.getAllSchool(); 
    this.service.getAllRoutes();
    console.log('routes : '+ this.service.routes);
    this.dtoptoins={
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf',
      ]
     
    };
    
    this.Chartservice.getTeacherCount();
    this.Chartservice.getDriverCount();
    this.Chartservice.getStudentCount();
    this.Chartservice.getParentCount();
    this.Chartservice.getChartInfo().subscribe((resp:any)=>{
      this.allData=resp;
      this.allData.forEach((us: any) => {
        this.busNumber.push(us.busnumber);
        this.studentCount.push(us.studentCount);
    })
    });
    this.getCharts(this.busNumber,this.studentCount);
    console.log(this.busNumber);
    

    setTimeout(() => {
      this.addMarkers();
    }, 2000);
  }
  getCharts(bus:any,stdCount:any ){ 
    setTimeout(() => {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: bus,
          datasets: [{
              label: 'Number Of Student in Each Bus',
              data: stdCount,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                 
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  const pieChart = new Chart("pieChart", {
    type: 'pie',
    data: {
        labels: ['TeacherCount','DriverCount','ParentCount'],
        datasets: [{
            label: '',
            data: [this.Chartservice.teacherCount,this.Chartservice.driverCount,this.Chartservice.parentCount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(34, 100, 120, 0.2)',
                'rgba(100, 50, 130, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(34, 100, 120, 1)',
                'rgba(100, 50, 130, 1)',   
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}, 3000);
  }

  }

  
    
 







