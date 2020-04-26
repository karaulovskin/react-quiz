import React from "react"
import classes from './FinishedQuiz.module.css'

const FinishedQuiz= props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return(
        <div className={classes.FinishedQuize}>
            <ul>
                { props.quiz.map((quesItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quesItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quesItem.id]]
                    ]
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quesItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }) }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz