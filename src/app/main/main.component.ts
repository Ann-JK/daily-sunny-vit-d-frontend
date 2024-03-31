import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  selectedValue: number | undefined;
  additionalInfo: string | undefined;

  onSliderChange(value: string) {
    this.selectedValue = +value;
    this.setAdditionalInfo();
  }

  setAdditionalInfo() {
    switch (this.selectedValue) {
      case 1:
        this.additionalInfo = "Info for value 1";
        break;
      case 2:
        this.additionalInfo = "Info for value 2";
        break;
      case 3:
        this.additionalInfo = "Info for value 3";
        break;
      case 4:
        this.additionalInfo = "Info for value 4";
        break;
      case 5:
        this.additionalInfo = "Info for value 5";
        break;
      case 6:
        this.additionalInfo = "Info for value 6";
        break;
      default:
        this.additionalInfo = "No information available";
    }
  }

  onSubmit(uvForm: NgForm) {

  }
}
