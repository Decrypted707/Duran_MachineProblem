import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box, Section } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "--lead",
			"children": "Capybara\n\nCompany"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"position": "relative",
			"left": "350px"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Button {...override("button")}>
				Log in
			</Button>
			<Button {...override("button1")}>
				Register
			</Button>
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;