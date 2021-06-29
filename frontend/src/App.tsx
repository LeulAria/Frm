import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Hero from './components/home/Hero';
import Header from './layout/Header';

function App() {
  let theme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: "#111"
      },
      primary: {
        light: "#111",
        main: "#212121",
        dark: "#111",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#222",
        dark: "#222",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 10,
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  theme = {
    ...theme,
    overrides: {
      MuiButton: {
        label: {
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
      },
      MuiIconButton: {
        root: {
          padding: theme.spacing(1),
        },
      },
      MuiTooltip: {
        tooltip: {
          borderRadius: 4,
        },
      },
      MuiListItemIcon: {
        root: {
          color: "inherit",
          marginRight: 0,
          "& svg": {
            fontSize: 20,
          },
        },
      },
      MuiAvatar: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  };


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Hero />
      </ThemeProvider>
    </div>
  );
}

export default App;
