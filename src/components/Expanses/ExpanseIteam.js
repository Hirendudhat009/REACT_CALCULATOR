import React, { useState } from 'react'
import './ExpanseIteam.css';
import ExpanceDate from './ExpanseDate';
import Card from '../UI/Card';


const ExpanseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpanceDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amaount}</div>
                </div>
            </Card >
        </li>
    );
}

export default ExpanseItem;