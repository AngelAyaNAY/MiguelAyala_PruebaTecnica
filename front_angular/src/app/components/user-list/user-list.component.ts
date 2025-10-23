import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, UserModalComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  modalVisible = false;
  editingUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  openModal(user?: User) {
    this.editingUser = user ? { ...user } : null;
    this.modalVisible = true;
  }

  closeModal(reload: boolean = false) {
    this.modalVisible = false;
    this.editingUser = null;
    if (reload) this.loadUsers();
  }

  deleteUser(id: number) {
    if (!confirm('¿Seguro que quieres eliminar este usuario?')) return;
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
