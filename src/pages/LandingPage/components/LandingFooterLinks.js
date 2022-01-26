import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import {Col, Row} from "antd"

const buttonPageLinkStyle = {
	color: "white",
	fontSize: 16,
	lineHeight: "20px"
}

export const LandingFooterLinks = () => {
	return (
		<LandingConatainer backgroundColor={"#141414"}>
			<div style={{width: 1440, padding: "38px 75px 50px", display: "flex"}}>
				<Row gutter={[16, 16]} >
					<Col span={8}>
						<a href={"#aboutUs"} style={buttonPageLinkStyle}>
							О нас
						</a>
					</Col>
					<Col span={8}>
						<a href={"#developmentPlan"} style={buttonPageLinkStyle}>
							План развития
						</a>
					</Col>
					<Col span={8}>
						<a href={"#buyOptions"} style={buttonPageLinkStyle}>
							Покупка
						</a>
					</Col>
					<Col span={8}>
						<a href={"#opportunities"} style={buttonPageLinkStyle}>
							Возможности
						</a>
					</Col>
					<Col span={8}>
						<a href={"#plusList"} style={buttonPageLinkStyle}>
							Плюсы
						</a>
					</Col>
					<Col span={8}>
						<a href={"#usingConditions"} style={buttonPageLinkStyle}>
							Условия пользования
						</a>
					</Col>
				</Row>
			</div>
		</LandingConatainer>
	)
}
