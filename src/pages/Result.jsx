import { useLocation, useNavigate } from "react-router";
import { noOfQuestions } from "../assets/quizData";
import Button from "../components/common/Button";

const Result = () => {
    const location = useLocation();
    const score = parseInt(location.pathname.split('score=').at(-1));

    const navigate = useNavigate();

    return (
        <div className="mt-32 max-w-[720px] mx-auto bg-slate-200 rounded-md px-7 py-3">
            <p className="text-3xl my-5 text-center">
                Score card
            </p>

            <div className="h-[2px] rounded-md w-full bg-slate-400 my-6"></div>

            <div className="font-medium mb-12 text-center">
                <p>You Scored</p>
                <p className="text-5xl text-slate-900 font-semibold">{score}</p>
                <p>out of</p>
                <p className="text-5xl text-slate-900 font-semibold">{noOfQuestions}</p>
            </div>

            <div className="w-fit mx-auto">
                <Button clickHandler={() => navigate('/')}>
                    Play Again
                </Button>
            </div>
        </div>
    )
}

export default Result