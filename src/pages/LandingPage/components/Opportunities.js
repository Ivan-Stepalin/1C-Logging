import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import {Col, Image, Row, Typography} from "antd"
import opportunityImageTwo from "../../../utils/image/opoortunities-image-2.svg"
import opportunityImageThree from "../../../utils/image/opoortunities-image-3.svg"
import opportunityImageFour from "../../../utils/image/opoortunities-image-4.svg"
import opportunityImageFive from "../../../utils/image/opoortunities-image-5.svg"
import opportunityImageSix from "../../../utils/image/opoortunities-image-6.svg"
import opportunityImageSeven from "../../../utils/image/opoortunities-image-7.svg"
import opportunityImageEight from "../../../utils/image/opoortunities-image-8.svg"
import opportunityImageNine from "../../../utils/image/opoortunities-image-9.svg"
import opportunityImageTen from "../../../utils/image/opoortunities-image-10.svg"
import Title from "antd/lib/typography/Title"
import {isMobile} from "react-device-detect"

const {Text} = Typography

const cardTitleStyle = {
	color: "#1F1F1F",
	marginTop: 12
}

const descritionStyle = {
	color: "#1F1F1F",
	fontSize: 18
}

export const Opportunities = () => {
	const columnWidth = isMobile ? 24 : 8
	return (
		<LandingConatainer id={"opportunities"} backgroundColor={"#F5F5F5"}>
			<div style={{width: 1440, padding: "52px 75px 75px", display: "flex", flexDirection: "column"}}>
				<Title level={2} style={{color: "#1F1F1F", marginBottom: 50}}>
					Возможности и принцип работы
				</Title>
				<Row gutter={[16, 16]}>
					<Col span={columnWidth}>
						<Image
							width={"100%"}
							height={215}
							alt={"Управление сервером приложений 1С из интерфейса программы"}
							src={opportunityImageTwo}
						/>
						<Title level={4} style={cardTitleStyle}>
							Управление сервером приложений 1С из интерфейса программы
						</Title>
						<Text style={descritionStyle}>
							Реализовано управление сервером приложений 1С из интерфейса программы, позволяющее:
							<br /> - Блокировать работу пользователей;
							<br /> - Завершать сеансы и соединения;
							<br /> - Блокировать регламентные и фоновые задания.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Запросы CALL и SDBL"} src={opportunityImageThree} />
						<Title level={4} style={cardTitleStyle}>
							Запросы CALL и SDBL
						</Title>
						<Text style={descritionStyle}>
							Каждая запись детализирована в контексте элементов конфигурации, а также объектов инфраструктуры:
							<br /> - Запись на диск;
							<br /> - Чтение с диска;
							<br /> - Время использования процессора;
							<br /> - Распределение времени выполнения;
							<br /> - Пиковое потребление памяти;
							<br /> - Список пользователей, запускавших запрос.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Вывод ошибок системы"} src={opportunityImageFour} />
						<Title level={4} style={cardTitleStyle}>
							Данные БД в виде таблиц и индексов
						</Title>
						<Text style={descritionStyle}>
							Представлены данные БД в виде таблиц и индексов с развернутой аналитикой и статистикой по периоду. Отдельно
							создан вывод недостающих индексов, который содержит команду для его создания.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Журнал регистрации"} src={opportunityImageFive} />
						<Title level={4} style={cardTitleStyle}>
							Журнал регистрации
						</Title>
						<Text style={descritionStyle}>
							Реализован полноценный журнал регистрации, функциональные возможности не уступают типовому механизму журнала
							внутри платформы, но при этом его использование в интерфейсе Алькир обеспечивает кратное увеличение скорости
							работы с данными журнала регистрации, при этом не влияет на производительность и быстродействие работы самой
							конфигурации.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image
							width={"100%"}
							height={215}
							alt={"Вывод информации \n" + "по блокировкам конфигурации"}
							src={opportunityImageSix}
						/>
						<Title level={4} style={cardTitleStyle}>
							Вывод информации по блокировкам конфигурации
						</Title>
						<Text style={descritionStyle}>
							Реализован вывод информации по блокировкам конфигурации в разрезе «виновник-пострадавший», а также области
							блокировки и контекста.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Вывод ошибок системы"} src={opportunityImageSeven} />
						<Title level={4} style={cardTitleStyle}>
							Вывод ошибок системы
						</Title>
						<Text style={descritionStyle}>
							Вывод ошибок системы привязан к:
							<br />
							- затронутым пользователям системы;
							<br />
							- объектам конфигурации;
							<br />- координатам фрагментов проблемного кода.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Анализ времени ключевых операций"} src={opportunityImageEight} />
						<Title level={4} style={cardTitleStyle}>
							Анализ времени ключевых операций
						</Title>
						<Text style={descritionStyle}>
							Интеграция с механизмом замеров производительности APDEX, позволяет проанализировать время выполнения ключевых
							операций, требующих оптимизации.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Графики"} src={opportunityImageNine} />
						<Title level={4} style={cardTitleStyle}>
							Графики
						</Title>
						<Text style={descritionStyle}>
							В виде графиков реализованы основные показатели, содержащие сводные данные на момент времени, с возможностью их
							сравнения в моменты пика и спада.
						</Text>
					</Col>
					<Col span={columnWidth}>
						<Image width={"100%"} height={215} alt={"Поиск"} src={opportunityImageTen} />
						<Title level={4} style={cardTitleStyle}>
							Поиск
						</Title>
						<Text style={descritionStyle}>
							Реализован механизм гибкого поиска ошибок и данных в журнале регистрации, что позволяет существенно сократить
							время и облегчить задачу поиска нужной информации.
						</Text>
					</Col>
				</Row>
			</div>
		</LandingConatainer>
	)
}
