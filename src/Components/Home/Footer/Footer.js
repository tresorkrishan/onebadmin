import React from "react";
import FooterAddress from "./Address";
import FooterLinks from "./FooterLinks";
import PaymentIcons from "./PaymentIcons";
import SecureLinks from "./SecureLinks";
import UpiIocns from "./UpiIcons";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <FooterLinks />
      <FooterAddress />
      <SecureLinks/>
      <PaymentIcons />
      <UpiIocns />
    </div>
  );
};

export default Footer;
