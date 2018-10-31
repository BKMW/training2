import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth=false;
  // lastUpdate=new Date();
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils=[
    {
      name:"TV",
      status:"eteint"
    },
    {
      name:"PC",
      status:"allumé"
    },
    {
      name:"Game",
      status:"eteint"
    },
  ];
 

  constructor() {
    
   var x=setInterval(()=>{this.isAuth=true;},4000);
  //  console.log("x",x);

  }
  onAllumer(){
    // var i=0;
    // setInterval(()=>{i++;console.log("tout allumer",i);},1000);
    console.log("tout allumer");
    this.isAuth=false;
  }
}
