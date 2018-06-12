import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { NgDatepickerModule } from 'ng2-datepicker';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


import { MultiOrderComponent } from './components/multi-order/multi-order.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {
    path:"",component:LoginComponent,
  },

  {
    path:"dashboard", component:DashboardComponent, 
      children: [
        {
          path: '',
       redirectTo:'/dashboard/singleorder', pathMatch: 'full'  
    },
      {
        path: 'singleorder',
        component: SingleOrderComponent,
  },
  {
    path: 'multiorder',
    component:MultiOrderComponent,
  
},
 {
  path: 'finalorder',
  component: FinalOrderComponent,
},
{
  path: 'register',
  component: RegisterComponent,
}
]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
 
    MultiOrderComponent,
    FinalOrderComponent,
    SingleOrderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    ChartModule,
    NgDatepickerModule,
 
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
