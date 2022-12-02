import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit {

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  waypoints_order: any[] = []
  waypts: google.maps.DirectionsWaypoint[] = [];
  currentLoc: string | google.maps.LatLng | google.maps.Place |
    google.maps.LatLngLiteral | undefined

    setLocation:any={}

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.currentLoc = new google.maps.LatLng({ lat: 31.971746, lng:35.840065 })

    setTimeout(() => {
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer);
    }, 2000);
  }

  initMap(): void {

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 7,
        center: { lat: 31.971746, lng: 35.840065 },
      }
    ); 
        this.waypts.push({
          location: new google.maps.LatLng({ lat: 31.90805194376617, lng: 35.98028410063239 }),
          stopover: true,
        });
        this.waypts.push({
          location: new google.maps.LatLng({ lat: 31.8538270, lng: 35.92157591065 }),
          stopover: true,
        });
    this.directionsRenderer.setMap(map);
  }


  calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer
  ): void {
    if (this.currentLoc != undefined)
      directionsService
        .route({
          origin: this.currentLoc,
          destination:new google.maps.LatLng({ lat: 31.97, lng:35.84 }),
          waypoints: this.waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
          const route = response.routes[0];
          this.waypoints_order = route.waypoint_order;        
          
          const summaryPanel = document.getElementById(
            "directions-panel"
          ) as HTMLElement;
          summaryPanel.innerHTML = "";
          // For each route, display summary information.
          for (let i = 0; i < route.legs.length; i++) {
            const routeSegment = i + 1;
            summaryPanel.innerHTML +=
            "<b>" + routeSegment + "</b>"+"<b>. Destination Route : </b><br>";
            summaryPanel.innerHTML += route.legs[i].start_address + "<b> To </b>";
            summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
            summaryPanel.innerHTML +=  "<b>"+route.legs[i].distance!.text + "</b><br><br>";
          }
        })
        .catch((e) => window.alert("Directions request failed due to " + e));
  }

}
