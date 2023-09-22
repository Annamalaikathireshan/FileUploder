import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseURL = 'http://localhost:8080'

  constructor(private http: HttpClient ) { }
}
