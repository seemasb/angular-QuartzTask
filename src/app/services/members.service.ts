// members.service.ts

import { Injectable } from '@angular/core';
import { DexieService } from './dexie.service';
import { memberTemplate } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private dexieService: DexieService) {}

  async getMembers(): Promise<memberTemplate[]> {
    return this.dexieService.getMembers();
  }

  async addMember(newMember: memberTemplate){
     this.dexieService.addMember(newMember);
  }

  async deleteMember(deletedMember: number){
    console.log('members service' , deletedMember)
    this.dexieService.deleteMember(deletedMember);
 }
}

