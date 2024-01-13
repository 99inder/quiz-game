const data = [
    {
        id: 0,
        question: "Which of the following is used in React.js to increase performance?",
        choices: [
            "Virtual DOM",
            "Original DOM",
            "Both A and B",
            "None of the above"
        ],
        correctAnswer: "Virtual DOM"
    },
    {
        id: 1,
        question: "What is ReactJS?",
        choices: [
            "Server-side framework",
            "User Interface framework",
            "both a and b",
            "None of the above"
        ],
        correctAnswer: "User Interface framework"
    },
    {
        id: 2,
        question: "Identify the one which is used to pass data to components from outside",
        choices: [
            "Render with arguments",
            "setState",
            "PropTypes",
            "props"
        ],
        correctAnswer: "props"
    },
    {
        id: 3,
        question: "In which language is React.js written?",
        choices: [
            "Python",
            "Java",
            "C#",
            "JavaScript"
        ],
        correctAnswer: "JavaScript"
    },
    {
        id: 4,
        question: "What is Babel?",
        choices: [
            "JavaScript interpreter",
            "JavaScript transpiler",
            "JavaScript compiler",
            "None of the above"
        ],
        correctAnswer: "JavaScript compiler"
    }
];

export const title = "React & Javascript Quiz";
export const noOfQuestions= data.length;

export default data;