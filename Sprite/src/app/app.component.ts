import { Component } from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  private url:string = 'http://fe.it-academy.by/Examples/cards2.png'
  private width:number = 143.5
  private height:number= 193.714
  private offsetX:number=0
  private offsetY:number=0

  getUrl():string{
    return this.url
  }

  getWidth():number{
    return this.width
  }

  getHeight():number{
    return this.height
  }

  getOffsetX():number{
    return this.offsetX
  }

  getOffsetY():number{
    return this.offsetY
  }

  changeImage():void {
    if (this.offsetX === -430.5) {
      this.offsetX = 0
      this.offsetY -= this.getHeight()
    }
    else {
      this.offsetX -= this.getWidth()
    }
  }
}
