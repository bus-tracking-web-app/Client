import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.dtoptoins={
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf',
      ]
     
    };
    
    
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
              label: 'Charts',
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


}, 1500);
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
