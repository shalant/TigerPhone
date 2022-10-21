import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DIndexComponent implements OnInit {
  devices: Device[] = [];

//ask angular to inject our musicService
  constructor(private devicesService: DevicesService) { }

  // initialization of the component
  ngOnInit(): void {
    this.retrieveDevices();
  }

  retrieveDevices(): void {
    this.devicesService.getDevices().subscribe(devices => this.devices = devices);
  }

  deleteDevice(id:number) {
    this.devicesService.deleteDevice(id).subscribe(res => {
      this.devices = this.devices.filter(item => item.id !==id);
      console.log("Device deleted successfully")
    })
  }

}
