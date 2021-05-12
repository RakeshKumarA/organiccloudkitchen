import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import LocalFloristRoundedIcon from "@material-ui/icons/LocalFloristRounded";
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: 20,
  },
});

const ServicesSection = () => {
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
        <Grid item sm={8}>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: 600 }}
            align="center"
          >
            Offering
          </Typography>
        </Grid>

        <Grid item container xs={12} lg={8} spacing={4}>
          <Grid
            item
            xs={12}
            lg={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <EcoRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Organic food
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                We offer "100% Organic Dishes" made from the local farmers that
                will have positive impact to your healthy life
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <LocalFloristRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Vegetarian
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                Vegetarian diet which means fresh, healthful and plant-based
                foods which are excellent source of antoxidants and fibre.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <LocalShippingRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Delivery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                Cloud Kitchens are the FUTURE, delivering affordable hygenic
                food, touch free, of highest grade reducing the operational
                costs.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
