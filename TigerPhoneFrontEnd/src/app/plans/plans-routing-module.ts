import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PIndexComponent } from './index/index.component';
import { ViewComponent } from "./viewbyid/viewbyid.component";
// import { PCreateComponent } from "./create/create.component";
// import { EditComponent } from "./edit/edit.component";


const routes: Routes = [
    { path: 'Plans', redirectTo: 'Plans/index', pathMatch: 'full' },
    { path: 'Plans/index', component: PIndexComponent },

    // { path: 'Plans/device/:id', component: DeviceOnEachPlan },
    
    // { path: 'Passengers/create', component: PCreateComponent },
    { path: 'Plan/:id?userId=:id', component: ViewComponent },
    { path: 'Plan/:id', component: ViewComponent },
    // { path: 'Passengers/edit/:id', component: EditComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlansRoutingModule {}