import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DemoService extends CrudBaseService {
  private _reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' + JSON.parse(localStorage.getItem('accessToken') as string),
  });
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl as string,
        entity: 'rest/project-product-document',
      },
      http
    );
  }

  taiTep(file: File, fileName: string, productId?: string) {
    const url = `${this.getBaseUrl()}/upload/${productId}`;
    const form = new FormData();
    form.set('files', file);
    form.append('fileName', fileName);
    return this.http.post<any>(url, form);
  }
}
