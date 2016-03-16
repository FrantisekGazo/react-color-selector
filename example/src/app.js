require("./app.scss");

import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "../../src";
import colors from "./colors.json";

const App = React.createClass({

	handleChange: function(selectedColor) {
		console.log(selectedColor);
	},

  	render() {
	    return (
			<ColorPicker colors={colors} value= '#E74C3C' onChange={this.handleChange}/>
	    );
  	},
});

ReactDOM.render(<App />, document.querySelector("#app"));