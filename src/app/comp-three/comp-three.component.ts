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



    
}
