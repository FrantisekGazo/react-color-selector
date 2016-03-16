# react-color-selector

To be used with material-ui, made for DHIS-2 

### See Example
1. Clone this repo.
2. npm install
3. npm start


### Props
1. colors : Array of colors
2. value : value of default state
3. onChange : onChange listener function



### Example

```
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

```