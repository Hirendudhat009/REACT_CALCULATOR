import React, { useState } from 'react'
import './Expanses.css'
import Card from '../UI/Card'
import ExpansesChart from './ExpansesChart'
import ExpansesFilter from './ExpansesFilter'
import ExpansesList from './ExpansesList'

const Expanses = (props) => {

    const [defaultYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filterExpanses = props.expanses.filter(expanses => {
        return expanses.date.getFullYear().toString() === defaultYear
    })

    return (
        <div>
            <Card className="expanses">
                <ExpansesFilter
                    selected={defaultYear}
                    onFilter={filterChangeHandler}
                />
                <ExpansesChart expanses={filterExpanses} />
                <ExpansesList data={filterExpanses} />
            </Card>
        </div>
    )
}

export default Expanses;