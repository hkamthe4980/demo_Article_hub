import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url =environment.apiUrl;

  constructor(private httpClient :HttpClient) { }
  addNewArticle(data:any){
    return this.httpClient.post(this.url+
      "/article/addNewArticle",data,{
        headers:new HttpHeaders().set('Content-Type ',"application/json")
      }
    )
  }

  getAllArticle(){
    return this.httpClient.get(this.url + "/article/getAllArticle");
  }
  getPublishArticle(){
    return this.httpClient.get(this.url + "/article/getAllPublishArticle");
  }
  deleteArticleData(id:any){
    return this.httpClient.get(this.url + "/article/deleteArticleData/"+id);
  }
}
