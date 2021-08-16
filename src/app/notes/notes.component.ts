import { Component, OnInit } from '@angular/core';
import { NOTES } from '../sample-notes'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  isCollapsed = true;
  notes = NOTES;
  

  constructor() { }

  ngOnInit() {
    
  }

}

