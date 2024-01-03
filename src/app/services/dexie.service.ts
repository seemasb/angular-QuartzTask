import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { memberTemplate } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  members: Dexie.Table<memberTemplate, number>;

  constructor() {
    super('membersDatabase');

    // Define the schema and version
    this.version(1).stores({
      members: 'id,firstName,secondName,finalName,age'
    });

    // Assign the members table
    this.members = this.table('members');
  }

  getMembers(): Promise<memberTemplate[]> {
    return this.members.toArray();
  }

  addMember(newMember: memberTemplate) {
     this.members.add(newMember);
  }

  deleteMember(deletedMember: number) {
    console.log('dexie' , deletedMember)
    this.members.delete(deletedMember);
 }
}

