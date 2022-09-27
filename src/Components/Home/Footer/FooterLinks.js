import { makeStyles, Grid, Divider, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MobileStoreButton from "react-mobile-store-button";

import FormControl from "@material-ui/core/FormControl";

import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const ImageURL = [
  "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 10,
    paddingLeft: "30px",
    padding: "30px",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    justifyContent: "space-between",
  },
  root: {
    margin: "15px",
    borderRadius: "10px",
  },
  image: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      paddingLeft: "-50px",
      marginBottom: "-100px",
    },
  },
  appbuttons: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      marginLeft: "50px",
      // marginBottom: "-100px",
    },
  },
  help: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 120,
    },
  },
}));

const FooterLinks = () => {
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
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <div>
            <ul
              style={{
                listStyle: "none",
                lineHeight: "1.7",
                cursor: "pointer",
              }}
            >
              <h6 style={{ textAlign: "center", fontWeight: "800" }}>
                Get to Know Us
              </h6>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Press Coverage</li>
              <li>Business Partnership</li>
            </ul>
          </div>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <ul
            style={{ listStyle: "none", lineHeight: "1.7", cursor: "pointer" }}
          >
            <h6 style={{ textAlign: "center", fontWeight: "800" }}>
              Let Us Help You{" "}
            </h6>
            <li>Your Account </li>
            <li>Payment</li>
            <li>Shipping</li>
            <li>FAQ's</li>
            <li>Infringement</li>
          </ul>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <ul
            style={{
              listStyle: "none",
              lineHeight: "1.7",
              marginTop: "14px",
              cursor: "pointer",
            }}
          >
            <h6 style={{ textAlign: "center", fontWeight: "800" }}>
              Our Policies
            </h6>
            <li>Return Policy</li>
            <li>Editorial Policy</li>
            <li>Privacy Policy</li>
            <li>Term of use</li>
            <li>Grievance Redressal Policy</li>
            <li>Security</li>
          </ul>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <h6
            style={{
              textAlign: "center",
              fontWeight: "800",
              marginTop: "-80px",
            }}
          >
            Social Links
          </h6>
          <ul
            style={{
              listStyle: "none",
              lineHeight: "1.7",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <li>
              <TwitterIcon style={{ fontSize: "38px" }} />{" "}
            </li>
            <li style={{ marginLeft: "10px" }}>
              <FacebookIcon style={{ fontSize: "38px" }} />{" "}
            </li>
            <li style={{ marginLeft: "10px" }}>
              <YouTubeIcon style={{ fontSize: "38px" }} />{" "}
            </li>
            <li style={{ marginLeft: "10px" }}>
              <InstagramIcon style={{ fontSize: "38px" }} />{" "}
            </li>
            <li style={{ marginLeft: "10px" }}>
              <LinkedInIcon style={{ fontSize: "38px" }} />{" "}
            </li>
          </ul>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={12}
          xs={12}
          style={{ alignItems: "right" }}
        >
          <h6
            style={{
              textAlign: "center",
              fontWeight: "800",
              marginLeft: "54px",
              marginTop: "-10px",
              marginBottom: "10px",
            }}
          >
            App buttons
          </h6>
          <ul
            style={{
              listStyle: "none",
              alignItems: "center",
              marginLeft: "50px",
            }}
            className={classes.appbuttons}
          >
            <li>
              <MobileStoreButton
                store="ios"
                // url={iOSUrl}
                style={{
                  width: "auto",
                  alignItems: "center",
                  height: "43px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
                linkProps={{ title: "iOS Store Button" }}
              />
            </li>

            <MobileStoreButton
              store="android"
              style={{ width: "400px", height: "64px" }}
              linkProps={{ title: "android Store Button" }}
            />
          </ul>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <ul style={{ listStyle: "none", lineHeight: "1.7" }}>
            <li>
              <img
                src="https://www.onebharatpharmacy.com/assets/logo.png"
                alt=""
                width="200px"
              />
            </li>
            <li>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  style={{ height: "35px", width: "140px", marginTop: "12px" }}
                />
                <button
                  className="btn btn-primary"
                  style={{ height: "37px", marginTop: "-4px" }}
                >
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Divider />
      {/* <hr style={{ marginTop: "-30px" }} /> */}
    </>
  );
};

export default FooterLinks;
