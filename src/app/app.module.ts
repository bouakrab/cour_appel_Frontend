import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvsComponent } from './components/pvs/pvs.component';
import { AddPvComponent } from './components/add-pv/add-pv.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AddDataPartieComponent } from './components/add-data-partie/add-data-partie.component';
import { DataPartiesComponent } from './components/data-parties/data-parties.component';
import { PvAndDataPartiesComponent } from './components/pv-and-data-parties/pv-and-data-parties.component';
import { UpdateDataPartieComponent } from './components/update-data-partie/update-data-partie.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddPlaintComponent } from './components/add-plaint/add-plaint.component';
import { PlaintAndDataPartiesComponent } from './components/plaint-and-data-parties/plaint-and-data-parties.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShowPvAndDataPartiesComponent } from './components/show-pv-and-data-parties/show-pv-and-data-parties.component';
import { ScrollableComponent } from './scrollable/scrollable.component';


@NgModule({
  declarations: [
    AppComponent,
    PvsComponent,
    AddPvComponent,
    SideNavBarComponent,
    NavbarComponent,
    FooterComponent,
    AddDataPartieComponent,
    DataPartiesComponent,
    PvAndDataPartiesComponent,
    UpdateDataPartieComponent,
    LoginComponent,
    AddPlaintComponent,
    PlaintAndDataPartiesComponent,
    AppContainerComponent,
    ShowPvAndDataPartiesComponent,
    ScrollableComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, NgxPaginationModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
