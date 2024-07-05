import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './delete-restaurant.component.html',
  styleUrl: './delete-restaurant.component.css'
})
export class DeleteRestaurantComponent {
     
  restId:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private router:Router){}

  ngOnInit():void{
    this.activatedRoute.params
    .subscribe((result)=>{
      console.log(result['id']);
      this.restId = result['id']
      
    })
    this.api.deleteRestaurant(this.restId)
    .subscribe(()=>{
      alert('Requested restaurant has been removed...')
      this.router.navigateByUrl('')
    })
  }
}
