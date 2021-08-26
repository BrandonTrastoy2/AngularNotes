import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

export class Note {
  id!: number;
  title!: string;
  text!: string;
}


@Injectable({
  providedIn: 'root'
})


export class NotesService {

  private apiUrl = "http://localhost:5000/notes"

  constructor(private http:HttpClient) {
  }

  getNote(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  editNote(note: Note): Observable<Note> {
    const body = { id: note.id, title: note.title, text: note.text  };
    return this.http.put<Note>(this.apiUrl + "/" + note.id, body)
  }

  deleteNote(id: string) : Observable<Note> {
    return this.http.delete<Note>(this.apiUrl + "/" + id);
  }

  createNote(id: number, title: string, text: string): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, { id: id, title: title, text: text })
  }

}
