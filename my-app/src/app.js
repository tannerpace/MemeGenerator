import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import { Box, Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Animations from "./Animations";
import { Paper } from "@mui/material";


function App() {
  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        {" "}
        <Paper>
          <Animations></Animations>
        </Paper>
      </Box>
    </CssBaseline>
  );
}

export default App;
