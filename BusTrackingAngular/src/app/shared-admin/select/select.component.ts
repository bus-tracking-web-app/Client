import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  
  @Input() title:string="";
  @Input() data:any[]=[];
  @Output() selectedvalue =  new EventEmitter();
  @Input() all:boolean=true;
  @Input() select:string="";

  constructor() { }

  ngOnInit(): void {
  }

  
  DetectChanges(event:any)
  {
    this.selectedvalue.emit(event);
  }
  


}
