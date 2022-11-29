import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-createbus',
  templateUrl: './createbus.component.html',
  styleUrls: ['./createbus.component.css']
})
export class CreatebusComponent implements OnInit {

  constructor(public home:AdminService) { }
  createform:FormGroup=new FormGroup({
    busnumber:new FormControl('',Validators.required),
    busdriver:new FormControl('',Validators.required),
    round:new FormControl('',Validators.required),
    teacher:new FormControl('',Validators.required)

  })
  DetectChanges(event:any)
  {
    const id=Number(event.target.value);
    this.createform.controls['busdriver'].setValue(id);
    console.log(event.target.value);
  }
  DetectChanges1(event:any)
  {
    const id=Number(event.target.value);
    this.createform.controls['teacher'].setValue(id);
    console.log(event.target.value);
  }
  //CREATE BUS
// driver:any[]=[];
// teacher:any[]=[];
// getDriverAndTeacher(){
//   this.home.users.forEach((user:any)=>{
//     if(user.roleid==21)
//     {
//       this.teacher.push(user);
      
//     }
//     else if(user.roleid==22)
//     this.driver.push(user);
//   }
//   )
// }
  
  saveBus(){
this.home.createBus(this.createform.value);
  }

  ngOnInit(): void {
// this.home.getDriverAndTeacher();

  }

}
