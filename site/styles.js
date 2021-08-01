const { makeStyles } = require("@material-ui/core");

const useDefaultStyles = makeStyles((theme => ({
  main: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    }
  },
  icon: {
    borderRadius: '100%',
    transition: '200ms all',
    hover: {
      filter: 'saturate(200%)',
      transform: 'scale(1.1)',
      cursor: 'pointer'
    }
  }
})));
