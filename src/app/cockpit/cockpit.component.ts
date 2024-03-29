import { Component, ElementRef, EventEmitter, OnInit,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated =new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated')bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('severContentInput') severContentInput: ElementRef


  constructor() { }

  ngOnInit(): void {
  }

   onAddServer(nameInput:HTMLInputElement) {
    // console.log(nameInput,nameInput.value);
    // console.log(this.severContentInput);
    
    
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.severContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
  this.bluePrintCreated.emit({
    serverName:nameInput.value,
    serverContent:this.severContentInput.nativeElement.value
  })
  }
}
