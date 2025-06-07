import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Document Upload</h1>
    <input type="file" (change)="upload($event)" />
    <h2>Ask</h2>
    <input [(ngModel)]="question" placeholder="Your question" />
    <button (click)="ask()">Ask</button>
    <p>{{answer}}</p>
  `
})
export class AppComponent {
  question = '';
  answer = '';
  constructor(private http: HttpClient) {}

  upload(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.http.post('/api/documents', formData).subscribe();
  }

  ask() {
    this.http.post<any>('/api/qa', { query: this.question }).subscribe(res => {
      this.answer = res.answer;
    });
  }
}
