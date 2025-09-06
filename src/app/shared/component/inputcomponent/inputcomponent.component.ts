import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.scss'],
  standalone: false,
})
export class InputcomponentComponent  implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string='';
  @Input() type: string='';
  @Input() control: FormControl= new FormControl();
  constructor() { }

  ngOnInit() {}
public doWrite(event: any){
  this.control.setValue(event.target.value);
  
}
}
