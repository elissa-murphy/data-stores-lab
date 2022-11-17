import { Grid } from "@mui/material";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { TaskStore, MoveCommand } from "../system/TaskStore";

export default function TaskRow({ rowData, rowNum }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "card",
      drop: (item) => {
        let moveCommand = new MoveCommand(item.rowNum, rowNum, {
          index: item.index,
          description: item.description,
        });

        TaskStore.moveTask(moveCommand);
      },
    }),
    []
  );

  console.log(isOver, canDrop);

  let tasks = rowData.tasks.map((task, ind) => (
    <Task
      key={task.id}
      description={task.description}
      index={ind}
      rowNum={rowNum}
    />
  ));

  return (
    <Grid xs={4} ref={drop}>
      {rowData.name} {tasks}
    </Grid>
  );
}
