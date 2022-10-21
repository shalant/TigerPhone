import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device, DeviceDTO } from './device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  //azure db endpoint
  
  //azure deployment
  private deviceUrl = 'tigerbackend6.database.windows.net/device';
  //local dev
  // private deviceUrl = 'https://localhost:7081/api/device/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl, this.httpOptions);
  }
  
  getDevice(id: number): Observable<Device> {
    let url = `${this.deviceUrl}/${id}`;
    return this.http.get<Device>(url, this.httpOptions);
  }
  
  createDevice(Device: Device): Observable<Device> {
    return this.http.post<Device>(this.deviceUrl, Device, this.httpOptions);
  }
  
  updateDevice(Device: Device): Observable<Device> {
    let url = `${this.deviceUrl}/${Device.id}`;
    return this.http.put<Device>(url, Device, this.httpOptions);
  }
  
  deleteDevice(id: Number): Observable<Device> {
    return this.http.delete<Device>(`${this.deviceUrl}/${id}`, this.httpOptions);
  }
}
