import { useState } from "react"
import { useNavigate } from "react-router";
import quizData, { title, noOfQuestions } from "../assets/quizData";
import QuesCard from "../components/Quiz/QuesCard";
import Button from "../components/common/Button";

const Quiz = () => {
    const navigate = useNavigate();

    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerSelect = (ans) => {
        const newAnswers = Array.from(answers);
        newAnswers[currentQuestionIndex] = ans;
        setAnswers(newAnswers);
    }

    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < noOfQuestions; i++) {
            if (quizData[i].correctAnswer === answers[i])
                score++;
        };
        return score;
    };

    const handleFinish = () => navigate('/result/score=' + calculateScore());

    return (
        <div className="mt-32 max-w-[720px] mx-auto bg-slate-200 rounded-md px-7 py-3">
            <div className="my-5 flex items-center justify-between">
                <p className="text-2xl">
                    {title}
                </p>
                <div className="text-slate-600 font-medium">
                    <p>Question: </p>
                    <p className="text-right">{currentQuestionIndex + 1} / {noOfQuestions}</p>
                </div>
            </div>

            <div className="h-[2px] rounded-md w-full bg-slate-400 my-6"></div>

            {
                (currentQuestionIndex >= 0 && currentQuestionIndex < noOfQuestions)
                &&
                <QuesCard key={currentQuestionIndex} data={quizData[currentQuestionIndex]} answer={answers[currentQuestionIndex]} handleAnswerSelect={handleAnswerSelect} />
            }

            {/* Buttons */}
            <div className={`flex mt-10 ${currentQuestionIndex === 0 ? 'justify-end' : 'justify-between'}`}>
                {
                    (currentQuestionIndex > 0 && currentQuestionIndex < noOfQuestions)
                    &&
                    <Button clickHandler={() => setCurrentQuestionIndex(prev => --prev)}>
                        Previous
                    </Button>
                }
                {
                    (currentQuestionIndex >= 0 && currentQuestionIndex < noOfQuestions - 1)
                    &&
                    <Button clickHandler={() => setCurrentQuestionIndex(prev => ++prev)}>
                        Next
                    </Button>
                }
                {
                    currentQuestionIndex === noOfQuestions - 1
                    &&
                    <Button clickHandler={handleFinish}>
                        Finish
                    </Button>
                }
            </div>
        </div >


    )
}

export default Quiz