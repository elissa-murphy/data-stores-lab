import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { TaskStore } from "../system/TaskStore";
import TaskRow from "./TaskRow";
import AddTask from "./AddTask";

export default function FakeKanBan() {
  const [rowData, setRowData] = useState(TaskStore.rows);

  useEffect(() => {
    TaskStore.subscribe(onTaskUpdate);
  }, []);

  function onTaskUpdate() {
    setRowData([...TaskStore.rows]);
  }

  //pre-render stuff
  let rows = rowData.map((row, ind) => (
    <TaskRow key={ind} rowData={row} rowNum={ind} />
  ));

  return (
    <Container>
      <Grid container>{rows}</Grid>
      <AddTask />
    </Container>
  );
}
