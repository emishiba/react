import { createMuiTheme } from '@material-ui/core/styles';

// Pick colors on https://material.io/resources/color/#!/

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: '#000',
      },
    },

    MuiOutlinedInput: {
      root: {
        fontSize: '14px',

        '&:hover $notchedOutline': {
          borderColor: '#77a6d5',
        },

        '&.Mui-focused $notchedOutline ': {
          border: '2px solid #77a6d5',
        },

        '&.Mui-disabled $notchedOutline': {
          borderColor: '#eaf0f5',
          background: '#eaf0f5',
          zIndex: '-1',
        },
      },

      notchedOutline: {
        borderColor: '#d5e3f1',
      },
    },

    MuiInputBase: {
      input: {
        '&.Mui-disabled': {
          color: '#333',
        },
      },
    },
  },
});
