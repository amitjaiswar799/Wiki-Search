import { Component, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-page-search-bar',
  templateUrl: './page-search-bar.component.html',
  styleUrls: ['./page-search-bar.component.css']
})
export class PageSearchBarComponent {

  enterSearchValue:string = '';

  @Output() 
  SearchTextChange:EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChange(sterm: string){
    this.enterSearchValue = sterm;
  }

  onSubmit(event:any){
    event.preventDefault();
    this.SearchTextChange.emit(this.enterSearchValue);
 }

}
