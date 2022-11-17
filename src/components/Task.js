import { Card } from "@mui/material";
import { useDrag } from "react-dnd";

export default function Task({ description, index, rowNum }) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "card",
      item: { description: description, index: index, rowNum: rowNum },
    }),
    []
  );

  console.log(isDragging, preview);

  return (
    <Card ref={drag}>
      <p>{description}</p>
    </Card>
  );
}
