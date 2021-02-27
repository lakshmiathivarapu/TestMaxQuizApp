import React from 'react';
import './App.css';
import logo from './testmaxpng.png';
import Question from '../question/QuestionAnswer'
import Button from '@material-ui/core/Button';
import { escapeHTML, getQuestions} from '../../utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { start: false, category_select:false, category:null, questions_total:[], questions: [], load: false, current: 0, score: 0 };
    this.beginQuiz = this.beginQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  // http://lsatmaxadmin.us/interview/loadData.php
  
  loadApp() {
    fetch('http://lsatmaxadmin.us/interview/loadData.php')
      .then(response => {
        if (response.ok) {
          //console.log(response.json)
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message))
      .then(jsonResponse => {
        //console.log(jsonResponse)
        const questions_total = jsonResponse.map(q => {
            q.question = escapeHTML(q.question_text);
            var correct_answer_index = q.answers.findIndex(obj => obj.id === q.correct_answer_id);      
            //console.log(correct_answer_index)
            q.correct_answer = q.answers[correct_answer_index].answer_text
            //console.log(q.correct_answer)
            //console.log(q)
            return q;
        });
        this.setState({questions_total:questions_total});
        this.setState({load:true});
      })
  }

  restartQuiz() {
    this.setState({ start: false, category_select:false, category:null, questions_total:[], questions: [], load: false, current: 0, score: 0 });
    this.loadApp();
  }

  beginQuiz() {
    console.log("hello")
    const questions = getQuestions(this.state.questions_total,this.state.category)
    //const questions = this.state.questions_total
    console.log(questions)
    this.setState({questions:questions})
    this.setState({ start: true })
  }

  selectCategory(){
    this.setState({category_select:true })
  }
  

  nextQuestion() {
    this.setState(prevState => ({ current: prevState.current + 1 }));
  }

  checkAnswer(answer) {
    const { questions, current } = this.state;
    const question = questions[current];
    if (answer === question.correct_answer) {
      this.setState(prevState => ({ score: prevState.score + 1 }));
      return true;
    }
    return false;
  }

  printScore = () => {
    const isfinished = this.state.questions.length === this.state.current;

    return (<div>
      {isfinished && <span>Final </span>} Scores: {this.state.score} / {this.state.questions.length}
      <br />
      {isfinished && <Button variant="contained" color="primary" className="Quiz-button" onClick={this.restartQuiz}>Restart Quiz</Button>}
    </div>);
  };

  renderQuestion() {
    const { questions, current } = this.state;
    console.log(questions)
    if (current < questions.length) {
      const question = questions[current];
      return <Question question={question} index={current} nextQuestion={this.nextQuestion} checkAnswer={this.checkAnswer} printScore={this.printScore} />;
    } else {
      return this.printScore();
    }
  }

  getQuiz() {
    return !this.state.start ?
      (<div>
        <Button variant="contained" color="primary" onClick={() => this.beginQuiz()} className="Quiz-button" disabled={!this.state.load}>
          {this.state.load ? 'Start' : 'Loading...'}
        </Button>
        <h1> {this.state.questions}</h1>
        </div>
      )
      :
      (<div>
        {this.renderQuestion()}
      </div>);
  }

  
  getCategory() {
    return !this.state.category_select ?
    (
      // onClick={() => {this.selectCategory(); this.setState({category:"Argument Structure Questions"});}}
      <div class="text-center">
      <h4 class="titleCategory"> Choose your category of questions </h4>
      <Button variant="contained" color="primary" onClick={() => {this.selectCategory(); this.setState({category:"Main Point Questions"});}} className="Main-Point-Questions-button" >
      Main Point
      </Button>
      <div class="divider"> </div>
      <Button variant="contained" color="primary" onClick={() => {this.selectCategory(); this.setState({category:"Argument Structure Questions"});}} className="Argument-Structure-Questions-button">
     Argument Structure
      </Button>
      <div class="divider"> </div>
      <Button variant="contained" color="primary" onClick={() => {this.selectCategory(); this.setState({category:"All"});}} className="All-Questions-button">
     All 
      </Button>
    </div>
    )
    :
    (<div>
      {this.getQuiz()}
    </div>);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2 class="title"> LSAT Multiple Choice Questions</h2>
          {this.getCategory()}
        </header >
      </div >
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((nextState.current === 0 && nextState.score === 0) || nextState.current > this.state.current) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.loadApp();
  }

}

export default App;