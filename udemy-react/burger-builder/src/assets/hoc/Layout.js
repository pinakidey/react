import React, {useState} from "react";
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./../../components/Navigation/SideDrawer/SideDrawer";
import {Route} from "react-router";
import Switch from "./Switch";
import NotFound from "./../../components/NotFound/NotFound"
import LazyRoute from "./LazyRoute";

const Layout = () => {
    const [showSideDrawer, setshowSideDrawer] = useState(false);
    const toggleSideDrawer = () => {
        setshowSideDrawer(showSideDrawer => !showSideDrawer);
    }

    return (
        <>
            <Toolbar toggleSideDrawer={toggleSideDrawer} />
            <SideDrawer show={showSideDrawer} toggleSideDrawer={toggleSideDrawer}/>
            <Switch>
                <LazyRoute path="/orders" component={() => import('./../../components/OrderHistory/OrderHistory')} />
                <LazyRoute path="/" exact component={() => import('./../../containers/BurgerBuilder/BurgerBuilder')}/>;
                <Route render={() => <NotFound/>} />
            </Switch>
        </>
    );
};

export default Layout;