import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import{Chart,registerables}from'node_modules/chart.js';
import { ChartsService } from '../Services/charts.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import * as XLSX from 'xlsx';



Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allData:any[]=[];
  busNumber:any[]=[];
  studentCount:any[]=[];
  dtoptoins:any={};
  constructor(private service:ChartsService) { }

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.stdCount();
    this.service.TeacherCounter();
    this.service.ParentCounter();
    this.service.DriverCounter();
    this.dtoptoins={
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf',
      ]
     
    };
    
    this.service.getTeacherCount();
    this.service.getDriverCount();
    this.service.getStudentCount();
    this.service.getChartInfo().subscribe((resp:any)=>{
      this.allData=resp;
      this.allData.forEach((us: any) => {
        this.busNumber.push(us.busnumber);
        this.studentCount.push(us.studentCount);
    })
    });
    this.getCharts(this.busNumber,this.studentCount);
    console.log(this.busNumber);
    
  }
  getCharts(bus:any,stdCount:any ){ 
    setTimeout(() => {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: bus,
          datasets: [{
              label: 'Number Of Student in Each Bus',
              data: stdCount,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                 
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
  const pieChart = new Chart("pieChart", {
    type: 'pie',
    data: {
        labels: ['TeacherCount','DriverCount','StudentCount'],
        datasets: [{
            label: '',
            data: [this.service.teacherCount,this.service.driverCount,this.service.studentCount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(34, 100, 120, 0.2)',
                'rgba(100, 50, 130, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(34, 100, 120, 1)',
                'rgba(100, 50, 130, 1)',   
               
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


}, 2500);
  }


  title = 'html-to-pdf-angular-application';
 convetToPDF()
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
}

fileName= 'ExcelSheet.xlsx';
exportToExcel(){
  /* pass here the table id */
  let element = document.getElementById('contentToConvert');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */  
  XLSX.writeFile(wb, this.fileName);

}




}
