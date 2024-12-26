import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataPartieComponent } from './components/add-data-partie/add-data-partie.component';
import { AddPlaintComponent } from './components/add-plaint/add-plaint.component';
import { AddPvComponent } from './components/add-pv/add-pv.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DataPartiesComponent } from './components/data-parties/data-parties.component';
import { PlaintAndDataPartiesComponent } from './components/plaint-and-data-parties/plaint-and-data-parties.component';
import { PvAndDataPartiesComponent } from './components/pv-and-data-parties/pv-and-data-parties.component';
import { PvsComponent } from './components/pvs/pvs.component';
import { ShowPvAndDataPartiesComponent } from './components/show-pv-and-data-parties/show-pv-and-data-parties.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: AppContainerComponent, canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'addpv',
        component: AddPvComponent
      },
      {
        path: 'allpvs',
        component: PvsComponent
      },
      {
        path: 'addplaint',
        component: AddPlaintComponent
      },
      {
        path: 'pvDetails/:id',
        component: ShowPvAndDataPartiesComponent
      },
      {
        path: "adddataparties",
        component: DataPartiesComponent
      },
      {
        path: "pvAndDataParties",
        component: PvAndDataPartiesComponent
      },
      {
        path: "plaintAndDataParties",
        component: PlaintAndDataPartiesComponent
      },
      {
        path: "allpvs",
        component: PvsComponent
      }
    ]
  }, {
    path: "",
    component: AppContainerComponent, canActivate: [AuthGuardGuard]
  }
  ,
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
