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
  formattedAddress = " ";
  longitude: any;
  latitude: any;
  isFormInvalid: boolean | undefined;

  public AddressChange(event: any) {
    this.formattedAddress = event.formatted_address;
    this.longitude = event.geometry.location.lng();
    this.latitude = event.geometry.location.lat()
  }

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
    if (this.selectedValue == null || this.longitude == null || this.latitude == null) {
      //TODO: switch case vastavatele erroritele
      console.error("Form is not valid")
      this.isFormInvalid = true;
    } else {
      console.log("Longitude: ", this.longitude, "Latitude: ", this.latitude)
      console.log("Skin type: ", this.selectedValue)
      console.log("Form is valid")
      this.isFormInvalid = false;
    }
  }
}
