import { CommonModule } from '@angular/common';
import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-members',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-members.component.html',
  styleUrls: ['./form-members.component.css'],
})
export class FormMembersComponent implements OnInit {
  memberFormValues = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    finalName: new FormControl(''),
    age: new FormControl(''),
  });

  @Output() memberAdded = new EventEmitter<any>()

  onSubmit = ()=>{
    console.log(this.memberFormValues.value)
    this.memberAdded.emit(this.memberFormValues.value)
  }
  constructor() {}

  ngOnInit() {}
}
