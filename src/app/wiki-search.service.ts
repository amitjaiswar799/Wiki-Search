import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {

  constructor(private http :HttpClient) { }

  search(data:string){
    return this.http.get('https://en.wikipedia.org/w/api.php?',{
      params :{
        action:'query',
        list:'search',
        srsearch:data,
        utf8:'1',
        format:'json',
        origin:'*'
      }
    });
  }

}
