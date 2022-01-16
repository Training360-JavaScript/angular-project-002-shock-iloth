import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private userService: UserService) { 
    this.users = userService.list;
  }
    
  title = 'The good Angular programmer';
  users: User[];
  currentUser: User = new User();
  modalShow: string = "";
  modalDisplay: string = "none";

  onSelectClick(row: User): void {
    this.currentUser = row;
    this.openModal();
  }

  onUpdateClick(row: User): void {
    this.userService.updateUser(row);
  }

  onDeleteClick(row: User): void {
    this.userService.removeUser(row);
    this.currentUser = new User();    
    this.closeModal();
  }

  onModalClose(): void {
    this.closeModal();
  }

  private openModal(): void {
    this.modalShow = "show";
    this.modalDisplay = "block";
  }

  private closeModal(): void {
    this.modalShow = "";
    this.modalDisplay = "none";    
  }
}
