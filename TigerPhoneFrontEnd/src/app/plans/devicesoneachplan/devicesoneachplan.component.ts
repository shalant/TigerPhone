import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../../devices/device';
import { PlansService } from '../plans.service';
 
    
@Component({
  selector: 'app-view',
  templateUrl: './devicesoneachplan.component.html',
  styleUrls: ['./devicesoneachplan.component.css']
})
export class DevicesOnEachPlanComponent implements OnInit {
     
  id!: number;
  device!: Device;
    
  /*------------------------------------------
  Created constructor
  --------------------------------------------*/
  constructor(
    public plansService: PlansService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.devicesOnEachPlanService.getDevice(this.id).subscribe((data: Device)=>{
      this.device = data;
    });
  }
    
}