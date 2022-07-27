import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardDto } from "../../core/models/dashboard-dto.model";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  API_URL = `${environment.apiUrl}auth/`;
  constructor(private http: HttpClient) { }

  getNotificationsDetails(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}detail/notification/list`);
  }
  getNotificationsCount(): Observable<DashboardDto> {
    //     return this.http.get<Category[]>(`${this.API_URL}detail/category/list?status=`);

    return this.http.get<DashboardDto>(`${this.API_URL}detail/dashboard`);
  }
}
