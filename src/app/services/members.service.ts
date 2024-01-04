import { Injectable } from '@angular/core';
import { memberTemplate } from '../models/member';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends Dexie {
  membersDB: Dexie.Table<memberTemplate, number>;

  constructor() {
    super('membersDatabase');

    // Define the schema and version
    this.version(1).stores({
      //table name and columns
      members: 'id,firstName,secondName,finalName,age'
    });

    // Assign the table initilized above
    this.membersDB = this.table('members');
  }

  getMembers(): Promise<memberTemplate[]> {
    return this.membersDB.toArray();
  }

  async addMember(newMember: memberTemplate): Promise<any> {
    return this.membersDB.add(newMember).catch(error => {
      return Promise.reject(error);
    });
  }

  deleteMember(deletedMember: number) {
    this.membersDB.delete(deletedMember);
 }

}
