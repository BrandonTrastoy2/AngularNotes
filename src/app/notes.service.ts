import { Injectable } from '@angular/core';

export class NoteInfo {
  id!: number;
  title!: string;
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

  constructor() {
  }

}
