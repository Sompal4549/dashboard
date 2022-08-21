import React from "react";
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Inject,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Resize,
  Month,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white bg-white rounded-3xl">
      <Header category="App" title="Calendar"></Header>
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        ></Inject>
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
