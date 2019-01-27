import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'Northwind';

  //nesne olarak göndermemiz yeterli
  public options={
    position:["bottom","right"],//aşağıda sağga gözüksün
    timeOut:3000,//3 saniye boyunca gözüksün
    lastOnBottom:true,//son notification en altta görülsün.
  }
}
