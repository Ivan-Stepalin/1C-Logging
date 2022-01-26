import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import Title from "antd/lib/typography/Title"
import {Button, List, Tabs} from "antd"
import "./BuyOptions.less"
import listTag from "../../../utils/image/list-tag.svg"
import ellipse from "../../../utils/image/ellipse-green-background.svg"
import {FeedbackForm} from "./defaultComp/FeedbackForm"
import {MailButton} from "./defaultComp/MailButton"

const {TabPane} = Tabs

export const BuyOptions = () => {
	return (
		<LandingConatainer id={"buyOptions"} backgroundColor={"#141414"}>
			<img src={ellipse} alt={"ellipse"} style={{position: "absolute", right: 0, top: -250, height: 509}} />
			<div style={{width: 1440, padding: "50px 75px 105px"}}>
				<Title level={2} style={{marginBottom: 42}}>
					Как купить?
				</Title>
				<div className="card-container">
					<Tabs type="card">
						<TabPane tab="Облачная версия" key="1" style={{fontSize: 18}}>
							<div style={{display: "flex"}}>
								<div>
									<div style={{marginBottom: 42}}>
										<p style={{fontSize: 64, fontWeight: 700, lineHeight: "100%"}}>20000</p>
										<p style={{fontSize: 30, fontWeight: 700}}>руб/месяц</p>
									</div>
									<div style={{marginBottom: 22}}>
										<p style={{fontSize: 36}}>Standart</p>
										<p style={{fontSize: 14, color: "#BFBFBF"}}>*за одну конфигурацию</p>
									</div>
									<List split={false} style={{marginBottom: 48}}>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 50 пользователей
										</List.Item>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 10 Гб данных
										</List.Item>
									</List>
									<FeedbackForm buttonStyle={{width: 127}} buttonText={"Купить"} />
								</div>
								<div style={{marginLeft: 279}}>
									<div style={{marginBottom: 42}}>
										<p style={{fontSize: 64, fontWeight: 700, lineHeight: "100%"}}>50000</p>
										<p style={{fontSize: 30, fontWeight: 700}}>руб/месяц</p>
									</div>
									<div style={{marginBottom: 22}}>
										<p style={{fontSize: 36}}>Pro</p>
										<p style={{fontSize: 14, color: "#BFBFBF"}}>*за одну конфигурацию</p>
									</div>
									<List split={false} style={{marginBottom: 48}}>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 100 пользователей
										</List.Item>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 50 Гб данных
										</List.Item>
									</List>

									<FeedbackForm buttonStyle={{width: 127}} buttonText={"Купить"} />
								</div>
							</div>
						</TabPane>
						<TabPane tab="Локальная установка " key="2" style={{fontSize: 18}}>
							<div style={{display: "flex"}}>
								<div style={{marginRight: 279}}>
									<div style={{marginBottom: 42}}>
										<p style={{fontSize: 64, fontWeight: 700, lineHeight: "100%"}}>25000</p>
										<p style={{fontSize: 30, fontWeight: 700}}>руб/месяц</p>
									</div>
									<div style={{marginBottom: 22}}>
										<p style={{fontSize: 36}}>Standart</p>
										<p style={{fontSize: 14, color: "#BFBFBF"}}>*за одну конфигурацию</p>
									</div>
									<List split={false} style={{marginBottom: 48}}>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 50 пользователей
										</List.Item>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 10 Гб данных
										</List.Item>
									</List>

									<FeedbackForm buttonStyle={{width: 127}} buttonText={"Купить"} />
								</div>
								<div>
									<div style={{marginBottom: 42}}>
										<p style={{fontSize: 64, fontWeight: 700, lineHeight: "100%"}}>60000</p>
										<p style={{fontSize: 30, fontWeight: 700}}>руб/месяц</p>
									</div>
									<div style={{marginBottom: 22}}>
										<p style={{fontSize: 36}}>Pro</p>
										<p style={{fontSize: 14, color: "#BFBFBF"}}>*за одну конфигурацию</p>
									</div>
									<List split={false} style={{marginBottom: 48}}>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 100 пользователей
										</List.Item>
										<List.Item style={{fontSize: 24, paddingTop: 0}}>
											<img src={listTag} style={{marginRight: 16}} alt="listTag" />
											до 50 Гб данных
										</List.Item>
									</List>

									<FeedbackForm buttonStyle={{width: 127}} buttonText={"Купить"} />
								</div>
							</div>
						</TabPane>
					</Tabs>
				</div>
				<p style={{fontSize: 16}}>
					По всем вопросам обращаться по адресу{" "}
					<MailButton email="mail@mail.ru" subject="общие вопросы" body="">
						<Button type={"link"} style={{fontSize: 16, padding: 0, height: "fit-content"}}>
							mail@mail.ru
						</Button>
					</MailButton>
				</p>
			</div>
		</LandingConatainer>
	)
}
