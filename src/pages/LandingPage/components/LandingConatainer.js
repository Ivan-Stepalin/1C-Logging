import React from "react"

export const LandingConatainer = ({children, backgroundColor, id}) => {
	return (
		<section
			id={id}
			style={{
				display: "flex",
				justifyContent: "center",
				position: "relative",
				backgroundColor: `${backgroundColor}`
			}}>
			{children}
		</section>
	)
}
