import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan, PlanDTO } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
 
  //azure deployment
  private planUrl = 'tigerbackend6.database.windows.net/plan';
  //local dev
  // private planUrl = 'https://localhost:7081/api/plan/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl, this.httpOptions);
  }
  
  getPlan(id: number): Observable<Plan> {
    let url = `${this.planUrl}/${id}`;
    return this.http.get<Plan>(url, this.httpOptions);
  }
  
  createPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(this.planUrl, plan, this.httpOptions);
  }
  
  updatePlan(plan: Plan): Observable<Plan> {
    let url = `${this.planUrl}/${plan.id}`;
    return this.http.put<Plan>(url, plan, this.httpOptions);
  }
  
  deletePlan(id: Number): Observable<Plan> {
    return this.http.delete<Plan>(`${this.planUrl}/${id}`, this.httpOptions);
  }
}
