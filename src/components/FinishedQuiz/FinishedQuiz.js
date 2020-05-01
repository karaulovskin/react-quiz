import React from "react"
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";

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
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button onClick={props.onRetry} type="success">Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz