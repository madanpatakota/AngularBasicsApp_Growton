import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrl: './comp-three.component.css'
})
export class CompThreeComponent {

    redcolor = "red";

    yellowcolor = 'yellow';

    isAdmin     = true;


    studentNames = ["Siva","karthik","Keerthi","Sreedevei","Shashank"];


    //ElementRef


    btnClick(parael : HTMLParagraphElement , textbox:HTMLInputElement){

      console.log(parael);
      console.log(parael.innerText);

      console.log(textbox);
      console.log(textbox.value);
      
    }




    studentID = 4;


    elementName = "input-password"




    
}
