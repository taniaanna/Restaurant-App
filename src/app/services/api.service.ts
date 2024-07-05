import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //variables
  search = new BehaviorSubject("")

  //property

  constructor(private api:HttpClient) { }
  //userdefined function
  //to get all restaurant list api call - http://localhost:3000/restaurants
  getRestaurantsList(){
    //use http request get - make api call to http://localhost:3000/restaurants
    //get() - HttpClient class - HttpClientModule(provideHttpClient) library
    return this.api.get('http://localhost:3000/restaurants')
  }
  //2. get a single restaurant detail from api
  viewRestaurant(restId:Number){
    return this.api.get('http://localhost:3000/restaurants/' +restId)
  }
  //3. to add new restaurant detail
  addRestaurant(newRestaurant:any){
   return this.api.post('http://localhost:3000/restaurants/',newRestaurant)

  }
  //4.to update a particular restaurant
  updateRestaurant(restId:any, updatedRestBody:any){
    return this.api.put('http://localhost:3000/restaurants/' +restId,updatedRestBody)
  }
  //5.to delete particular restaurant
  deleteRestaurant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/' +restId)
  }
}
