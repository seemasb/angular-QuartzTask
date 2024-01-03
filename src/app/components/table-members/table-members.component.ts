import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { FormMembersComponent } from '../form-members/form-members.component';
import { memberTemplate } from '../../models/member';

@Component({
  selector: 'app-table-members',
  standalone: true,
  imports: [CommonModule, FormMembersComponent],
  templateUrl: './table-members.component.html',
  styleUrls: ['./table-members.component.css'],
})
export class TableMembersComponent implements OnInit {
  members: memberTemplate[] = [];
  membersModalShow: boolean = false;

  constructor(private MembersService: MembersService) {}

  ngOnInit() {
    this.loadMembers();
  }

  async loadMembers() {
    this.members = await this.MembersService.getMembers();
  }
  openAddMemberModal = () => {
    this.membersModalShow = true;
  };

  closeAddMemberModal = () => {
    this.membersModalShow = false;
  };

  async addMember(newMember: any) {
    await this.MembersService.addMember(newMember);
    this.loadMembers();
    this.closeAddMemberModal()
  }

  async deleteMember(deletedMember: memberTemplate) {
    console.log('table' , deletedMember)
    await this.MembersService.deleteMember(deletedMember.id);
    this.loadMembers();
  }

}
