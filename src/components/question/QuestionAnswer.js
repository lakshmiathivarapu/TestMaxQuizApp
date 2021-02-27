import React, { Component } from 'react';
import './QuestionAnswer.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Answer = props => {

    function answerClick(e) {
        if (typeof props.clicked !== 'string') {
            props.clicked(e.target.innerText);
        }
    }

    return (
        <li onClick={answerClick} className={props.className}>{props.answer}</li>
    )
}

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = { answered: false, isCorrect: false, answer: '' };
        this.answerClick = this.answerClick.bind(this);
    }

    answerClick(answer) {
        if (!this.state.answered) {
            let isCorrect = this.props.checkAnswer(answer);
            this.setState({ answered: true, isCorrect, answer });
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ answered: false, isCorrect: false, answer: '' });
    }

    render() {

        return (<div>
            {this.props.printScore()}
            <Card class='card'>
            <p>{this.props.index+1}) {this.props.question.question}</p>
            <ul className={!this.state.answered ? 'answers unanswered' : 'answers'}>
                {this.props.question.answers.map((a, i) => <Answer key={i}
                    answer={a.answer_text}
                    clicked={!this.state.answered ? this.answerClick : ''}
                    className={
                        this.state.answered ? 
                            this.state.answer === a.answer_text ? 
                                this.state.isCorrect ? 'correct disabled' : 'incorrect disabled' 
                            : this.props.question.correct_answer === a.answer_text ? 'correct-dim disabled' : 'disabled' 
                        : ''}
                />)}
            </ul>
            </Card>
            <br />
            {this.state.answered ? <Button color="primary" variant="contained" className="Quiz-button" onClick={this.props.nextQuestion}>Next Question</Button> : <br />}

        </div>);
    }
}

export default Question;