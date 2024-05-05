import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashbordCoachComponent } from './coach/dashbord-coach/dashbord-coach.component';
import { MlCoachComponent } from './coach/ml-coach/ml-coach.component';
import { DashbordMedicalComponent } from './medical/dashbord-medical/dashbord-medical.component';
import { MlMedicalComponent } from './medical/ml-medical/ml-medical.component';
import { DashbordPrepPhysiqueComponent } from './prepphysique/dashbord-prep-physique/dashbord-prep-physique.component';
import { MlPrepPhysiqueComponent } from './prepphysique/ml-prep-physique/ml-prep-physique.component';
import { DashbordDirecteurComponent } from './directeur/dashbord-directeur/dashbord-directeur.component';
import { MlDirecteurComponent } from './directeur/ml-directeur/ml-directeur.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {
    path: 'homeCoach',component:HeaderComponent,
    children: [
      {
        path:'' ,
        component:DashbordCoachComponent,
      },
      {
        path:'MlCoach' ,
        component:MlCoachComponent,

      }
    ]
    },
    {
      path: 'homeDirecteur',component:HeaderComponent,
      children: [
        {
          path:'' ,
          component:DashbordDirecteurComponent,
        },
        {
          path:'MlDirecteur' ,
          component:MlDirecteurComponent,
  
        }
      ]
      },
      {
        path: 'homeMedical',component:HeaderComponent,
        children: [
          {
            path:'' ,
            component:DashbordMedicalComponent,
          },
          {
            path:'MlMedical' ,
            component:MlMedicalComponent,
    
          }
        ]
        },
        {
          path: 'homeprepphysique',component:HeaderComponent,
          children: [
            {
              path:'' ,
              component:DashbordPrepPhysiqueComponent,
            },
            {
              path:'MlPrephysique' ,
              component:MlPrepPhysiqueComponent,
      
            }
          ]
          },
          {
            path: '**',
            redirectTo: 'login',
          },

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
