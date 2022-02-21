import { Component, OnInit } from '@angular/core';

@Component({  // Decorators
  selector: 'app-sample', 
  templateUrl: './sample.component.html',
  styles: [`
    .red{
      color: red;
    }
  `]
})
export class SampleComponent implements OnInit {

  public displaySection = false;
  public color = "black"; // true
  public grade = 150;


  // Foreach => arrays
  // For => objects
  public status = ["Average", "Excellent", "Superior"];

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value){
    console.log(value)
  }

}
