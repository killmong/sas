import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizType, setQuizType] = useState('articles'); // Default to articles quiz

  // Articles quiz questions
  const articleQuestions = [
    {
      question: "What does Article 1 of the Indian Constitution describe?",
      options: [
        "Admission of New States",
        "Formation of New States",
        "India and Its Territories",
        "Laws Related to Article 2 and 3",
      ],
      correctAnswer: "India and Its Territories",
    },
    {
      question: "What power does Article 2 give to Parliament?",
      options: [
        "Power to change the name of a state",
        "Power to admit or establish new states",
        "Power to consult states before changing borders",
        "Power to modify the constitution",
      ],
      correctAnswer: "Power to admit or establish new states",
    },
    {
      question: "What must be consulted under Article 3 before altering state boundaries?",
      options: [
        "State Legislature",
        "Prime Minister",
        "President",
        "Supreme Court",
      ],
      correctAnswer: "State Legislature",
    },
    {
      question: "What does Article 4 ensure about laws related to Article 2 and 3?",
      options: [
        "They require a constitutional amendment",
        "They do not require a constitutional amendment",
        "They need approval from the Supreme Court",
        "They can be challenged in Parliament",
      ],
      correctAnswer: "They do not require a constitutional amendment",
    },
  ];

  // IPC quiz questions
  const ipcQuestions = [
    {
      question: "What does Section 1 of the Indian Penal Code state?",
      options: [
        "Punishment of offenses within India",
        "Title and extent of the Code",
        "Extension of Code to extra-territorial offenses",
        "Punishment for crimes committed outside India",
      ],
      correctAnswer: "Title and extent of the Code",
    },
    {
      question: "What is covered under Section 2 of the Indian Penal Code?",
      options: [
        "Punishment of offenses committed within India",
        "Extension of Code to extra-territorial offenses",
        "Punishment of crimes committed outside India",
        "Certain laws not affected by this Act",
      ],
      correctAnswer: "Punishment of offenses committed within India",
    },
    {
      question: "What does Section 3 of the Indian Penal Code cover?",
      options: [
        "Punishment of offenses committed outside India",
        "Punishment for crimes that may be tried within India",
        "Punishment of soldiers and airmen",
        "Laws for local and special offenses",
      ],
      correctAnswer: "Punishment for crimes that may be tried within India",
    },
    {
      question: "Which section deals with extra-territorial offenses?",
      options: ["Section 1", "Section 4", "Section 3", "Section 5"],
      correctAnswer: "Section 4",
    },
    {
      question: "Which section mentions that certain laws related to soldiers, sailors, and airmen remain unaffected?",
      options: ["Section 1", "Section 2", "Section 4", "Section 5"],
      correctAnswer: "Section 5",
    },
  ];

  const questions = quizType === 'articles' ? articleQuestions : ipcQuestions;

  const handleAnswer = (answer) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    if (correct) {
      setScore(score + 1);
    }
    setAnswers({ ...answers, [currentQuestion]: answer });
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    alert(`You scored ${score} out of ${questions.length}!`);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
  };

  return (
    <div className="flex py-20 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-5 sticky top-0 h-screen">
        <h2 className="text-xl font-bold text-gray-700 mb-5">Quiz Progress</h2>
        <ul className="space-y-3">
          {questions.map((_, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-lg ${
                index === currentQuestion
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Question {index + 1}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-gray-600">
          You are on question {currentQuestion + 1} of {questions.length}.
        </p>
        <p className="mt-4 text-gray-600">Current Score: {score}</p>
      </aside>

      {/* Quiz Content */}
      <div className="flex-1 bg-white p-8 shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">
            {quizType === 'articles' ? 'Quiz on Articles of the Indian Constitution' : 'Quiz on Indian Penal Code (IPC)'}
          </h1>
          <p className="text-gray-500">
            {quizType === 'articles' ? 'Test your knowledge of the Indian Constitution' : 'Test your knowledge of IPC sections'}
          </p>
        </header>

        {/* Quiz Type Switcher */}
        <div className="flex justify-center mb-6">
          <button
            className={`mr-4 px-4 py-2 ${quizType === 'articles' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => {
              setQuizType('articles');
              resetQuiz();
            }}
          >
            Articles Quiz
          </button>
          <button
            className={`px-4 py-2 ${quizType === 'ipc' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => {
              setQuizType('ipc');
              resetQuiz();
            }}
          >
            IPC Quiz
          </button>
        </div>

        {currentQuestion < questions.length ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="text-sm text-gray-500">Score: {score}</p>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              {questions[currentQuestion].question}
            </h3>
            <ul className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="flex items-center">
                  <input
                    className="form-radio h-4 w-4 text-indigo-600"
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    onChange={() => handleAnswer(option)}
                  />
                  <label className="ml-3 text-gray-700">{option}</label>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              {currentQuestion > 0 && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {currentQuestion < questions.length - 1 ? (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => handleAnswer(null)}
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={handleSubmit}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Quiz Complete!</h2>
            <p className="mt-4 text-gray-700">
              You scored {score} out of {questions.length}.
            </p>
            <button
              className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
