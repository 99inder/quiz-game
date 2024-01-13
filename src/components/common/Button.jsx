const Button = ({ children, clickHandler, type = "button" }) => {
    return (
        <button
            className="text-xl font-medium bg-[#00076a] hover:bg-[rgba(9,9,121,1)] active:scale-95 transition-all duration-200 rounded-md text-slate-200 px-3 py-2"
            type={type}
            onClick={clickHandler}
            >
            {children}
        </button>
    )
}

export default Button