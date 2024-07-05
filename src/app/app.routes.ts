import { Routes } from '@angular/router';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';

export const routes: Routes = [
    //defining path for each component
    //RestaurantsListComponent - localhost:4200
    {
        path:'',component:RestaurantsListComponent
    },
    //ViewRestaurantComponent - localhost:4200/view-restaurant
    {
        path:'view-restaurant/:id',component:ViewRestaurantComponent
    },
    //AddRestaurantComponent - localhost:4200/add-restaurant
    {
        path:'add-restaurant',component:AddRestaurantComponent
    },
    //UpdateRestaurantComponent - localhost:4200/update-restaurant
    {
        path:'update-restaurant/:id',component:UpdateRestaurantComponent
    },
    //DeleteRestaurantComponent - localhost:4200/delete-restaurant
    {
        path:'delete-restaurant/:id',component:DeleteRestaurantComponent
    }
];
