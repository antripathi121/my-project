import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from 'ng-fullcalendar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-calendar1',
  templateUrl: './calendar1.component.html',
  styleUrls: ['./calendar1.component.css']
})
export class Calendar1Component implements OnInit {

  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {}

  data=['event1','event2'];
  trackByFn(index, item) {
    return index; 
  }


 store(newValue){
   this.data.push(newValue);
   console.log(this.data)
 }

 removeItem= function(index){
  this.data.splice(index, 1);
};

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar', {static: false}) fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function() {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [ dayGridPlugin, interactionPlugin ]
    };

  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  clickButton(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
  
}
