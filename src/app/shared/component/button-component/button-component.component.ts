import { Component, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type buttontype = 'button' | 'submit';
@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
  standalone: false,
})
export class ButtonComponentComponent  implements OnInit {
 value = input<string>('');
 type = input<buttontype>('button');
 disabled = input<boolean>(false);
    constructor() {}

  
  ngOnInit() {}
  

}
