import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import Header from "./Components/Header/Header";
import DetailView from "./Components/ItemDetails/DetailView";

import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Cart/Cart";
import { Box } from "@material-ui/core";
import DetailHeaderView from "./Components/Header/HeaderInner/DetailHeaderView";
import HeaderView from "./Components/Header/HeaderInner/HeaderView";
import InnerSlide from "./Components/Header/HeaderInner/InnerSlide";



function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              {/* <Route exact path= '/product/:id' component={Product} /> */}
              <Route exact path="/product/:id" component={DetailView} />
              <Route exact path="/medicines/:id" component={DetailHeaderView} />
              <Route component={NotFound} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
