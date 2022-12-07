import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public service:AdminService) { 
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }

 
  

  markers: any = [];
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
  ngOnInit(): void {
    this.service.stdCount();
    this.service.TeacherCounter();
    this.service.ParentCounter();
    this.service.DriverCounter();
    this.service.getAllSchool(); 
    this.service.getAllRoutes();
    console.log('routes : '+ this.service.routes);
    

    setTimeout(() => {
      this.addMarkers();
    }, 2000);
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


}
