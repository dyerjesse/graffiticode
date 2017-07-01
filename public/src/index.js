import * as React from "react";
import * as ReactDOM from "react-dom";
import ToolView from "./tool-view";
import SourceView from "./src-view";
import GraffView from "./graff-view";
import ObjectView from "./obj-view";
import ArchiveView from "./archive-view";
import Dispatcher from "./Dispatcher";
// This is the one and only dispatcher. It is used by embedded views as well.
window.gcexports.dispatcher = window.gcexports.dispatcher
                            ? window.gcexports.dispatcher
                            : new Dispatcher;
//ReactDOM.render(
//  React.createElement(ToolView, null),
//  document.getElementById('tool-view')
//);
ReactDOM.render(
 React.createElement(ArchiveView, null),
 document.getElementById('archive-view')
);
ReactDOM.render(
  React.createElement(SourceView, null),
  document.getElementById('src-view')
);
ReactDOM.render(
  React.createElement(GraffView, null),
  document.getElementById('graff-view')
);
ReactDOM.render(
  React.createElement(ObjectView, null),
  document.getElementById('obj-view')
);
