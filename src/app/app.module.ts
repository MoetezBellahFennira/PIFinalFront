import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashbordCoachComponent } from './coach/dashbord-coach/dashbord-coach.component';
import { MlCoachComponent } from './coach/ml-coach/ml-coach.component';
import { DashbordDirecteurComponent } from './directeur/dashbord-directeur/dashbord-directeur.component';
import { MlDirecteurComponent } from './directeur/ml-directeur/ml-directeur.component';
import { DashbordMedicalComponent } from './medical/dashbord-medical/dashbord-medical.component';
import { MlMedicalComponent } from './medical/ml-medical/ml-medical.component';
import { DashbordPrepPhysiqueComponent } from './prepphysique/dashbord-prep-physique/dashbord-prep-physique.component';
import { MlPrepPhysiqueComponent } from './prepphysique/ml-prep-physique/ml-prep-physique.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashbordCoachComponent,
    MlCoachComponent,
    DashbordDirecteurComponent,
    MlDirecteurComponent,
    DashbordMedicalComponent,
    MlMedicalComponent,
    DashbordPrepPhysiqueComponent,
    MlPrepPhysiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
