import { makeStyles, Grid ,   Divider} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MobileStoreButton from "react-mobile-store-button";

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
    // padding: "30px",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "-10px",
      marginLeft:"-40px"
    },
  },
  root: {
    // margin: "15px",
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

const FooterAddress = () => {
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
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <ul
            style={{
              listStyle: "none",
              lineHeight: "1.7",
              marginTop: "14px",
              cursor: "pointer",
            }}
          >
            <h6 style={{ textAlign: "center", fontWeight: "800" }}>
              Registered Office Address
            </h6>
            <li>
              Registered Address: Tresor Healthcare Private Limited, E-44/2,
              Pocket D, Okhla Industrial Area, Phase - 2, South Delhi, 110020,
              New Delhi, India CIN: U93000DL2015PTC287050
            </li>
          </ul>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <ul
            style={{
              listStyle: "none",
              lineHeight: "1.7",
              marginTop: "14px",
              cursor: "pointer",
              display: "column",
            }}
          >
            <li>CIN: U72300KA2007PTC041799 </li>
            <li>Telephone: +91-80-61561999</li>
          </ul>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default FooterAddress;
