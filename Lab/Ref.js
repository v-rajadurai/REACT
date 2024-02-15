import { TextField, Button } from "@mui/material";
import React, { useRef } from "react";

export default function Ref() {
  const ref1 = useRef();
  const ref2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      input1: ref1.current.value,
      input2: ref2.current.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField label="input1" inputRef={ref1} />
        <TextField label="input2" inputRef={ref2} />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
