import React, { ReactNode } from "react";
import { View } from "react-native";
import SLayout from "./Layout.styles";

interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = ({ children }: props) => {
  return <View style={SLayout.view}>{children}</View>;
};

export default Layout;
