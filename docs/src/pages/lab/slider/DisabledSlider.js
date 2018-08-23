import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

function DisabledSlider(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Slider value={0} disabled />
      <Slider value={50} disabled />
      <Slider value={100} disabled />
      <Slider value={50} min={0} max={100} step={10} disabled />
    </div>
  );
}

DisabledSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisabledSlider);
