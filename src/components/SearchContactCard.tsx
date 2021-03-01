/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, createMuiTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import UserAvatar from "./UserAvatar";
import FilledIcondButton from "./FilledIcondButton";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#794BFF",
    },
  },
});

const useStyles = makeStyles({
  container: {
    minWidth: "362.02px",
    maxWidth: "362.02px",
    minHeight: "81px",
    maxHeight: "81px",
    background: "#F9F9FC",
    borderRadius: "8px 8px 0 0",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    fontFamily: "Poppin, sans-serif",
  },
  bottomContainer: {
    background: "#EAE8FE",
    minWidth: "362.02px",
    maxWidth: "362.02px",
    borderRadius: "0 0 8px 8px",
  },
});

interface userData {
  data: {
    profileImageUrl: string;
    trust: number;
    fullName: string;
    userId: number;
  };
}

const SearchContactCard: React.FC<userData> = ({ data }) => {
  const classes = useStyles();
  const { profileImageUrl, trust, fullName } = data;
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          container
          className={classes.container}
          spacing={1}
          justify="center"
        >
          <Grid item xs={4} style={{ position: "relative" }}>
            <UserAvatar
              profileImageUrl={profileImageUrl}
              trust={trust}
              style={{ position: "absolute", top: "-60px" }}
            />
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              className={classes.text}
              spacing={1}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <h2 style={{ fontSize: "17px", fontWeight: 500, margin: 0 }}>
                  {fullName}
                </h2>
              </Grid>
              <Grid item xs={12}>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#818181",
                    margin: 0,
                  }}
                >
                  nessuna connessione
                </h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} alignItems="center" justify="center">
            <FilledIcondButton />
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.bottomContainer}
          spacing={1}
          justify="center"
        >
          <Grid item xs={12}>
            <p
              style={{
                color: "#8463E7",
                fontFamily: "Poppins, san-serif",
                fontWeight: 400,
              }}
            >
              Sta già condividendo{" "}
              <a href="#" style={{ fontWeight: 600, color: "#8463E7" }}>
                Disney Plus
              </a>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SearchContactCard;
