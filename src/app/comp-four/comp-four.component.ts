import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrl: './comp-four.component.css'
})
export class CompFourComponent {

  // var                       name  : string

  @ViewChild('paragraph')  _paragraph:ElementRef;
  @ViewChild('userName')  _userName:ElementRef;


  @ContentChild('contentParagraph')  _contentParagraph:ElementRef;
  @ContentChild('options') _options:ElementRef;


  //Elementref you can access any element from the DOM

  PrintMessage()
  {
     console.log(this._paragraph);   //ElementRef { nativeElement : p}
     console.log(this._paragraph.nativeElement); //<p> Angular and Typescript</p>
     console.log(this._paragraph.nativeElement.innerText); //Angular and Typescript


     console.log("*********************************");

     console.log(this._userName);   //ElementRef { nativeElement : input}
     console.log(this._userName.nativeElement); //<p> Angular and Typescript</p>
     console.log(this._userName.nativeElement.value); //__________


     console.log("*********************************");

     console.log(this._contentParagraph);   //ElementRef { nativeElement : p}
     console.log(this._contentParagraph.nativeElement); //<p> Hello world</p>
     console.log(this._contentParagraph.nativeElement.innerText); //Hello world


     console.log("*********************************");

     console.log(this._options);   //ElementRef { nativeElement : select}
     console.log(this._options.nativeElement); 
     console.log(this._options.nativeElement.innerText);
     console.log(this._options.nativeElement.value);

  }
 

}
