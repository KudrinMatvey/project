import { HttpClient } from '@angular/common/http';

import { AdService } from '../services/ads.service';
import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad';


@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit{
  ngOnInit(){
    this.getAll();
  }
  ads$;
  ad = new Ad();
  
 constructor(private adService:AdService, public http:HttpClient) { 
   
 }

 getAll(){
   this.adService.getAds()
  .subscribe((response)=>{
    this.ads$ = response;
  });
 }

// cl()
// {
//   this.getAll();
// }
 reset() {
   this.ad = new Ad();
   this.getAll();
 }
 find(){
  this.adService.findAndReturnAds(this.ad)
  .subscribe((response)=>{
    this.ads$=response;
  });
}

}
