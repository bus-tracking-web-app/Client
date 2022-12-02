import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateRouteComponent } from '../create-route/create-route.component';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-routes',
  templateUrl: './manage-routes.component.html',
  styleUrls: ['./manage-routes.component.css']
})
export class ManageRoutesComponent implements OnInit {

  constructor(public admin:AdminService,private dialog:MatDialog,private toastr:ToastrService) { }
  @ViewChild('callUpdateDialog') callUpdateDialog!:TemplateRef<any> 
  @ViewChild('callDeleteDialog') callDeleteDialog!:TemplateRef<any> 
  searchid:number=0;

  updateRouteForm:FormGroup=new FormGroup({
    id:new FormControl(),
    xcurrent:new FormControl('',Validators.required),
    ycurrent:new FormControl('',Validators.required),
    xstart:new FormControl('',Validators.required),
    ystart:new FormControl('',Validators.required),
    xend:new FormControl('',Validators.required),
    yend:new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.admin.getAllRoutes();
    this.admin.getAllbuses();
  }
  createDialog()
  {
    this.dialog.open(CreateRouteComponent)
  }
  DetectChanges(event:any)
  {
    const id=Number(event.target.value);
    this.updateRouteForm.controls['busid'].setValue(id);
  }


  previousData:any={};
  updateDialog(obj:any)
  {
    debugger
    this.previousData={
    id:obj.id,
    xcurrent:obj.xcurrent,
    ycurrent:obj.ycurrent,
    xstart:obj.xstart,
    ystart:obj.ystart,
    xend:obj.xend,
    yend:obj.yend,
    busid:obj.busid
    }
    this.updateRouteForm.controls['id'].setValue(this.previousData.id);
    this.updateRouteForm.controls['busid'].setValue(this.previousData.busid);
    this.admin.getBusById(this.previousData.busid)
    this.dialog.open(this.callUpdateDialog);
  }

  updateRoute()
  {
this.admin.updateRoute(this.updateRouteForm.value)
  }
  
  deleteDialog(id :number)
  {
    const dialogref=this.dialog.open(this.callDeleteDialog);
    dialogref.afterClosed().subscribe(result=>
      {
        if(result != undefined)
        {
          if(result=='Yes')
          {
            this.admin.deleteRoute(id);
          }
          else if(result=='No')
          {
            this.toastr.info('Cancelled')
            
          }
        }
      })


  }
  searchRoute(ev:any)
  {
    this.searchid=ev.target.value;
    this.admin.getRouteById(this.searchid);



  }


}
