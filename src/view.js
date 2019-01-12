import * as R from "ramda";
import hh from "hyperscript-helpers";
import { h } from "virtual-dom";
import {
  feetInputAction,
  inchesInputAction,
  poundsInputAction
} from "./update";
import { getBMI, getBodyType } from "./logic";

const { div, h1, pre, label, input, span } = hh(h);

const round = places =>
  R.pipe(
    num => num * 10 ** places,
    Math.round,
    num => num * 10 ** (-1 * places)
  );

const inputSet = (labelText, value, inputAction) =>
  div({ className: "mb3 w-60" }, [
    label({ className: "db mb1 b f5" }, labelText),
    input(
      {
        value,
        className: "pa2 tr db",
        oninput: e => inputAction(e.target.value)
      },
      value
    )
  ]);

const labelSet = (labelText, value) =>
  div({ className: "w-60 mv2" }, [
    span({ className: "b" }, labelText),
    span({ className: "fr" }, value)
  ]);

const view = (dispatch, model) => {
  const { feet, inches, pounds } = model;
  const bmi = getBMI(feet, inches, pounds);
  return div({ className: "mw6 center" }, [
    h1({ className: "f2 pv2 bb" }, "BMI Calculator"),
    inputSet("Feet", feet, value => dispatch(feetInputAction(value))),
    inputSet("Inches", inches, value => dispatch(inchesInputAction(value))),
    inputSet("Pounds", pounds, value => dispatch(poundsInputAction(value))),
    labelSet("BMI:", round(2)(bmi)),
    labelSet("Result:", getBodyType(bmi))
  ]);
};

export default view;
