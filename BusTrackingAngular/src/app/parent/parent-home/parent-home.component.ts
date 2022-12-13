import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {
  userLocalStorage:any=localStorage.getItem('user'); 
  userInfo:any=JSON.parse(this.userLocalStorage);
  id=Number(this.userInfo.nameid);
  markers: any = [];
  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 32.025984,
    lng: 35.853984,
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  constructor(public parentservices: ParentService) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }

  ngOnInit(): void {
    this.parentservices.getParentStudents(this.id);
    this.parentservices.getSchoolData();
   
    setTimeout(() => {
      this.addMarkers();
    }, 6000);

  }
  addMarkers() {
    for (let i = 0; i < this.parentservices.parentChaild.length; i++) {
      if (this.parentservices.parentChaild[i].round == 1) {
        if (this.parentservices.parentChaild[i].inbusstatus == 'true') {
          if(this.parentservices.parentChaild[i].xcurrent=='null'&& this.parentservices.parentChaild[i].ycurrent=='null'){
            this.markers.push({
              position: {
                lat: Number(this.parentservices.schoolData[i].xschool),
                lng: Number(this.parentservices.schoolData[i].yschool),
              },
              label: {
                color: 'green',
                text: (this.parentservices.parentChaild[i].fullname + 'in school'),
              },
              options: { animation: google.maps.Animation.DROP },
            })
          }else{
            this.markers.push({
              position: {
                lat: Number(this.parentservices.parentChaild[i].xhome),
                lng: Number(this.parentservices.parentChaild[i].yhome),
              },
              label: {
                color: 'red',
                text: (this.parentservices.parentChaild[i].fullname),
              },
              options: { animation: google.maps.Animation.DROP },
            })
          }
          
        } else {
          this.markers.push({
            position: {
              lat: Number(this.parentservices.parentChaild[i].xcurrent),
              lng: Number(this.parentservices.parentChaild[i].ycurrent),             

            },
            label: {
              color: 'black',
              text: (this.parentservices.parentChaild[i].fullname+'in bus'),
            },
            options: { animation: google.maps.Animation.DROP },
          })
        }
      } else {
        if (this.parentservices.parentChaild[i].inbusstatus == 'true') {
          if(this.parentservices.parentChaild[i].xcurrent=='null'&& this.parentservices.parentChaild[i].ycurrent=='null'){
            this.markers.push({
              position: {
                lat: Number(this.parentservices.schoolData[i].xschool),
                lng: Number(this.parentservices.schoolData[i].yschool),
              },
              label: {
                color: 'green',
                text: (this.parentservices.parentChaild[i].fullname + 'in school'),
              },
              options: { animation: google.maps.Animation.DROP },
            })
          }else{
            this.markers.push({
              position: {
                lat: Number(this.parentservices.parentChaild[i].xcurrent),
                lng: Number(this.parentservices.parentChaild[i].ycurrent), 
              },
              label: {
                color: 'black',
                text: (this.parentservices.parentChaild[i].fullname),
              },
              options: { animation: google.maps.Animation.DROP },
            })
          }
          
        } else {
          this.markers.push({
            position: {
                        
              lat: Number(this.parentservices.parentChaild[i].xhome),
              lng: Number(this.parentservices.parentChaild[i].yhome),
            },
            label: {
              color: 'red',
              text: (this.parentservices.parentChaild[i].fullname),
            },
            options: { animation: google.maps.Animation.DROP },
          })
        }

      }
    }

  }
}
