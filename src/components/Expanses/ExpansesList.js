import './ExpansesList.css'
import ExpanseItem from './ExpanseIteam'

const ExpansesList = (props) => {

    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No Expanses Found.</h2>
    }
    return <ul className="expenses-list">
        {
            props.data.map(data =>
                <ExpanseItem
                    key={data.id}
                    title={data.title}
                    date={data.date}
                    amaount={data.amount}
                />)
        }
    </ul>
}

export default ExpansesList;