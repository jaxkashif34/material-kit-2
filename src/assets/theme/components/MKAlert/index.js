import React, { useState } from "react";
import { Fade } from "@mui/material";
export default function MkAlert() {
  const [mount, setMount] = useState(true);

  return <Fade in={mount}>
    
  </Fade>;
}
