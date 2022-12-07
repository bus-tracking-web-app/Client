import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http:HttpClient) { }
 

  getChartInfo(){
return this.http.get('https://localhost:44364/API/bus/busAndStudentCount')
 

  }
}
