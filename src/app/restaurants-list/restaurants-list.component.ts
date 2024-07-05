import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FilterPipe } from "../pipes/filter.pipe";

@Component({
    selector: 'app-restaurants-list',
    standalone: true,
    templateUrl: './restaurants-list.component.html',
    styleUrl: './restaurants-list.component.css',
    imports: [NgFor, DatePipe, FilterPipe]
})
export class RestaurantsListComponent implements OnInit {
  //property
  restName="List of Restaurants"
  restaurantList:any = []

  lDate:any
  //to hold searchterm
  searchTerm=""

   //dependency injection
   constructor(private apiService:ApiService){ 
    this.lDate = new Date()
   }
   
   ngOnInit():void{

    //apiservice call - to get all restaurant list - Asynchronous call
   this.apiService.getRestaurantsList()
   .subscribe((result)=>{
    this.restaurantList=result
    console.log(this.restaurantList); 
   })
   //to get searchTerm from api service
   this.apiService.search.subscribe((data)=>{
    console.log(data);
    this.searchTerm = data
    
   })
   }
}
