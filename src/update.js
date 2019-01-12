const ACTIONS = {
  FEET_VALUE_INPUT: 'FEET_VALUE_INPUT',
  INCHES_VALUE_INPUT: 'INCHES_VALUE_INPUT',
  POUNDS_VALUE_INPUT: 'POUNDS_VALUE_INPUT'
};

export const feetInputAction = feet => ({ type: ACTIONS.FEET_VALUE_INPUT, feet });
export const inchesInputAction = inches => ({ type: ACTIONS.INCHES_VALUE_INPUT, inches });
export const poundsInputAction = pounds => ({ type: ACTIONS.POUNDS_VALUE_INPUT, pounds });

const update = (action, model) => {
  switch (action.type) {
    case ACTIONS.FEET_VALUE_INPUT: {
      const { feet } = action;
      return { ...model, feet: parseInt(feet) };
    }

    case ACTIONS.INCHES_VALUE_INPUT: {
      const { inches } = action;
      return { ...model, inches: parseInt(inches) };
    }

    case ACTIONS.POUNDS_VALUE_INPUT: {
      const { pounds } = action;
      return { ...model, pounds: parseInt(pounds) };
    }

    default: {
      return model;
    }
  }
};

export default update;
