import { Component, OnInit } from '@angular/core';
import { NotesComponent } from "../notes/notes.component";


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  isCollapsed = true;

  constructor(private notesComponent: NotesComponent) { }

  ngOnInit(): void {
  }

  createNote(title: string, text: string) {
    //console.log(title);
    //console.log(text);
    this.notesComponent.createNote(title, text);
  }

}
