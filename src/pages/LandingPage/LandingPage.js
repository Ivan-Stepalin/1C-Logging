import React from "react"
import {LandingHeader} from "./components/LandingHeader"
import {AboutUs} from "./components/AboutUs"
import {Divider} from "antd"
import {Opportunities} from "./components/Opportunities"
import {BuyProgramm} from "./components/BuyProgramm"
import {PlusList} from "./components/PlusList"
import {DevelopmentPlan} from "./components/DevelopmentPlan"
import {BuyOptions} from "./components/BuyOptions"
import {LandingFooterLinks} from "./components/LandingFooterLinks"
import {Footer} from "./components/Footer"

export const LandingPage = () => {
	return (
		<>
			<LandingHeader />
			<main>
				<Divider style={{margin: 0}} />
				<AboutUs />
				<Opportunities />
				<BuyProgramm />
				<PlusList />
				<DevelopmentPlan />
				<BuyOptions />
				<Divider style={{margin: 0}} />
			</main>
			<footer>
				<LandingFooterLinks />
				<Footer />
			</footer>
		</>
	)
}
