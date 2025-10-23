import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService, User } from '../../services/user.service';

@Component({
    selector: 'app-user-modal',
    standalone: true,
    imports: [NgIf, FormsModule],
    templateUrl: './user-modal.component.html',
})
export class UserModalComponent {
    @Input() user: User | null = null;
    @Output() close = new EventEmitter<boolean>();

    nombre = '';
    correo = '';
    edad: number | null = null;

    constructor(private userService: UserService) { }

    ngOnInit() {
        if (this.user) {
            this.nombre = this.user.nombre;
            this.correo = this.user.correo;
            this.edad = this.user.edad;
        }
    }

    saveUser() {
        const data: User = {
            nombre: this.nombre.trim(),
            correo: this.correo.trim(),
            edad: this.edad ?? 0,
        };

        if (this.user) {
            this.userService.updateUser(this.user.id!, data).subscribe(() => {
                alert('Usuario actualizado correctamente');
                this.close.emit(true);
            });
        } else {
            this.userService.createUser(data).subscribe(() => {
                alert('Usuario creado correctamente');
                this.close.emit(true);
            });
        }
    }

    closeModal() {
        this.close.emit(false);
    }
}
