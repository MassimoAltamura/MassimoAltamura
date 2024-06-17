import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./Container";
import { MyComponent } from "./MyComponent";
import { AnotherComponent } from "./AnotherComponent";
import { YetAnotherComponent } from "./YetAnotherComponent";

export function App() {
  return (
    <Container title={<h1>My Cool Application</h1>}>
      <hr />
      <MyComponent />
      <AnotherComponent />
      <YetAnotherComponent />
    </Container>
  );
}


export function MyComponent() {
  return <div>MyComponent content</div>;
}

export function AnotherComponent() {
  return <div>AnotherComponent content</div>;
}

export function YetAnotherComponent() {
  return <div>YetAnotherComponent content</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
