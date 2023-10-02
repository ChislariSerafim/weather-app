import { Button, Card, TextField, Theme, Typography } from "@mui/material";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles<Theme>(() => ({
  card: {
    background: "linear-gradient(100deg, #47e7b9 -15%, #404366 105%);",
    borderRadius: 16,
    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.25)",
    width: 500,
    display: "flex",
    padding: "32px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: "40px",
    height: "40px",
    padding: "10px, 16px, 10px, 16px",
    borderRadius: "4px",
  },
  input: {
    padding: "16px 24px",
    width: "100%",
    borderRadius: "50px",
    border: "1px solid primary, rgba(255, 255, 255, 0.23))",
    color: "primary",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
}));

const CardContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.title}>
        <Typography color={"primary"} variant="h3">
          Weather App
        </Typography>
        <Button>
          <WbIncandescentOutlinedIcon
            className={classes.icon}
            color="primary"
          />
        </Button>
      </div>
      <TextField className={classes.input} placeholder={"Search city"} />
      <Button variant="outlined">Get weather</Button>
    </Card>
  );
};

export default CardContainer;
