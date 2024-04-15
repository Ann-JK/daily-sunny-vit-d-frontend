import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";


@Component({
  selector: 'app-main',
  templateUrl: './uv-form.component.html',
  styleUrls: ['./uv-form.component.css']
})

export class UvFormComponent {
  selectedValue: number | undefined;
  additionalInfo: string | undefined;
  formattedAddress = " ";
  longitude: any;
  latitude: any;
  isFormInvalid: boolean | undefined;
  uvForm = {
    skinType: 0,
    longitude: 0,
    latitude: 0
  }

  constructor(private http: HttpClient) {}

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

  onSubmit() {
    if (this.selectedValue == null || this.longitude == null || this.latitude == null) {
      console.error("Form is not valid")
      this.isFormInvalid = true;
    } else {
      console.log("Skin type: ", this.selectedValue, "Longitude: ", this.longitude, "Latitude: ", this.latitude)
      this.isFormInvalid = false;

      this.uvForm.skinType = this.selectedValue;
      this.uvForm.longitude = this.longitude;
      this.uvForm.latitude = this.latitude;

      console.log(this.uvForm)
      //TODO: Refactor server url later
      this.http.post<any>(environment.SERVER_URL + '/d-vit', this.uvForm)
        .subscribe((response) => {
          console.log("response: ", response)
        })
    }
  }
}
