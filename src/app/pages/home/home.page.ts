import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
   @Input() article: any;
articles: any[] = [];

 constructor(private http:HttpClient) { }
 
    ngOnInit() {
      this.loadNews();
     this.http.get<any>('https://newsapi.org/v2/everything?q=apple&from=2025-09-04&to=2025-09-04&sortBy=popularity&apiKey=f5fd836811d8443f976f34c900bdd7de')
      .subscribe(res=>{console.log(res);
        this.articles= res.articles;
        


      });
     
   }

    loadNews() {
    this.http
      .get<any>(
        'https://newsapi.org/v2/everything?q=apple&from=2025-09-04&to=2025-09-04&sortBy=popularity&apiKey=TU_API_KEY'
      )
      .subscribe((res) => {
        this.articles = res.articles;
      });
  }
  handleRefresh(event: any) {
    this.loadNews();

    
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
