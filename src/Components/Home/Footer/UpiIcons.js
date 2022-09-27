import { makeStyles, Grid } from "@material-ui/core";

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
    marginTop: 10,
    paddingLeft: "30px",
    padding: "30px",
    paddingTop: "-30px",
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

const UpiIocns = () => {
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
        <Visa style={{ width: 100 }} />
        <Maestro style={{ width: 100 }} />
        <Mastercard style={{ width: 100 }} />
        <Googlepay style={{ width: 100 }} />
        <img src="https://img.icons8.com/plasticine/100/000000/paytm.png" />
        <img
          src="https://www.logotaglines.com/wp-content/uploads/2021/11/MobiKwik-Logo-Tagline-Slogan-Founder-480x480.jpg"
          style={{ width: 70 }}
        />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/30455c9384889.57ee562a4fba0.jpg"
          style={{ width: 120 }}
        />
        <img
          src="https://www.logo.wine/a/logo/Amazon_Pay/Amazon_Pay-Logo.wine.svg"
          style={{ width: 120 }}
        />
        <img
          src="https://vinron.in/wp-content/uploads/2021/07/Phone-pe-logo-1536x864.png"
          style={{ width: 160 }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png?20170423140208"
          style={{ width: 150 }}
        />{" "}
      </Grid>
    </>
  );
};

export default UpiIocns;
