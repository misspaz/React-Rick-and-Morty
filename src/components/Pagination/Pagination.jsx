import { useState } from "react"

export default function Pagination({onChangePage}) {
    const [count, setCount] = useState(1)

    const doChangePage = (newPage) => {
        setCount(newPage)
        onChangePage(newPage)
    }

    return <div>
        <button className="b-btn" onClick={() => doChangePage( count - 1)}>
            {"<"}
        </button>
        {count}
        <button className="b-btn" onClick={() => doChangePage( count + 1)}>
            {">"}
        </button>
    </div>
}