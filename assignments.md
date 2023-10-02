## Assignments

### 1. Install and configure MUI5

- Check the [installation guide](https://mui.com/material-ui/getting-started/installation/) for MUI and install it in the project. Besides the packages in the guide, install the `@mui/styles` package as well by running:

```sh
npm i @mui/styles
```

- Create a theme configuration and wrap the `<App />` component in `main.tsx` with a [theme provider](https://mui.com/material-ui/customization/theming/#themeprovider).

- In the `App.tsx` file change the classic html button tag with [Button](https://mui.com/material-ui/react-button/) component from material ui.

```tsx
import { Button } from "@mui/material";

...

<Button
  variant="outlined"
  color="inherit"
  onClick={() => setCount((count) => count + 1)}
>
  count is {count}
</Button>
```

- Modify the theme configuration to make all outlined buttons rounded.

```tsx
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 50,
        },
      },
    },
  },
});
```

- Create a component for our card container and customize it using [makeStyles](https://mui.com/system/styles/basics/#using-the-theme-context) function.

```tsx
import { Card, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>(({ spacing }) => ({
  card: {
    background: "linear-gradient(100deg, #47e7b9 -15%, #404366 105%);",
    borderRadius: 16,
    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.25)",
    padding: spacing(4),
    width: 500,
  },
}));

const CardContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h4">Weather App</Typography>
    </Card>
  );
};

export default CardContainer;
```

- Add the rest of the elements as per design by customizing MUI components with **makeStyles** and **theme** configuration.

---

### Useful MUI components

- [Card](https://mui.com/material-ui/react-card/)
- [Typography](https://mui.com/material-ui/react-typography/)
- [Text field](https://mui.com/material-ui/react-text-field/)
- [Button](https://mui.com/material-ui/react-button/)