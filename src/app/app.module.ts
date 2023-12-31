import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { ChildComponent } from './child/child.component';
import { NewchildComponent } from './newchild/newchild.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CourseComponent } from './course/course.component';
import { CountryComponent } from './country/country.component';
import { CustdirDirective } from './custdir.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SampleforComponent } from './samplefor/samplefor.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Form1Component } from './form1/form1.component';




@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    UsernameComponent,
    ChildComponent,
    NewchildComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AttributedirComponent,
    CheckboxComponent,
    CourseComponent,
    CountryComponent,
    CustdirDirective,
    SimpleformComponent,
    SampleforComponent,
    ReactiveformComponent,
    AssignmentComponent,
    Demo1Component,
    Demo2Component,
    Form1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
