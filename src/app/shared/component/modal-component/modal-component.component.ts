import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
  standalone: false,
})
export class ModalComponentComponent  implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() { }

  ngOnInit() {}

}
