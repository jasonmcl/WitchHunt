import React from 'react';
import {Input, Button} from 'antd';
import "./NameForm.css";

function NameForm(props) {
    return(
        <div className="NameForm">
            <Input placeholder="Nickname"/>
            <Button onClick={props.onClick} type="primary">Create a room</Button>
            <p>Or Enter A Room Code:</p>
            <Input placeholder="Room Code"/>
            <Button onClick={props.onClick} type="primary">Enter</Button>
        </div>
    );
}

export default NameForm