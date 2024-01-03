import { CommonModule } from '@angular/common';
import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-members',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-members.component.html',
  styleUrls: ['./form-members.component.css'],
})
export class FormMembersComponent implements OnInit {
  memberFormValues = new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    finalName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(0)]), // Assuming age should be a non-negative number
  });

  @Output() memberAdded = new EventEmitter<any>()

  onSubmit = ()=>{
    console.log(this.memberFormValues.value)
    this.memberAdded.emit(this.memberFormValues.value)
  }
  constructor() {}

  ngOnInit() {}
}
