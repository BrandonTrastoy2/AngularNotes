import { Component, OnInit } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { Note } from "../notes.service";
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})

export class EditNoteComponent implements OnInit {

  constructor(private notesComponent: NotesComponent) { }

  @Input() noteToEdit!: Note;

  ngOnInit(): void {
  }

  editNote(noteToEdit: Note, title: string, text: string) {
    noteToEdit.title = title;
    noteToEdit.text = text;

    this.notesComponent.editNote(noteToEdit);
  }

}
