import React from "react";
import {Switch as RouterSwitch} from "react-router";

function Switch(props) {
	return (
		<RouterSwitch>
			{props.children}
		</RouterSwitch>
	);
}

export default Switch;