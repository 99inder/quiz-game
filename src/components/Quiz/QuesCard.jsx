const QuesCard = ({ data, answer, handleAnswerSelect }) => {

  const handleOptionChange = (e) => {
    answer === e.target.value ?
      handleAnswerSelect(null) :
      handleAnswerSelect(e.target.value);
  }

  return (
    <div>
      <p className="text-lg tracking-tight">{data.question}</p>
      <div className="my-4">
        {
          data.choices.map((choice, index) => (
            <label key={index} className="flex items-center gap-x-2 cursor-pointer w-fit my-2 tracking-tight">
              <div className="w-[16px] h-[16px] aspect-square rounded-full bg-slate-100 border-[2px] border-[#00076a] grid place-items-center">
                <div className={`w-[8px] aspect-square rounded-full bg-[#00076a] ${answer != choice ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all duration-300`}>
                </div>
              </div>
              <input
                className="hidden"
                type="checkbox"
                checked={choice === answer}
                value={choice}
                onChange={handleOptionChange}
              />
              {choice}
            </label>
          ))
        }
      </div>
    </div>
  )
}

export default QuesCard