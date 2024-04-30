
export const Square = ({value, onSquareClick}: {value: string | null, onSquareClick: () => void}) => {
    return (
        <div onClick={onSquareClick} className="border border-l-neutral-600 h-8 w-8 flex justify-center items-center">{value}</div>
    )
}