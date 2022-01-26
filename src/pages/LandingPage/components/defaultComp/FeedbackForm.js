import React, {useEffect, useState} from "react"
import {Button, Form, Input, Modal, Popconfirm, Space, Typography} from "antd"
import Title from "antd/lib/typography/Title"
import "./FeedbackForm.less"
import * as AntdIcons from "@ant-design/icons"
import ServicesFeedbackForm from "./api/ServicesFeedbackForm"
import {useForm} from "antd/es/form/Form"

/**
 * Initial values for notification dialog
 * @type {{visible: boolean, icon: {color: string, name: string}, description: string, title: string}}
 */
const notificationStatusInitialSate = {
	visible: false,
	title: "",
	description: "",
	icon: {
		name: "",
		color: ""
	}
}

const formInitialState = {
	name: "",
	email: "",
	message: "",
	mobile_phone: ""
}

/**
 * Function renders the feedback dialog
 * @param buttonStyle
 * @returns {JSX.Element}
 * @constructor
 */
export const FeedbackForm = ({buttonStyle, buttonText}) => {
	const [isFormDialogOpen, setFormDialogOpen] = useState(false)
	const [isSubmittedForm, setIsSubmittedForm] = useState(false)
	const [alertStatus, setAlertStatus] = useState({visible: false, params: ""})
	const [notificationStatus, setNotificationStatus] = useState(notificationStatusInitialSate)
	const [notificationAutoClose, setNotificationAutoClose] = useState(true)
	const [formValues, setFormValues] = useState(formInitialState)
	const [formRef] = Form.useForm()

	useEffect(() => {
		if (notificationStatus.visible) {
			setIsSubmittedForm(false)
			setFormDialogOpen(false)
			setAlertStatus({visible: false, params: ""})

			if (notificationAutoClose) {
				setTimeout(() => setNotificationStatus(notificationStatusInitialSate), 4000)
			}
		}
	}, [notificationStatus])

	/**
	 * Function close feedback form and clear inputs
	 * @param params
	 */
	const handleCloseForm = async () => {
		setFormValues(formInitialState)
		formRef.current.resetFields()
		let promise = new Promise((resolve, reject) => resolve())
		promise.then(() => cancelForm()).then(() => setFormDialogOpen(false))
		setIsSubmittedForm(false)
	}

	/**
	 * Function posts the feedback inputs
	 * @param params
	 */
	const postFeedback = (params) => {
		let notificationStatusInfo
		let empty_values =
			Object.values(params).length === Object.values(formInitialState).length &&
			Object.values(params).every((element, index) => {
				return element === Object.values(formInitialState)[index]
			})

		//If all values are empty do not send to server, only show the notification
		if (empty_values) {
			notificationStatusInfo = {
				visible: true,
				title: "Ваша форма успешна отправлена",
				description: "Ваше сообщение отправлено.",
				icon: {
					name: "CheckCircleOutlined",
					color: "#7CB305"
				}
			}
			setNotificationStatus(notificationStatusInfo)
		} else {
			ServicesFeedbackForm.postFeedback(params)
				.then((result) => {
					let response = result.data

					if (response.usermessage.auto_close === "true") {
						setNotificationAutoClose(true)
					} else {
						setNotificationAutoClose(false)
					}

					if (response.usermessage.level === "success") {
						notificationStatusInfo = {
							visible: true,
							title: response.usermessage.title,
							description: response.usermessage.message,
							icon: {
								name: "CheckCircleOutlined",
								color: "#7CB305"
							}
						}
					} else {
						notificationStatusInfo = {
							visible: true,
							title: response.usermessage.title,
							description: response.usermessage.message,
							icon: {
								name: "CloseCircleOutlined",
								color: "#EF5A61"
							}
						}
					}
					setNotificationStatus(notificationStatusInfo)
				})
				.catch(() => {
					notificationStatusInfo = {
						visible: true,
						title: "Ошибка",
						description: "Технические неполадки сервиса. Попробуйте еще раз.\nПриносим свои извинения!",
						icon: {
							name: "CloseCircleOutlined",
							color: "#EF5A61"
						}
					}
					setNotificationStatus(notificationStatusInfo)
				})
		}
	}

	/**
	 * Function renders the form title
	 * @returns {JSX.Element}
	 */
	const formTitle = () => {
		return (
			<Space direction={"vertical"}>
				<Title level={1} style={{margin: 0, height: "fit-content", marginBottom: 12}}>
					Заполните форму
				</Title>
				<p style={{fontSize: 14, fontWeight: 400}}>
					Заполните форму, чтобы приобрести Программу, мы с вами свяжемся в ближайшее время.
				</p>
			</Space>
		)
	}

	/**
	 * Function called on send
	 * @param value
	 */

	const onFinish = (value) => {
		//Check if we have empty fields, open alert dialog if present. Otherwise send the request
		if (!value.email || !value.mobile_phone) {
			let errorParams = []
			for (let i = 0; i < Object.values(value).length; i++) {
				if (i === 0 && Object.values(value)[i].length === 0) {
					errorParams.push("ФИО")
				} else if (i === 1 && Object.values(value)[i].length === 0) {
					errorParams.push("E-mail")
				} else if (i === 2 && Object.values(value)[i].length === 0) {
					errorParams.push("Телефон")
				} else if (i === 3 && Object.values(value)[i].length === 0) {
					errorParams.push("Сообщение")
				}
			}
			setAlertStatus({visible: true, params: errorParams.join(", ")})
		} else {
			postFeedback(value)
		}
	}

	const checkNumber = (_, value) => {
		if (!/^\d+$/.test(value) && value.length > 0) {
			return Promise.reject(new Error("Номер должен только из цифр"))
		}
		if (/^\d+$/.test(value) || value.length === 0) {
			return Promise.resolve()
		}
	}

	const DynamicIcon = ({icon_title, color}) => {
		const Icon = AntdIcons[icon_title]
		return <Icon style={{fontSize: 40, color: color}} />
	}

	/**
	 * Function sends the form values after the alert dialog confirmation
	 */
	const sendForm = () => {
		setAlertStatus({visible: false, params: ""})
		postFeedback(formValues)
	}

	/**
	 * Function closes the alert dialog
	 */
	const cancelForm = async () => {
		setAlertStatus({visible: false, params: ""})
	}

	return (
		<>
			<Button type={"primary"} shape="round" size={"large"} onClick={() => setFormDialogOpen(true)} style={buttonStyle}>
				{buttonText}
			</Button>
			<Modal
				className={"modalStyle"}
				footer={null}
				centered
				title={formTitle()}
				width={600}
				visible={isFormDialogOpen}
				onCancel={handleCloseForm}>
				<Form
					ref={formRef}
					name="feedback_form"
					onFinish={onFinish}
					autoComplete="off"
					initialValues={formInitialState}
					onValuesChange={(changedValues, allValues) => {
						setFormValues(allValues)
					}}>
					<Form.Item name="name" rules={[{message: "Введите ФИО"}]}>
						<Input size={"large"} placeholder="ФИО" />
					</Form.Item>

					<Form.Item
						shouldUpdate
						name="email"
						rules={[{type: "email", message: "Введите корректный email"}]}
						validateTrigger={isSubmittedForm ? "onChange" : "onSubmit"}>
						<Input size={"large"} placeholder="E-mail" />
					</Form.Item>

					<Form.Item
						shouldUpdate
						rules={[
							{
								validator: checkNumber
							}
						]}
						validateTrigger={isSubmittedForm ? "onChange" : "onSubmit"}
						name="mobile_phone">
						<Input size={"large"} prefix={"+7"} />
					</Form.Item>
					<Form.Item name="message" rules={[{message: "Введите текст"}]}>
						<Input.TextArea autoSize={{minRows: 4}} placeholder="Напишите сообщение" />
					</Form.Item>

					{alertStatus.visible ? (
						<Popconfirm
							title={
								<p style={{fontSize: 14, fontWeight: 400, marginLeft: 13, marginBottom: 0}}>
									Вы не заполнили поля <span style={{fontWeight: 600}}>{alertStatus.params}</span>
									<br />
									Вы уверены что хотите отправить форму?
								</p>
							}
							placement="right"
							visible={alertStatus.visible}
							onConfirm={sendForm}
							onCancel={cancelForm}
							okText="Да"
							cancelText="Отменить"
						/>
					) : null}

					<Form.Item style={{margin: 0}}>
						<Button
							size={"large"}
							type="primary"
							htmlType="submit"
							shape="round"
							style={{padding: "0 40px 0"}}
							onClick={() => {
								isSubmittedForm ? null : setIsSubmittedForm(true)
							}}>
							Отправить
						</Button>
						<Button
							htmlType="button"
							style={{padding: "0 40px 0", marginLeft: 20}}
							onClick={() => setFormDialogOpen(false)}
							shape="round"
							size={"large"}>
							Отменить
						</Button>
					</Form.Item>
				</Form>
			</Modal>
			<Modal
				className={"notificationStyle"}
				footer={null}
				centered
				width={600}
				visible={notificationStatus.visible}
				onCancel={() => setNotificationStatus(notificationStatusInitialSate)}>
				<div style={{display: "flex"}}>
					<DynamicIcon icon_title={notificationStatus.icon.name} color={notificationStatus.icon.color} />
					<div style={{display: "flex", flexDirection: "column", marginLeft: 12}}>
						<Typography.Title level={2} style={{margin: "0 0 12px 0"}}>
							{notificationStatus.title}
						</Typography.Title>
						<p style={{fontSize: 14, fontWeight: 400, margin: 0}}>{notificationStatus.description}</p>
					</div>
				</div>
			</Modal>
		</>
	)
}
