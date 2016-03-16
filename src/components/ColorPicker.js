import React from "react";
import ReactDOM from "react-dom";
import FineTune from "./FineTune";
import ColorSwatch from "./Swatch";
import cx from "classnames";
import {SwatchItem} from './Swatch';

//From material-ui
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';


const App = React.createClass({

  getInitialState() {
    return {
      colors : this.props.colors,
      selected : 0,
      showPicker: false,
      selectedColor: this.props.value,
    };
  },

  onClick: function() {
    this.setState({ showPicker: true });
  },
  handleClose: function(){
    this.setState({ showPicker: false });
  },
  render() {
    const selectedColor = this.state.colors[this.state.selected];
    const classes = cx("swatch-item");
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose}/>,
      <FlatButton
        label="Select"
        primary={true}
        onClick={this.handleColorSelected}/>,
    ];

    return (
      <div>
      <SwatchItem
        color={this.state.selectedColor}
        onClick={this.onClick}/>
        <Dialog contentStyle={{width:'300px'}} actions={actions} modal={true} open={this.state.showPicker}>
        <div>
        <FineTune
            color={this.state.colors[this.state.selected]}
            opacitySlider={true}
            onChange={this.handleColorChange}/>
        </div>
        <div>
          <ColorSwatch
            colors={this.state.colors}
            selected={this.state.selected}
            onSelect={this.handleColorSelect}/>
        </div>
        </Dialog>
      </div>
    );
  },

  handleColorSelect(selected) {
    this.setState({ selected });
  },

  handleColorSelected() {
    const selectedColor = this.state.colors[this.state.selected];
    this.setState({showPicker:false, showFineTune:false, selectedColor: selectedColor })
    this.props.onChange(this.state.colors[this.state.selected]);
  },

  handleFineTune() {
    this.setState({showFineTune:true})
  },

  handleColorChange(color) {
    const colors = [...this.state.colors];
    colors[this.state.selected] = color;
    this.setState({ colors });
  }

});

export default App;