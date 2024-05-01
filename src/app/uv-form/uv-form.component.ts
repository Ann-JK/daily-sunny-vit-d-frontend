import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";
import {Observable} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './uv-form.component.html',
  styleUrls: ['./uv-form.component.css']
})

export class UvFormComponent {
  selectedValue: number | undefined;
  additionalInfo: string | undefined;
  additionalExample: string | undefined;
  formattedAddress = " ";
  longitude: any;
  latitude: any;
  isFormInvalid: boolean | undefined;
  showResult: boolean | undefined;
  uvForm = {
    skinType: 0,
    longitude: 0,
    latitude: 0
  }
  uvResponse = {
    UV: 0.0,
    recommendedExposure: 0,
    description: " "
  };

  constructor(private http: HttpClient) {}

  public AddressChange(event: any) {
    this.formattedAddress = event.formatted_address;
    this.longitude = event.geometry.location.lng();
    this.latitude = event.geometry.location.lat()
    console.log(event)
  }

  onSliderChange(value: string) {
    this.selectedValue = +value;
    this.setAdditionalInfo();
  }

  setAdditionalInfo() {
    switch (this.selectedValue) {
      case 1:
        this.additionalInfo = "Kõige heledam nahatüüp. Ülimalt tundlik nahk, päikese käes läheb punaseks, " +
          "päikesepõletus tuleb kergelt ning ei päevitu.";
        this.additionalExample = "Näide: Tedretähnid, loomulikult punased juuksed."
        break;
      case 2:
        this.additionalInfo = "Hele nahatüüp. Väga tundlik nahk, päikese käes punasus tuleb kergelt, päikesepõletuse " +
          "oht, päevitumine minimaalselt."
        this.additionalExample = "Blondid juuksed, heledat värvi silmad, kaukaaslased või põhja-aasialased."
        break;
      case 3:
        this.additionalInfo = "Jumekas nahatüüp. Võrdlemisi tundlik nahk. Vahel võib punaseks minna liigse " +
          "päikesega, päevitumine on aeglane.";
        this.additionalExample = "Pruunid juuksed. Tumedamad kaukaaslased, mõned aasialased."
        break;
      case 4:
        this.additionalInfo = "Helepruun nahatüüp. Vähetundlik nahk. Minimaalne punetus päikesega, " +
          "päevitumine tavaline.";
        this.additionalExample = "Vahemereäärsed ja Lähis-Ida kaukaaslased, lõuna-aasialased."
        break;
      case 5:
        this.additionalInfo = "Pruun nahatüüp. Vastupidav nahk. Üliharva tekib päikesepõletus, " +
          "päevitumine väga efektiivne.";
        this.additionalExample = "Mõned hispaanlased või ladina-ameeriklased, mõned aafriklased."
        break;
      case 6:
        this.additionalInfo = "Tumepruun nahatüüp. Väga vastupidav nahk. Ei teki päikesepõletust, tugev " +
          "pigmentatsioon.";
        this.additionalExample = "Tumedamad aafriklased, Austraalia põliselanikud."
        break;
      default:
        this.additionalInfo = "Infot pole";
        this.additionalExample = " "
    }
  }

  onSubmit() {
    if (this.selectedValue == null || this.longitude == null || this.latitude == null) {
      console.error("Form is not valid")
      this.isFormInvalid = true;

    } else {
      this.isFormInvalid = false;
      this.uvForm.skinType = this.selectedValue;
      this.uvForm.longitude = this.longitude;
      this.uvForm.latitude = this.latitude;
      console.log(this.uvForm)

      this.postUvForm(this.uvForm).subscribe((responseData) => {
        this.uvResponse = responseData
        console.log("UV: ", this.uvResponse.UV,
          "description: ", this.uvResponse.description,
          "recommended exposure: ", this.uvResponse.recommendedExposure)
        this.showResult = true;
      });
    }
  }

  postUvForm(form: any): Observable<any> {
    return this.http.post<any>(environment.SERVER_URL + '/d-vit/uv', form)
  }
}
