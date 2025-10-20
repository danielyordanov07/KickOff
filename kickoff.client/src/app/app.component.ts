import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface HomeData {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public homeData: HomeData = { message: 'Nope' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getHomeData();
  }

  getHomeData() {
    this.http.get<HomeData>('/api/Home').subscribe({
      next: (result) => {
        if (result && typeof result.message === 'string') {
          this.homeData = result;
        } else {
          console.warn('Unexpected Home API response', result);
        }
      },
      error: (error) => {
        console.error('Home request failed', {
          status: error?.status,
          url: error?.url,
          message: error?.message,
          body: error?.error
        });
      }
    });
  }

  title = 'kickoff.client';
}
