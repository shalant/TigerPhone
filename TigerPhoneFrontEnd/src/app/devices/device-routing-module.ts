import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./viewbyid/viewbyid.component";
import { DIndexComponent } from "./index/index.component";
// import { PCreateComponent } from "./create/create.component";
// import { EditComponent } from "./edit/edit.component";


const routes: Routes = [
    { path: 'Devices', redirectTo: 'Devices/index', pathMatch: 'full' },
    { path: 'Devices/index', component: DIndexComponent },
    // { path: 'Passengers/create', component: PCreateComponent },
    { path: 'Device/:id', component: ViewComponent },
    // { path: 'Passengers/edit/:id', component: EditComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceRoutingModule {}