import { Grid, Typography, Button, Box, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const ContactSection = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
        direction="column"
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: 600 }}
            align="center"
          >
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" color="secondary" align="center">
            To Check out our Menu and for constant updates, pls Subscribe to our
            newsletter.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="name" value="contact" />
            <Grid container spacing={4} direction="column">
              <Grid item>
                <TextField
                  label="Email Id"
                  type="email"
                  variant="outlined"
                  name="email"
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactSection;
