import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(1),
  },
  img: {
    height: 'auto',
    maxWidth: '100%',
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    width: '40%',
    position: 'absolute',
    bottom: '40%',
    left: '30%',
  },
}));
