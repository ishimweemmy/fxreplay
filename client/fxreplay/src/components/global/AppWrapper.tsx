import { ReactNode, type FC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

const AppWrapper: FC<{ children: ReactNode }> = (props) => {
  return (
    <BrowserRouter>
      <Routes>{props.children}</Routes>
    </BrowserRouter>
  );
};

export default AppWrapper;
