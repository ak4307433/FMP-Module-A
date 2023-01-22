


var questions = [
    {
      numb: 1,
      question: "My favorite bike is_____",
      answer: "YamahaR6",
      options: [
        "YamahaR6",
        "Bullet",
        "Honda125",
        "Honda70",
      ],
    },
    {
      numb: 2,
      question: "My favorite car is______",
      answer: "Audi",
      options: [
        "Audi",
        "Land Cruiser",
        "Civic",
        "Sonata",
      ],
    },
    {
      numb: 3,
      question: "My favorite food is______ ",
      answer: "Biryani",
      options: [
         "Biryani",
        "Tikka",
        "Plater",
        "Handi Makhni",
      ],
    },
    {
      numb: 4,
      question: "My favorite subjuct is______",
      answer: "Chemistry",
      options: [
        "Urdu",
        "Islamiyat",
        "English",
        "Chemistry",
      ],
    },
    {
      numb: 5,
      question: "My favorite country is______",
      answer: "Dubai",
      options: [
        "Dubai",
        "India",
        "Turky",
        "Afghanistan",
      ],
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  
  var question = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var main = document.getElementById("main");
  var indexNum = 0;
  var marks = 0;
  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML=''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-secondary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`
    }
  }
  showQuestion();
  
  function nextQuestion() {
    indexNum++;
    showQuestion();
  }
  
  function checkAns(a, b) {
    if (a == b) {
      marks++;
    }
    if(indexNum + 1 == questions.length) {
        main.innerHTML=` <h1 class="text-white bg-danger border border-secondary text-center">
        YOur Marks is ${marks}
        </h1>`
    }else{
    nextQuestion();

    }
  }