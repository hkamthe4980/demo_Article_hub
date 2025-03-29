import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;


  constructor(private  httpClient :HttpClient) { }


  addNewCategory(data:any){
    return this.httpClient.post(this.url+
      "/category/addNewCategory",data,{
        headers:new HttpHeaders().set('Content-Type',"application/json")

      })

  }
  UpdateCategory(data:any){
    return this.httpClient.post(this.url+
      "/category/UpdateCategory",data,{
        headers:new HttpHeaders().set('Content-Type',"application/json")
      })

  }
  getAllCategory(){
    return this.httpClient.get(this.url+"/category/getAllCategory");
    
  }
}
