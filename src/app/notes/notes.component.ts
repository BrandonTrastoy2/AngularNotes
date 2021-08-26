import { Component, OnInit } from '@angular/core';
import { NotesService } from "../notes.service";
import { Note } from "../notes.service";

//import { NOTES } from '../sample-notes'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  // Sets the default value to false
  componentVisible: boolean[] = [false];
  notes: Note[] = []

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    // This is what allows the notes to get populated at the start of the page
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNote().subscribe((notes) => this.notes = notes);
  }

  editNote(note: Note) {
    this.noteService.editNote(note).subscribe(() => {
      this.getNotes();
    });
  }

  deleteNote(id: any) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.getNotes();
    });
  }

  // This is not a good method if the data is scaled to a large amount
  // I don't plan on having too many notes tho
  findHighestId(): number {

    var max = 0;

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id > max) {
        max = this.notes[i].id;
      }
    }

    return max;
  }

  createNote(title: string, text: string) {

    var id = this.findHighestId() + 1;
    console.log(id);

    this.noteService.createNote(id, title, text).subscribe(() => {
      this.getNotes();
    });
  }

}
