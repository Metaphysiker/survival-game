import { Component, OnInit } from '@angular/core';

declare const bootstrap: any;

var modal: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    modal = new bootstrap.Modal(document.getElementById('exampleModal'))

  }

  showModal() {
    modal.show()
  }

}
