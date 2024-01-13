import { useNavigate } from "react-router"
import { title, noOfQuestions } from "../assets/quizData"
import Button from "../components/common/Button";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/quiz");

    return (
        <div className='mt-32 max-w-[720px] mx-auto bg-slate-200 rounded-md px-7 py-3'>
            <p className='text-3xl text-center pt-4'>Quiz Overview</p>

            <div className="h-[2px] rounded-md w-full bg-slate-400 my-6"></div>

            <div className='px-6 text-xl'>
                <p className="font-semibold">Title of the quiz: <span className="font-normal">{title}</span></p>
                <p className="font-semibold">Total No. of Questions: <span className="font-normal">{noOfQuestions}</span></p>
            </div>

            <div className="flex justify-center mt-12">
                <Button clickHandler={handleClick}>
                    Start Quiz
                </Button>
            </div>
        </div>
    )
}

export default Home