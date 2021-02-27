const parser = new DOMParser();

export const escapeHTML = str => {
    //console.log(parser.parseFromString(str, 'text/html').body.textContent);
    return parser.parseFromString(str, 'text/html').body.textContent;
}

function getRandom(length) {
  return Math.floor(Math.random() * Math.floor(length-1));
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
  
  return selected_questions.splice(0,10);
}