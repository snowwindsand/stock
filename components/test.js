import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {message,Button} from 'antd';
import config from '../configs/config.json';

class Test extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        // message.success(config.serverAddress,10);
        const { onMessage } = this.props;
        // const currentTime = +new Date;
        const num = Math.round(Math.random() * 50);
        onMessage(num);
    }
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.messageInfo > 25){
            this.refs.destInput.value = 'large then 25';
        }else{
            this.refs.destInput.value = 'less then 25';
        }
    }
    
    render() {
        const { messageInfo } = this.props;
        return (
            <div>
            <Button onClick={this.handleClick}>
            Test
            </Button>
            <input ref="inputTest" value={messageInfo}></input>
            <input ref="destInput" placeholder="test"></input>
            </div>
        );
    }
}

export default Test;