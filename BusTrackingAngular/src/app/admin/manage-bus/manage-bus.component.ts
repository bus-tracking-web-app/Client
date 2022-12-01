import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/Services/home.service';
import { CreatebusComponent } from '../createbus/createbus.component';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manage-bus',
  templateUrl: './manage-bus.component.html',
  styleUrls: ['./manage-bus.component.css']
})
export class ManageBusComponent implements OnInit {

constructor(private spinner: NgxSpinnerService,public home:AdminService,private dialog:MatDialog) {
this.spinner.show();
setTimeout(() => {
/** spinner ends after 5 seconds */
this.spinner.hide();
}, 2500);
   }

  ngOnInit(): void {
    this.home.getAllbuses();
    this.home.getRound();
    this.home.getDriverAndTeacher();
  }
  busNum:number=0;
  updateform:FormGroup=new FormGroup({
    id:new FormControl(),
    busnumber:new FormControl(),
    busdriver:new FormControl(),
    round:new FormControl(),
    teacher:new FormControl()
  })
  openDialog(){
    const dialogRef=this.dialog.open(CreatebusComponent);
  }
  DetectChanges(event:any)
  {
     const id=Number(event.target.value);
     console.log(event.target.value);
    this.updateform.controls['busdriver'].setValue(id);
  }
  DetectChanges1(event:any)
  {
    const id=Number(event.target.value);
    console.log(event.target.value);
    this.updateform.controls['teacher'].setValue(id);
  }
  DetectChanges2(event:any)
  {
    const id=Number(event.target.value);
    console.log(event.target.value);
    this.updateform.controls['round'].setValue(id);
  }
  @ViewChild('callUpdate') callUpdate!:TemplateRef<any>;
  p_data:any={};
  openUpdateDialog(obj:any){
this.p_data={
  id:obj.id,
  busN:obj.busnumber,
  busD:obj.busdriver,
  round:obj.round,
  tech:obj.teacher
}
this.updateform.controls['id'].setValue(this.p_data.id);
this.updateform.controls['busdriver'].setValue(this.p_data.busD);
this.updateform.controls['round'].setValue(this.p_data.round);
this.updateform.controls['teacher'].setValue(this.p_data.tech);
this.home.getDriverId(this.p_data.busD);
this.home.getTeacherId(this.p_data.tech);
this.home.getRoundById(this.p_data.round);
this.dialog.open(this.callUpdate);

  }
  updateBus(){
    this.home.updateBus(this.updateform.value);
    console.log(this.updateform.value);

  }
  @ViewChild('DeleteDialog') DeleteDialog!:TemplateRef<any>;
  openDeleteDialog(id:number){
const dialogRef=this.dialog.open(this.DeleteDialog);
dialogRef.afterClosed().subscribe((result)=>{
  if(result!=undefined){
    if(result=='yes')
    this.home.deleteBus(id);
    else if(result=='no')
    console.log('Thank you')
  }
})
  }
  searchInput(ev:any){
this.busNum=ev.target.value;
if(this.busNum!=0){
this.home.searchByBusNumber(this.busNum);
}else
this.home.getAllbuses();
  }

}
