import {
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.css']
})
export class ResourcesDialogComponent implements OnInit {
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
