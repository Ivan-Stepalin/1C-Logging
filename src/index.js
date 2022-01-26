import ReactDOM from "react-dom"
import React from "react"
import {App} from "./App"
import "./index.css"
import "antd/lib/style/color/colorPalette.less"
import "antd/dist/antd.less"
// import "antd/lib/style/themes/dark.less"
import "./public/css/dark-theme.css"

/**
 * Function main parent of the project
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () => {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}
ReactDOM.render(<Root />, document.getElementById("root"))
