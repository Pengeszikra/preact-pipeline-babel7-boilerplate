import { render, h } from "preact";

const increment = value => value + 1;
const double = value => value * 2;

const result = "5"
  |> parseInt
  |> double
  |> double
  |> increment
  |> double
;

const Paragraph = ({text}) => <p>{text}</p>;
render(<Paragraph text={result} />,  document.body);