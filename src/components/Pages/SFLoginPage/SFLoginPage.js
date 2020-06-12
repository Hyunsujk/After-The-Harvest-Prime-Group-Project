import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

//material-ui components
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    width: 600,
    marginTop: 80,
  },
  card: {
    width: 600,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  button: {
    paddingTop: 10,
  },
});

// function clickGleaningDetails(props) {
//   if(
//   props.dispatch({ type: "FETCH_SALESFORCE_USER" }))
//  return function (props.history.push(`/detail`));
// }

// onClick={() => props.clickGleaningDetails}>
function SFLoginPage(props) {
  const classes = useStyles();

  //function to login with salesforce user id

  return (
    <Box boxShadow={5} mx="auto" className={classes.box}>
      <Card>
        <CardActionArea
          onClick={() => props.dispatch({ type: "FETCH_SALESFORCE_USER" })}
        >
          <CardMedia
            className={classes.imgMedia}
            image={(require, "./SFLoginPage/foodVegg.jpeg")}
            title="Salesforce Login"
          />
          <CardContent>Click to Login with Salesforce</CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default connect(mapStoreToProps)(SFLoginPage);
