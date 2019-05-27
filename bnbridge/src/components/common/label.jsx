import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography
} from '@material-ui/core';

const styles = theme => ({
  inline: {
    display: 'inline-block',
    width: 'auto'
  }
});

function Label(props) {
  const {
    label,
    classes
  } = props;

  return (
    <Typography variant="h6" gutterBottom className={ classes.inline }>
      {label}
    </Typography>
  )
}

Label.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default withStyles(styles)(Label);
