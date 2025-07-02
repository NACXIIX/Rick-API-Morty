function ButtonPrevNext({value, handleClickPrevNext}) {
    return (
        <>
            <button onClick={handleClickPrevNext} className="button">{value}</button>
        </>
    );
}

export default ButtonPrevNext;