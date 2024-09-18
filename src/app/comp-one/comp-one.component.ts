import { Component } from "@angular/core";

@Component({
    selector : 'app-comp-one',                //name
    templateUrl : './comp-one.component.html',
    styleUrls   : ['./comp-one.component.css']
})

//buisnesslogic
export class CompOne{
      name = "Angular";
}