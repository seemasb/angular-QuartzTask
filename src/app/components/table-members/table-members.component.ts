import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { FormMembersComponent } from '../form-members/form-members.component';

@Component({
  selector: 'app-table-members',
  standalone: true,
  imports: [CommonModule, FormMembersComponent],
  templateUrl: './table-members.component.html',
  styleUrls: ['./table-members.component.css'],
})
export class TableMembersComponent implements OnInit {
  members: any = [];
  membersModalShow: boolean = false;

  constructor(private MembersService: MembersService) {}

  ngOnInit() {
    this.members = this.MembersService.getMembers();
  }

  openAddMemberModal = () => {
    this.membersModalShow = true;
  };

  closeAddMemberModal = () => {
    this.membersModalShow = false;
  };

  addMember = (newMember: any) => {
    this.MembersService.addMember(newMember);
    this.closeAddMemberModal()
  };
}
