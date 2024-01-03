import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private members = [{ id: 1, firstName: 'John', secondName: 'Doe', finalName: 'John Doe', age: 25 },]
constructor() { }

getMembers = ()=>{
  return this.members
}

addMember = (newMember : any)=>{
  this.members.push(newMember)
  console.log(this.members)
}
}
