import React from 'react';
import {Input, Button} from 'antd';

function NameForm(props) {
    return(
        <div>
            <Input placeholder="Nickname"/>
            <br/>
            <Input placeholder="Room Code"/>
            <br/>
            <Button type="primary">Enter</Button>
        </div>
    );
}

export default NameForm