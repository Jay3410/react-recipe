import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import uuid from "uuid";

import Items from "./items";

const { appId, apiKey } = require("../config/config");
const axios = require("axios");

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "auto",
    marginTop: "20px"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class Filter extends React.Component {
  state = {
    search: "",
    result: [],
    page: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${
      this.state.search
    }&app_id=${appId}&app_key=${apiKey}&from=10&to=20&health=alcohol-free&health=vegan`;

    const searchNew = axios.get(url).then(response => {
      this.setState({ result: response.data.hits });
    });
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              style={{ margin: 8, width: "100%" }}
              placeholder="Search Recipes Here..."
              autoFocus
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              value={this.props.search}
              onChange={this.handleSearch}
            />
          </form>
        </Paper>
        <Grid container>
          {this.state.result &&
            this.state.result.map(item => {
              return <Items key={uuid()} recipe={item.recipe} />;
            })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Filter);
