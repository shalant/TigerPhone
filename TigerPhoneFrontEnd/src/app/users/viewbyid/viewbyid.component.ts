import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { PlansService } from 'src/app/plans/plans.service';
import { User } from '../user';
import { Plan } from 'src/app/plans/plan';
import { EmailValidator } from '@angular/forms';
import { Device } from 'src/app/devices/device';

@Component({
  selector: 'app-viewbyid',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewComponent implements OnInit {

  id! : number;
  user!: User;
  plan!: Plan;
  userId!: number;
  deviceProfiles!: Device;
  type!: string;
  // userName!: 

  constructor(
    public userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.userId = this.route.snapshot.params['userId'];
    // this.userName = this.route.snapshot.params['userId'];

    this.userService.getUser(this.id, this.id).subscribe((data: User)=>{
      this.user = data;
    });

    // this.userService.getPlans(this.userId).subscribe((data: User)=>{
    //   this.user = data;
    // });
  }

}