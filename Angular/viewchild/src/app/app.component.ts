import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';
  @ViewChild('dobInput')
  dateOfBirth!: ElementRef;
  @ViewChild('ageInput')
  age!: ElementRef;
  @ViewChild(DemoComponent,{static:true}) demoComp!:DemoComponent;
  calculateAge(){
    let birthofyear=new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentyear=new Date().getFullYear();
    let age=currentyear-birthofyear;
    this.age.nativeElement.value=age
    console.log(this.dateOfBirth)
    console.log(this.age)
  }

  //since the date of birth property is going to store a reference 
  //to an html element the datatype  of this proprty is going 
  //to be ElementRef
  //view child decorator :It assigns a property with a reference to a html
  //element or a component or directive
  //view child

  //since the date of birth property is going to store a reference 
  //to an html element the datatype  of this proprty is going 
  //to be ElementRef
  //view child decorator :It assigns a property with a reference to a html
  //element or a component or directive

  //using view child we can access an html element or
  // a component or a directive
  //from a view tempelate to a component class
}
