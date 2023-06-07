import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Menu, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		{" "}
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Capybara

Company
				</Text>
				<Menu
					display="flex"
					justify-content="flex-end"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
					width="50% content-box"
				/>
				<Button>
					Log in
				</Button>
				<Button>
					Register
				</Button>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-4">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="65%"
				justify-content="center"
				align-items="flex-start"
				margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				display="flex"
				lg-width="100%"
				padding="16px 16px 16px 16px"
				sm-margin="0px 0px 30px 0px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/647eea65098f070019962fdf/images/IVNiSaf.jpeg?v=2023-06-07T01:08:27.992Z) 0% 0% /100% repeat scroll padding-box"
			>
				<Box
					width="100%"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					padding="0px 0px 125% 0px"
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					hover-transform="translateY(-10px)"
				>
					<Image
						bottom={0}
						min-height="100%"
						top={0}
						left={0}
						position="absolute"
						display="block"
						width="100%"
						right={0}
						src="https://imgur.com/t/capybara/J1RtuB4"
						object-fit="cover"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				align-items="flex-start"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
				lg-order="1"
				width="35%"
				flex-direction="column"
				lg-align-items="center"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
			>
				<Box
					overflow-x="hidden"
					padding="0px 0px 65% 0px"
					width="100%"
					height="auto"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/647eea65098f070019962fdf/images/image_2023-06-07_091006697.png?v=2023-06-07T01:10:09.727Z) 0% 0% /auto repeat scroll padding-box"
				>
					<Image
						left={0}
						right={0}
						bottom="0px"
						object-fit="cover"
						position="absolute"
						display="block"
						width="100%"
						top="auto"
						min-height="100%"
						src="https://images.unsplash.com/photo-1604890532411-cb935dc9133c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/647eea65098f070019962fdf/images/image_2023-06-07_091006697.png?v=2023-06-07T01:10:09.727Z) 0% 0% /auto repeat scroll padding-box"
					/>
				</Box>
				<Text
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					margin="24px 0px 48px 0px"
					md-text-align="left"
				>
					Capybara
				</Text>
				<Box
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					width="100%"
					padding="0px 0px 65% 0px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/647eea65098f070019962fdf/images/image_2023-06-07_090927905.png?v=2023-06-07T01:09:34.966Z) 0% 0% /100% repeat scroll padding-box"
				>
					<Image
						display="block"
						width="100%"
						top="auto"
						bottom="0px"
						min-height="100%"
						src="https://uploads.quarkly.io/647eea65098f070019962fdf/images/image_2023-06-07_090927905.png?v=2023-06-07T01:09:34.966Z"
						object-fit="cover"
						position="absolute"
						left={0}
						right={0}
					/>
				</Box>
				<Text
					margin="24px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					md-text-align="left"
				>
					Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara


Capybara
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"647eea65098f070019962fdd"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});