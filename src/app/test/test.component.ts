import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .c-success{
      color: green;
    }
    .c-info{
      color: blue;
    }
    .c-danger{
      color: red;
    }
    .fontI{
      font-style: italic;
    }
    .toggle-success{
      background-color: green;
    }
    .toggle-error{
      background-color: red;
    }
  `]
})
export class TestComponent implements OnInit {
  // Property Binding
  public anID = "newIDnew";
  public isDisabled = false;

  // Class Binding
  public successClass = "c-success";
  public hasSuccess = true;
  public hasError = true;
  public isSet = true;

  // Event Binding
  public toggle = true;
  public status ="Success Mode";

  public multipleClasses = {
    'c-success' : !this.hasError, 
    'c-danger': this.hasError,
    'fontI': this.isSet
  }

  // 2 Way Binding
  public setValue = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleMode(){
    this.toggle = !this.toggle;
    //                If    THEN    mode     ELSE   mode
    this.status = this.toggle ? 'Success Mode' : 'Error Mode';
  }

  isEnabled(){
    this.isDisabled = false;
  }

}
