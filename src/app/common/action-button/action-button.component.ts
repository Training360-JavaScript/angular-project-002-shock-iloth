import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  constructor() { }

  @Input() btnClass: string = 'btn-info';
  @Input() icon: string = 'fa-pen';
  @Input() text: string = '';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  onUserClicked(): void {
    this.clicked.emit(true);
  }

}
