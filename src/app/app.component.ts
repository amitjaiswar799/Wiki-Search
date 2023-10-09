import { Component } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WikiSearch1';

  constructor(private ws : WikiSearchService){}

  searchTerm:any;
  pages:any[]=[];

  swyw(event:string){
    console.log('Getting data consume by api'+ event)
    this.ws.search(event).subscribe((response:any)=>{
      console.log(response.query.search)
      this.pages= response.query.search;
    });
  }
}
