import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../Day2/animal-list/animal-list.component';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  animal: Animal[] = [];

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>('api/animals/');
  }

  createAnimal(animal: Animal): Observable<Animal> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Animal>('api/animals/', animal, { headers });
  }
  updateAnimal(animal: Animal): Observable<Animal> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Animal>(`api/animals/${animal.id}`, animal, {
      headers,
    });
  }

  deleteAnimal(id: number) {
    return this.http.delete(`api/animals/${id}`);
  }

}
