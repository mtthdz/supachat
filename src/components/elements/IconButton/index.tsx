import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import SIconButton from "./IconButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface props {
  onPress: (event: GestureResponderEvent) => void;
  icon: IconProp;
}

const IconButton = ({onPress, icon}: props) => {
  return (
    <TouchableOpacity style={SIconButton.view} onPress={onPress}>
        <FontAwesomeIcon style={SIconButton.icon} icon={icon} />
    </TouchableOpacity>
  )
}

export default IconButton;