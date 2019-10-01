import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
}));
