import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import telegramm from "../../../utils/image/telegramm.png"

export const Footer = () => {
	return (
		<LandingConatainer backgroundColor={"#1F1F1F"}>
			<div style={{width: 1440, padding: "20px 75px", display: "flex", justifyContent: "space-between"}}>
				<div>
					<a href={"https://t.me/alkir_ru"}>
						<img src={telegramm} style={{width: 22}} alt="Telegram icon" />
					</a>
				</div>
				<div style={{display: "flex", alignItems: "center"}}>
					<p style={{margin: 0}}>Русский</p>
					<p style={{margin: "0 0 0 87px"}}>&copy; {new Date().getFullYear()}</p>
				</div>
			</div>
		</LandingConatainer>
	)
}
