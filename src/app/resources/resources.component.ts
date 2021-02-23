import { Component, OnInit } from '@angular/core';
import { ResourcesDialogComponent } from '@app/resources-dialog/resources-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(
    private _modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }


  showCreateOrEditRoleDialog(): void {
    let createOrEditRoleDialog: BsModalRef;
    
      createOrEditRoleDialog = this._modalService.show(
        ResourcesDialogComponent,
        {
          class: 'modal-lg',
        }
      );   
   }

}
