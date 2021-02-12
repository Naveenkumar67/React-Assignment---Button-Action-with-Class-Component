import React from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
		super(props);
		this.show = this.show.bind(this);
		this.state={
			showMessage:false,
		};
	};

	show(){
		this.setState({showMessage:true,});
	}
   
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.show}>clickToRender</button>
				{this.state.showMessage && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    		</div>
    	);
    }
}
export default App;
