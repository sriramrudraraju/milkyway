import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      margin: 'auto',
      marginTop: theme.spacing(2),
      width: 696
    }
  })
);