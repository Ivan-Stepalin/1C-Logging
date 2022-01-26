import React from "react"
import {LandingConatainer} from "./LandingConatainer"
import "./BuyProgramm.less"

export const BuyProgramm = () => {
	return (
		<LandingConatainer id={"buy"} backgroundColor={"#7CB305"}>
			<div className={"buy-programm__container"}>
				<a href={"#buyOptions"} className={"buy-programm__link"}>
					Узнайте, сколько стоит приобрести программу
				</a>
			</div>
		</LandingConatainer>
	)
}
