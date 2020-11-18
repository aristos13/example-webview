import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b66d6',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#FF0000',
    },
    textSecondary: {
      main: '#8499a8',
    },
  },
  overrides: {
    MuiSelect: {
      icon: {
        marginRight: '20px',
      },
    },
    MuiFormHelperText: {
      root: {
        marginLeft: '14px',
        color: 'var(--color-black)',
      },
    },
    MuiDialogTitle: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: '0',
        paddingRight: '0',
      },
    },
  },
});

export default theme;
