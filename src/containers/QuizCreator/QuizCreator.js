import React, {Component} from 'react'
import classes from "./QuizCreator.module.css"
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/input/Input";
import {createControl} from "../../form/formFramework"
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

function createOptionControl(number) {
    return createControl(
        {
            label: `Вариант ${number}`,
            errorMessege: 'Значение не может быть пустым',
            id: number
        },
        {
            required: true
        })
}

function createFormControls() {
    return {
        question: createControl(
            {
                label: 'Введите вопрос',
                errorMessege: 'Вопрос не может быть пустым'
            },
            {
                required: true
            }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    creatQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        sholdValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr /> : null}
                </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}

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