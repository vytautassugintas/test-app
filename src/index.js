import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import appStore from "./store";
import Container from "./Container";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

let store = createStore(appStore);

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root"),
  registerServiceWorker()
);
