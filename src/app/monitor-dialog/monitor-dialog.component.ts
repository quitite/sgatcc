import {
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-monitor-dialog',
  templateUrl: './monitor-dialog.component.html',
  styleUrls: ['./monitor-dialog.component.css']
})
export class MonitorDialogComponent implements OnInit {
  saving = false;


  constructor(
    injector: Injector,    
    public bsModalRef: BsModalRef
  ) {
    
  }

  ngOnInit(): void {
  }


  save(): void {
    this.bsModalRef.hide();      
  }

}
