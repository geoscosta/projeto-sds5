import Home from "pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Home />
                </Route>
            </switch>
        </BrowserRouter>
    );
}

export default Routes;