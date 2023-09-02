import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PreDirectComponent } from './pre-direct/pre-direct.component';
import { PreDri2Component } from './pre-dri2/pre-dri2.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { OrdinalPipe } from './ordinal.pipe';
import { RouterModule, Routes } from '@angular/router';
import { DataCarrierService } from './data-carrier.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpIntegrationComponent } from './http-integration/http-integration.component';
import { RestApiCallService } from './rest-api-call.service';
import { HttpInetgration2Component } from './http-inetgration2/http-inetgration2.component';
import { ValidationsComponent } from './validations/validations.component'

const routingInfo:Routes = [
                          {path:'db', component:DataBindingComponent},
                          {path:'dir', component:PreDirectComponent},
                          {path:'pipe', component:PipesDemoComponent},
                          {path:'comp1', component:Comp1Component},
                          {path:'comp2', component:Comp2Component},
                          {path:'httpDemo', component:HttpIntegrationComponent},
                          {path:'httpDemoPost', component:HttpInetgration2Component},
                          {path:'validate', component:ValidationsComponent}
                              ];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PreDirectComponent,
    PreDri2Component,
    PipesDemoComponent,
    OrdinalPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    HttpIntegrationComponent,
    HttpInetgration2Component,
    ValidationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule, 
    RouterModule.forRoot(routingInfo),
    HttpClientModule
  ],
  providers: [DataCarrierService, RestApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
