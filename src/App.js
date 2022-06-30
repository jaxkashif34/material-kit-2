import React from "react";
import ThemeConfig from "assets/theme";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
} from "@mui/material";
export default function App() {
  return (
    <ThemeConfig>
      <Button onClick={handleClickOpen}>Open alert dialog</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeConfig>
  );
}
