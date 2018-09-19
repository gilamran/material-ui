import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
  list: {
    padding: 0,
  },
  listItem: {
    display: 'inline-block',
    margin: '5px 0',
    padding: 0,
  },
};

function TypographyVariant(props) {
  const { children, classes, ...typographyProps } = props;
  return (
    <ListItem className={classes.listItem}>
      <Typography {...typographyProps}>{children}</Typography>
    </ListItem>
  );
}

function Types(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <TypographyVariant classes={classes} variant="headline1">
          headline 1
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="headline2">
          headline 2
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="headline3">
          headline 3
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="headline4">
          headline 4
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="headline5">
          headline 5
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="headline6">
          headline 6
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="subtitle1">
          subtitle 1
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="subtitle2">
          subtitle 2
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="body1" useNextVariants>
          Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="body2" useNextVariants>
          Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="button" useNextVariants>
          button text
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="caption" useNextVariants>
          caption text
        </TypographyVariant>
        <TypographyVariant classes={classes} variant="overline">
          overline text
        </TypographyVariant>
      </List>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);
