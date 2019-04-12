import React from "react";
import Grid from "@material-ui/core/Grid";

import Navbar from "./Navbar";
import Filter from "./filter";

const App = () => (
  <Grid container direction="column">
    <Grid item xs>
      <Navbar />
    </Grid>
    <Grid item xs>
      <Filter />
    </Grid>
  </Grid>
);

export default App;
