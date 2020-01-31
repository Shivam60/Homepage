import * as React from "react";
import * as ReactDOM from "react-dom";
import { HomePage } from "./components/HomePage";

ReactDOM.render(<HomePage />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
