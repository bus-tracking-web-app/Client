import { Component, OnInit } from '@angular/core';
import { ReportService } from '../Services/report.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public home:ReportService) { }
  dtoptoins:any={};
  date:any =Date();
  

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
  }

}
