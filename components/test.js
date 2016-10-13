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
        message.success(config.serverAddress,10);
    }
    render() {
        return (
            <Button onClick={this.handleClick}>
            Test
            </Button>
        );
    }
}

export default Test;