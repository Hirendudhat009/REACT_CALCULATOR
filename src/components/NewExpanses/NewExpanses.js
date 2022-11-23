import React, { useState } from 'react'
import './NewExpanses.css'
import ExpansesForm from './ExpansesForm'


const NewExpanses = (props) => {

    const expanceHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        }
        props.onExpanseData(expanseData);
        afterSetScreen(false)
    }

    const [setScreen, afterSetScreen] = useState(false)

    const AddExpaseHandler = () => {
        afterSetScreen(true)
    }

    const cancelHandler = () => {
        afterSetScreen(false)
    }


    return (
        <div className="new-expense">
            {
                !setScreen ?
                    <button onClick={AddExpaseHandler}>Add New Expanse </button> :
                    <ExpansesForm onExpanceSaveData={expanceHandler} onCancel={cancelHandler} />
            }
        </div>
    )
}

export default NewExpanses;