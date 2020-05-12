import React, {Component} from 'react'
import classes from "./QuizCreator.module.css"
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends Component {

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    creatQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание тестов</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <select name="" id=""></select>

                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.creatQuizHandler}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}