import { Component, OnInit } from '@angular/core';
import { MonitorDialogComponent } from '@app/monitor-dialog/monitor-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  constructor(
    private _modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }



  showCreateOrEditRoleDialog(): void {
    let createOrEditRoleDialog: BsModalRef;
    
      createOrEditRoleDialog = this._modalService.show(
        MonitorDialogComponent,
        {
          class: 'modal-lg',
        }
      );   
   }
    
  

}
