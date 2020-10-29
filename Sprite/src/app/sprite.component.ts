import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})

export class SpriteComponent{
  @Input("url")
  public url:string

  @Input("width")
  public width:number

  @Input("height")
  public height:number

  @Input("offset-x")
  public offsetX:number

  @Input("offset-y")
  public offsetY:number

  @Output("imageOutput")
  private imageOutputEE = new EventEmitter<void>();

  changeImage():void{
    this.imageOutputEE.emit()
  }
}
