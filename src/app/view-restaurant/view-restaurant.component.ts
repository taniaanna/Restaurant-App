import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-restaurant',
  standalone: true,
  imports: [NgFor,NgOptimizedImage,RouterLink],
  templateUrl: './view-restaurant.component.html',
  styleUrl: './view-restaurant.component.css'
})
export class ViewRestaurantComponent implements OnInit {
   restId:any;  
   restDetails:any;
  constructor(private activatedRoute:ActivatedRoute, private apiService:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(result=>{
         console.log(result['id']);
         this.restId = result['id']
      })
      this.apiService.viewRestaurant(this.restId)
      .subscribe((result:any)=>{
        console.log(result);
        this.restDetails=result
          
      })
    
  }

}
