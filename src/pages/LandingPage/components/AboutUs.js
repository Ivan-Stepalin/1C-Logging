import React from "react"
import Title from "antd/lib/typography/Title"
import {Col, Row, Space} from "antd"
import demoOne from "../../../utils/image/demo.png"
import demoTwo from "../../../utils/image/demo-2.png"
import {LandingConatainer} from "./LandingConatainer"
import {isMobile} from "react-device-detect"
import {FeedbackForm} from "./defaultComp/FeedbackForm"

export const AboutUs = () => {
	return (
		<LandingConatainer id={"aboutUs"} backgroundColor={"#1F1F1F"}>
			<div
				style={{
					display: "flex",
					padding: "0 75px 0",
					width: 1440,
					background: " radial-gradient(800px 400px at 872px 400px, rgb(124, 179, 5) -6%, rgb(31, 31, 31) 45%)"
				}}>
				<Row gutter={[24, 24]} style={{width: 500, marginTop: 122}}>
					<Col span={24} style={{display: "flex", alignItems: "center"}}>
						<Title level={1} style={{margin: "0", height: "fit-content", fontSize: 64, display: "inline-block"}}>
							Лэндинг
						</Title>
					</Col>
					<Col span={24} style={{fontSize: 36, margin: 0}}>
						<Title level={2} style={{fontSize: 36, margin: 0}}>
							Современный аудит для 1С
						</Title>
					</Col>
					<Col span={24}>
						<p style={{fontSize: 16}}>
							Лэндинг – программный продукт, целью которого является комплексное решение проблем с производительностью
							конфигураций на платформе 1С. Данный продукт обеспечивает возможность оперативного доступа к информации,
							объединив ее в одном источнике, тем самым повышая ценность, а также удобство ее последующей обработки.
							Современный и практичный интерфейс гарантирует простоту использование всех функциональных возможностей.
						</p>
					</Col>
					<Col span={24} style={{marginBottom: 210, display: "flex"}}>
						<FeedbackForm
							buttonStyle={{backgroundColor: "white", color: "#141414", borderColor: "white", width: 127}}
							buttonText={"Купить"}
						/>
						<Space direction={"vertical"} style={{marginLeft: 40}}>
							<FeedbackForm buttonStyle={{backgroundColor: "#141414", borderColor: "#434343"}} buttonText={"Попробовать"} />
							<span style={{color: "#BFBFBF", fontSize: 14}}>*Бесплатная версия на 30 дней</span>
						</Space>
					</Col>
				</Row>
				{isMobile ? null : (
					<div style={{width: "calc(100% - 500px + 25px)", position: "relative"}}>
						<img
							src={demoOne}
							alt={"demoOne"}
							style={{position: "absolute", right: 110, top: 110, zIndex: 2, height: 313}}
						/>
						<img
							src={demoTwo}
							alt={"demoTwo"}
							style={{position: "absolute", right: 25, top: 363, zIndex: 1, height: 260}}
						/>
					</div>
				)}
			</div>
		</LandingConatainer>
	)
}
