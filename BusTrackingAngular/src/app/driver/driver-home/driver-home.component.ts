import { Component, OnInit } from '@angular/core';
import { DreiverService } from 'src/app/Services/dreiver.service';
import { ToastrService } from 'ngx-toastr';

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
    driverId: number =58;

  constructor(public dreiverServices:DreiverService,public toaster:ToastrService) { }

  ngOnInit(): void {
    
    this.dreiverServices.getStudentByDriverId(this.driverId);
    this.dreiverServices.GetBusRouteByDriverId(this.driverId);

    setTimeout(() => {   
      if(this.dreiverServices.busRoute.xcurrent=='null'||this.dreiverServices.busRoute.ycurrent=='null'){
        this.currentLoc = new google.maps.LatLng({ lat: Number(this.dreiverServices.busRoute.xstart), lng:Number(this.dreiverServices.busRoute.ystart) });
      }else{

        this.currentLoc = new google.maps.LatLng({ lat: Number(this.dreiverServices.busRoute.xcurrent), lng:Number(this.dreiverServices.busRoute.ycurrent) });
      }  
      this.initMap();
       }, 2000);
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
    for(let i =0;i<this.dreiverServices.busStudents.length;i++)
    {
      if(this.dreiverServices.busStudents[i].inbusstatus=='true')
      {
        this.waypts.push({
          location: new google.maps.LatLng({ lat:Number(this.dreiverServices.busStudents[i].xhome), lng: Number(this.dreiverServices.busStudents[i].yhome) }),
          stopover: true,
        });
      }
    }        
    
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
          destination: new google.maps.LatLng({ lat: Number(this.dreiverServices.busRoute.xend), lng:Number(this.dreiverServices.busRoute.yend) }),        
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
  next()
  {
    if(this.waypoints_order.length<1)
    {
      this.dreiverServices.UpdateAllStudentStatus();
      this.dreiverServices.SetCureenBusLocationAftreEnf(this.driverId);
      //
      // this.router.navigate(['auth/login']);
      localStorage.clear();
      this.toaster.success("You Finished Your Routes Today , Thank You !");
      return

    }

    this.currentLoc = this.waypts.splice(this.waypoints_order[0], 1)[0].location;
    if (this.currentLoc instanceof google.maps.LatLng) {
      this.dreiverServices.UpdateStudentBusStatus(this.currentLoc.lat().toString())
      this.dreiverServices.SetCurentBusLocation(
        {
          DriverId:this.driverId,
          Xcurrent:this.currentLoc.lat().toString(),
          Ycurrent:this.currentLoc.lng().toString()
        }
      )
    }
    this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)

  }

}
