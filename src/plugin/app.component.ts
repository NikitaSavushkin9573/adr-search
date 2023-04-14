import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UntypedFormControl } from '@angular/forms';
import { city } from './city';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   
})
export class AppComponent implements OnInit {
  title = 'adr-search-ui-plugin';
  adresURl=environment.NovaposhtaURL+'Address/searchSettlements/';
  nameControl!: UntypedFormControl;
  city: city | undefined;
  cityes:city[]=[];
  constructor( private http: HttpClient, ) { }
    /** POST  from adreses the server */

ngOnInit() {
  this.nameControl= new UntypedFormControl('Київ');
  this.nameControl.valueChanges.subscribe((value) => console.log(value));
  this.nameControl.statusChanges.subscribe((status) => console.log(status));
 // this.http.get('https://api.novaposhta.ua/v2.0/json/Address/searchSettlements/').subscribe((data:any) => this.citi=new Citi(data.Area, data.Present, data.Warehouses,data.MainDescription,data.Region,data.SettlementTypeCode,data.Ref,data.DeliveryCity,data.ParentRegionTypes,data.ParentRegionCode));
 this.getsearch()
}



getsearch(): any {
  return this.http.post<any>(this.adresURl,{
    "apiKey": "319e2177ec5d3aa8638e23b1e24fa487",
     "modelName": "Address",
        "calledMethod": "searchSettlements",
        "methodProperties": {
            "CityName": "київ",
            "Limit": 5

          }
          
      
        
    }).subscribe(x=>{console.log(x);
    this.city=x.data[0].Addresses[0];
    this.cityes=x.data[0].Addresses;
    })
}
}


