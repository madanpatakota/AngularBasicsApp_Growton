import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css'
})
export class CompTwoComponent {


  studentName = "Sreedevi";


  getStudentName() {
    return "Karthik";
  }


  studentName_2 = "Siva raina - 2"


  inputtype = "checkbox";



  printMessage() {
    //window.alert("Button clicked");
    console.log("Button clicked");
    //document.write("Button clicked");
  }


  printMessagebyTextBox() {
    console.log("Textbox keypressed");
  }


  mouseOverChangeName(){
    this.studentName = "Keerthi";
     return this.studentName;
  }

  
  mouseLeaveChangeName(){
    this.studentName = "Sreedevi";
     return this.studentName;
  }

  getValueFromTheTextBox(event:KeyboardEvent) {
   // console.log(event);    // Get the what kind of event. 

   // console.log(event.target); //target element.

    let inputtextelement = event.target as HTMLInputElement;

    console.log(inputtextelement.value);

  }



}
