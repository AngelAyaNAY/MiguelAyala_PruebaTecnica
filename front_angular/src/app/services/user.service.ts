import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    id?: number;
    nombre: string;
    correo: string;
    edad: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'http://localhost:3001/api/data/user';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    createUser(data: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, data);
    }

    updateUser(id: number, data: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${id}`, data);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
