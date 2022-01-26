import React from "react"
import Title from "antd/lib/typography/Title"
import {FeedbackForm} from "./defaultComp/FeedbackForm"

const pageLinkStyle = {
	color: "white",
	fontSize: 16,
	lineHeight: "20px",
	marginRight: 20
}

export const LandingHeader = () => {
	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				zIndex: 3,
				backgroundColor: "#141414",
				display: "flex",
				justifyContent: "center"
			}}>
			<div
				style={{
					height: 74,
					width: 1440,
					padding: "0 75px 0",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
				<Title level={3} style={{margin: 0, display: "inline", height: "fit-content"}}>
					Лэндинг
				</Title>
				<div>
					<a href={"#aboutUs"} style={pageLinkStyle}>
						О нас
					</a>
					<a href={"#opportunities"} style={pageLinkStyle}>
						Возможности
					</a>
					<a href={"#plusList"} style={pageLinkStyle}>
						Плюсы
					</a>
					<a href={"#developmentPlan"} style={pageLinkStyle}>
						План развития
					</a>
					<a href={"#buyOptions"} style={pageLinkStyle}>
						Покупка
					</a>
					<FeedbackForm buttonStyle={{width: 130}} buttonText={"Купить"} />
				</div>
			</div>
		</header>
	)
}
