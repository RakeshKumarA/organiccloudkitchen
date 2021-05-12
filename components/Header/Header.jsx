import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Box, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  root: {
    height: "6.25rem",
    transition: "all 0.5s ease-in-out",
  },
  triggeredroot: {
    height: "4.875rem",
    transition: "all 0.5s ease-in-out",
  },
  toolbarStyle: {
    height: "100%",
  },
  buttonTextStyle: {
    padding: "0 .5rem",
  },
  list: {
    width: "100%",
  },
  logoStyle: {
    width: "2.5rem",
  },
});

function ElevationScroll(props) {
  const classes = useStyles();
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? classes.triggeredroot : classes.root,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = React.useState(false);

  const handlehover = () => {
    setVariant("contained");
  };
  const handlehoverLeave = () => {
    setVariant("outlined");
  };

  //Responsive zone

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root} color="inherit">
          <Toolbar className={classes.toolbarStyle}>
            <Box component={Grid} container justify="center">
              <Box
                component={Grid}
                item
                display={{ xs: "none", lg: "flex" }}
                lg={8}
                container
                alignItems="center"
              >
                <Box component={Grid} item lg={6}>
                  <img
                    src="/logo.png"
                    alt="logo"
                    className={classes.logoStyle}
                  />
                </Box>
                <Box
                  component={Grid}
                  item
                  container
                  lg={6}
                  alignItems="center"
                  justify="flex-end"
                >
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Home
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          About
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Why Us
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Services
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section5"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Contact us
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box
                component={Grid}
                item
                display={{ xs: "none", md: "flex", lg: "none" }}
                md={10}
                container
                alignItems="center"
              >
                <Box component={Grid} item md={2}>
                  <Image src="/logo.png" width="40" height="58" />
                </Box>
                <Box
                  component={Grid}
                  item
                  container
                  md={10}
                  alignItems="center"
                  justify="flex-end"
                >
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Home
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          About
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Why Us
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Services
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box component={Grid} item>
                    <Link
                      activeClass="active"
                      to="section5"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button variant="text" color="primary">
                        <Typography
                          variant="subtitle1"
                          color="initial"
                          className={classes.buttonTextStyle}
                        >
                          Contact us
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box
                component={Grid}
                item
                display={{ xs: "flex", md: "none" }}
                xs={11}
                container
                alignItems="center"
              >
                <Box component={Grid} item flexGrow={1}>
                  <Image src="/logo.png" width="40" height="58" />
                </Box>
                <Box component={Grid} item>
                  <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Drawer
                  anchor="top"
                  open={drawerState}
                  onClose={toggleDrawer(false)}
                >
                  <div
                    className={clsx(classes.list)}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List>
                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="primary"
                              align="center"
                            >
                              Home
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="primary"
                              align="center"
                            >
                              About
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="primary"
                              align="center"
                            >
                              Why Us
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="primary"
                              align="center"
                            >
                              Services
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="primary"
                              align="center"
                            >
                              Contact Us
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                  </div>
                </Drawer>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
