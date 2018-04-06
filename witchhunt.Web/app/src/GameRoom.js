import React from 'react';
// eslint-disable-next-line
import {Row, Col, Button, Divider} from 'antd';
import {Link} from 'react-router-dom';
import './GameRoom.css';

class GameRoom extends React.Component {
    render() {
        return (
            <div className="GameRoom">
                <Row>
                    <Button className="float-left"><Link to="/">Back</Link></Button>
                    <p className="float-right"><strong>Room Code: </strong><br/>1234</p>
                </Row>
                <h3>Morning : Day 1</h3>
                <h4>Time Left: 10:00</h4>
                <Divider />
                <h2>Your Role</h2>
                <h3>Villager</h3>
                <Divider />
                <p><strong>Town Members</strong></p>
                <ul className="memberList">
                    <li>Kaela Lindgren</li>
                    <li>Luigi Schuster</li>
                    <li>Wallace Koepp</li>
                    <li>Lila Ferry</li>
                    <li>Haylee Davis</li>
                    <li>Timmy Larkin</li>
                </ul>
                <br/>
                <p><strong>Dead</strong></p>
                <ul className="memberList">
                    <li>Sophie Crist</li>
                    <li>Anthony Mitchell</li>
                </ul>
            </div>
        );
    }
}

export default GameRoom;