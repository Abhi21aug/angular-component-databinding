import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  firstName=''
  lastName=''
  nameData=[]

  addData(){
    this.nameData.push({
      firstname:this.firstName,
      lastname:this.lastName,
    })
    this.firstName = '';
    this.lastName = '';
  }
  deleteData(i){
    this.nameData.splice(i,1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
