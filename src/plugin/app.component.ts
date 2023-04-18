import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UntypedFormControl } from '@angular/forms';
import { city } from './city';

interface AddressData {
  Description: string;
  MainDescription: string;
  DeliveryCity: string;
  Area: string;
  Region: string;
  SettlementType: string;
  Ref: string;
  DeliveryCityRegion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adr-search-ui-plugin';
  adresURl = environment.NovaposhtaURL + 'Address/searchSettlements/';
  nameControl!: UntypedFormControl;
  city: city | undefined;
  cityes: city[] = [];
  addresses: AddressData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.nameControl = new UntypedFormControl('Київ');
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.nameControl.statusChanges.subscribe((status) => console.log(status));
  }

  search(): void {
    const query = this.nameControl.value;
    if (!query) {
      return;
    }

    const postData = {
      apiKey: '19d9c289108bc6ca5b3f9133f9185b89',
      modelName: 'Address',
      calledMethod: 'searchSettlements',
      methodProperties: {
        CityName:  "київ",
        Limit: 50
      }
    };

    this.http.post<any>(this.adresURl, postData).subscribe((data) => {
      console.log(data);
      this.city = data.data[0].Addresses[0];
      this.cityes = data.data[0].Addresses;
      this.addresses = data.data.map((item: any) => item.Addresses).flat();
    });
  }
}