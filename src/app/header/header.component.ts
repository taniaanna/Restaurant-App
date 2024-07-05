import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  restNote = "Search Restaurant Here"
  constructor(private api:ApiService){}
  ngOnInit():void{

  }
  search(event:any){
    console.log(event.target.value);
    let searchKey=event.target.value
    this.api.search.next(searchKey)
    

  }
}
