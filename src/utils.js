const parser = new DOMParser();

export const escapeHTML = str => {
    //console.log(parser.parseFromString(str, 'text/html').body.textContent);
    return parser.parseFromString(str, 'text/html').body.textContent;
}

function shuffle(array) {
  var currentIndex = array.length, temp, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

export const getQuestions = (questions,category) => {
  // const question_set = new Set()
  var selected_questions = [];
  var i=0;

  while(i<questions.length){
    console.log(questions[i].category)
    if(questions[i].category === category){
      selected_questions.push(questions[i])
    }
    i=i+1
  }
  console.log(selected_questions)

  if(category === 'All'){
    selected_questions = questions
  }
  /*
 
  while(question_set.size<selected_questions.length)
  {
    var random_num = getRandom(selected_questions.length)
    question_set.add(selected_questions[random_num])
  }
  const question_list =  Array.from(question_set)
  */
  
  selected_questions = shuffle(selected_questions)
  
  return selected_questions.splice(0,10);
}