import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, Box, Grid } from "@material-ui/core";

import { SubmitFunction } from "../App";

interface AppModalProps {
  submit: SubmitFunction;
}

export interface AppModalState {
  name: string;
  nameMessage: string;
  description: string;
  descriptionMessage: string;
  iconUrl: string;
  iconUrlMessage: string;
  open: boolean;
}

let defaultState = {
  name: "",
  nameMessage: "Name your App",
  description: "",
  descriptionMessage: "Describe your App",
  iconUrl: "",
  iconUrlMessage: "Icon to represent your App",
  open: false,
};

export default class AddAppModal extends React.Component<
  AppModalProps,
  AppModalState
> {
  constructor(props: AppModalProps) {
    super(props);
    this.state = defaultState;
  }

  private reset = () => {
    this.setState(defaultState);
  };

  private handleClickOpen = () => {
    this.setState({ open: true });
  };

  private handleClose = () => {
    this.reset();
    this.setState({ open: false });
  };

  private handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.handleSubmit();
  };

  private handleSubmit = () => {
    this.props.submit(
      this.state.name,
      new Date().toString(),
      this.state.description,
      this.state.iconUrl
    );
    this.handleClose();
  };

  // would like to find a way to generify these handlers, for now, they're hard
  // coded for each element in the form
  private handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };
  private handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: event.target.value });
  };
  private handleChangeIcon = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ iconUrl: event.target.value });
  };

  public render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Add App
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add a new App"}</DialogTitle>
          <DialogContent>
            <form
              id="appData"
              onSubmit={this.handleFormSubmit}
              autoComplete="off"
            >
              <Box mb={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      type="text"
                      variant="outlined"
                      style={{ width: "100%" }}
                      id="standard-basic"
                      label="Name"
                      value={this.state.name}
                      onChange={this.handleChangeName}
                      helperText={this.state.nameMessage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      variant="outlined"
                      style={{ width: "100%" }}
                      id="standard-basic"
                      label="Description"
                      value={this.state.description}
                      onChange={this.handleChangeDescription}
                      multiline
                      helperText={this.state.descriptionMessage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="url"
                      variant="outlined"
                      style={{ width: "100%" }}
                      id="standard-basic"
                      label="Icon url"
                      value={this.state.iconUrl}
                      onChange={this.handleChangeIcon}
                      helperText={this.state.iconUrlMessage}
                    />
                  </Grid>
                </Grid>
              </Box>
            </form>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => this.handleClose()}
              color="secondary"
              variant="outlined"
              disableElevation
            >
              Cancel
            </Button>
            <Button
              form="appData"
              type="submit"
              color="primary"
              variant="contained"
              disableElevation
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
