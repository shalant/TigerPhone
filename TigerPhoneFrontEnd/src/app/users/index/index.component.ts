import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/plans/plan';
import { Device } from 'src/app/devices/device';
import { DevicesService } from 'src/app/devices/devices.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id!: number;
  users?: User[];
  plans?: Plan[];
  devices?: Device[];
  // planName: 
  // id!: number;

  // ask angular to inject musicService
  constructor(
    private userService: UsersService,
    private devicesService: DevicesService,
    private rout: ActivatedRoute,
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.retrieveUsers();
    this.retrievePlans();
    // this.retrieveDevices();
  }

  // retrievePlans(): void {
  //   this.rout.queryParams.subscribe(param => {
  //     this.plans = param['plans'];
  //   });
  // }


  retrieveUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }

  retrievePlans(): void {
    this.userService.getUserPlans().subscribe(plans => this.plans = plans);
    // console.log(this.plans[0]);
  }

  // retrieveDevices(): void {
  //   this.userService.getUserDevicess().subscribe(devices => this.devices = devices);
  //   console.log(this.plans[0]);
  // }

  deleteDevice(id:number) {
    this.devicesService.deleteDevice(id).subscribe(res => {
      // this.devices = this.devices.filter(item => item.id !==id);
      console.log("Device deleted successfully")
    })
  }

}
