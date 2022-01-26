import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import Title from "antd/lib/typography/Title"
import {List} from "antd"
import {MinusOutlined} from "@ant-design/icons"

const listItemStyle = {
	color: "#000000",
	fontSize: 18
}

export const DevelopmentPlan = () => {
	return (
		<LandingConatainer id={"developmentPlan"} backgroundColor={"#F5F5F5"}>
			<div style={{width: 1440, display: "flex", flexDirection: "column", padding: "60px 75px 70px"}}>
				<Title level={2} style={{color: "#7CB305"}}>
					План развития
				</Title>
				<List split={false}>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Осуществление мониторинга сопоставленных данных с учетом: аппаратной части, виртуализации, операционной системы,
						приложения.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Централизованное управление серверами 1С.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Статический анализ кода 1С.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Автоматическое тестирование и обновление конфигураций.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Аналитика по трендам.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Нагрузочное тестирование конфигураций.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Автоматизация создания тестовых контуров с автоматическим и ручным обновлением.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Интеграции с системами трекинга задач.
					</List.Item>
					<List.Item style={listItemStyle}>
						<MinusOutlined style={{color: "#7CB329", marginRight: 16}} />
						Интеграции с системами мониторинга и оповещений.
					</List.Item>
				</List>
			</div>
		</LandingConatainer>
	)
}
