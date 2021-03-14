import React from "react";
// types
import { Classes } from "jss";
// styles
import { sheet } from "./sheet";
import injectSheet from "react-jss";

type Props = {
  classes: Classes;
};

const Header: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.title}>Bon De Mon</h1>
        <h2 className={classes.subtitle}>handmade chocolate</h2>
        <p className={classes.description}>
          The most delicious chocolate in the World
        </p>
      </div>
    </div>
  );
};

export default injectSheet(sheet)(Header);
