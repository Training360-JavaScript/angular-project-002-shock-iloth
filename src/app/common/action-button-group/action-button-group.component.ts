import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {
  constructor() { }

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit();
  }

  onUpdateButtonClick(): void {
    this.updateClick.emit();
  }

  onDeleteButtonClick(): void {
    this.deleteClick.emit();
  }
}
