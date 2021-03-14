import { Styles } from "react-jss";
import flower from "../../assets/image/flower.png";
import { gsap } from "gsap";

export const sheet: Styles = {
  wrapper: {
    height: "100vh",
    background: `#123b4d`,
    color: "#f8ded0",
    position: "relative",
    transition: "0.2s",

    "&:before": {
      content: "''",
      background: `url(${flower}) no-repeat center bottom`,
      backgroundSize: "contain",
      opacity: "0.3",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 70,
    "@media (max-width: 600px)": {
      fontSize: 56,
    },
  },
  subtitle: {
    textTransform: "uppercase",
    fontSize: 36,
    padding: "50px 0",
    position: "relative",
    margin: "50px 0",

    "&:before, &:after": {
      content: "''",
      width: 100,
      height: 5,
      background: "#f8ded0",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&:before": { top: 0 },
    "&:after": { bottom: 0 },
    "@media (max-width: 600px)": {
      fontSize: 30,
      padding: "40px 0",
      margin: "40px 0",
    },
  },
  description: {
    textTransform: "lowercase",
    fontSize: 22,
    "@media (max-width: 600px)": {
      fontSize: 18,
    },
  },
};
