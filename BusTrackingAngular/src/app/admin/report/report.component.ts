import { Component, OnInit } from '@angular/core';
import { ReportService } from '../Services/report.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public home:ReportService) { }
  dtoptoins:any={};
  date:any =Date();
  
  searchform:FormGroup=new FormGroup({
    Sname:new FormControl(),
    Sdate:new FormControl(),
  })
  ngOnInit(): void {
    

    this.dtoptoins={
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf',
      ]
     
    };
    this.home.getAllAttendance();
  }

  title = 'Bus Tracking Report';
  public convetToPDF()
  {
  var data:any = document.getElementById('contentToConvert');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 400;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save('Report.pdf'); // Generated PDF
  });
  setTimeout(() => {
    window.location.reload();
  }, 4000);
 
  }

  search(){
    debugger;
    this.home.absent=[];
    this.home.present=[];
    if(this.searchform.controls['Sdate'].value!=null && this.searchform.controls['Sname'].value!=null)
    {
      this.home.searchAttendance(this.searchform.value);
    
    }
    else if(this.searchform.controls['Sdate'].value==null && this.searchform.controls['Sname'].value!=null)
    {
      this.home.searchAttendance(this.searchform.value);
     
    }else if(this.searchform.controls['Sdate'].value!=null && this.searchform.controls['Sname'].value==null)
    {
      this.home.searchAttendance(this.searchform.value);
      
    }
    else
    this.home.getAllAttendance();
   
    this.getCharts();
  
    
    
  }
  fileName= 'ExcelSheet.xlsx';
ExportToExcel(){
  /* pass here the table id */
  let element = document.getElementById('contentToConvert');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */  
  XLSX.writeFile(wb, this.fileName);

}

getCharts(){
 
  setTimeout(() => {
   
let pieChart = new Chart("myChart", {
  type: 'pie',
  data: {
      labels: ['Present','Absent'],
      datasets: [{
          label: '',
          data: [this.home.present.length,this.home.absent.length],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(34, 100, 120, 0.2)',
             
              
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(34, 100, 120, 1)',
               
             
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
