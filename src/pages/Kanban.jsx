import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-charts";
import { KanbanComponent } from "@syncfusion/ej2-react-kanban";
import React from "react";
import { Header } from "../components";
import { kanbanGrid,kanbanData } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Kanban" category='App'/>
      <KanbanComponent id="kanban" dataSource={kanbanData} cardSettings={{contentField:"Summary", headerField:"Id"}}
      keyField="Status">
        <ColumnsDirective>
          {kanbanGrid.map((item, index)=><ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
