import { makeStyles, Grid ,Divider} from "@material-ui/core";
import SecurityIcon from "@material-ui/icons/Security";
import LockIcon from "@material-ui/icons/Lock";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

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
  },
  root: {
    margin: "15px",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
  },
  grid: {
    display: "flex",
    paddingLeft: "140px",
    paddingBottom: "2px",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      // height: 120,
    },
  },
  gridItem: {
    display: "column",
    marginTop: "-45px",
    paddingLeft: "100px",
    paddingRight: "100px",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      marginTop: "5px",
      // height: 120,
    },
  },
  help: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 120,
    },
  },
}));

const SecureLinks = () => {
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
          <div className={classes.grid}>
            <SecurityIcon style={{ fontSize: "52px", color: "green" }} />
          </div>
          <div className={classes.gridItem}>
            <h3 style={{ fontWeight: "600" }}>Reliable</h3>
            <p>
              All products displayed on Tata 1mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}>
          <div className={classes.grid}>
            <LockIcon style={{ fontSize: "52px", color: "green" }} />
          </div>
          <div className={classes.gridItem}>
            <h3 style={{ fontWeight: "600" }}>Secure</h3>
            <p>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </p>
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <div className={classes.grid}>
            <AccountBalanceWalletIcon
              style={{ fontSize: "52px", color: "green" }}
            />
          </div>
          <div className={classes.gridItem}>
            <h3 style={{ fontWeight: "600" }}>Affordable</h3>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </p>
          </div>
        </Grid>
      </Grid>
     <Divider/>
    </>
  );
};

export default SecureLinks;
