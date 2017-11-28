import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  @Input() employeeName: string;
  @Input() employeeCity: string;
  @Input() employeeSalary: string;
  @Output() sendRecord = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitSendRecordEvent() {
          // tslint:disable-next-line:prefer-const
            let selectedEmployeeObj: any = {
            selectedName: this.employeeName,
            selectedCity: this.employeeCity,
            selectedSalary : this.employeeSalary
    };
this.sendRecord.emit(selectedEmployeeObj);
  }

}
