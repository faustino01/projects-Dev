import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Output() changeMarkdown:EventEmitter<string> = new EventEmitter<string>();
  @Input() placeHolderTextarea:string='Texto'


  @Input() contenidoMarkdown = '';
  inputTextArea(event:Event){
   this.contenidoMarkdown = (event.target as HTMLInputElement).value;
   this.changeMarkdown.emit(this.contenidoMarkdown);
  }

}
