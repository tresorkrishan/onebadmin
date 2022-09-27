import { makeStyles, Grid, Divider } from "@material-ui/core";

import {
  Visa,
  Maestro,
  Mastercard,
  Googlepay,
  DinersClub,
  Discover,
  Paypal,
} from "react-pay-icons";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: "10px",
    paddingLeft: "30px",
    padding: "30px",
    paddingTop: "0",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      display: "column",
      // marginLeft: "-150px",
      // alignItems: "left",
    },
  },
  root: {
    margin: "15px",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
  },
  help: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 120,
    },
  },
}));

const PaymentIcons = () => {
  const classes = useStyle();
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid
        lg={12}
        sm={12}
        md={12}
        xs={12}
        container
        className={classes.wrapper}
      >
        <Visa style={{ margin: 10, width: 100 }} />

        <Maestro style={{ margin: 10, width: 100 }} />

        <Mastercard style={{ margin: 10, width: 100 }} />

        {/* 
          <Googlepay style={{ margin: 10, width: 100 }} />
        */}

        <DinersClub style={{ margin: 10, width: 100 }} />

        <Discover style={{ margin: 10, width: 100 }} />
        <Discover style={{ margin: 10, width: 100 }} />

        <Paypal style={{ margin: 10, width: 100 }} />

        <i class="fa fa-cc-amex" style={{ fontSize: "68px" }}></i>
      </Grid>
      <Divider />
    </>
  );
};

export default PaymentIcons;
