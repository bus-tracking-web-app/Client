import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  id:any;

  constructor(private route:ActivatedRoute, public parentServices:ParentService) { 
    this.id=Number(this.route.snapshot.paramMap.get('id'));

  }


  ngOnInit(): void {
    
    this.parentServices.GetattendanceByStudentId(this.id)
    console.log(this.parentServices.attendanceChaild);
    

  }

}
