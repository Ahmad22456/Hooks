import { useState } from "react"

function Filter({onSearch}) {

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")

    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleRatingChange = (e) => {
        e.preventDefault()
        setRating(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch({title, rating})
    }

    return (
        <>
            <form className="filterBar" onSubmit={handleSubmit}>
                <label>Name</label>
                <input placeholder="Enter Title here" onChange={(e) => handleTitleChange(e)} value={title}/>

                <label>Rating</label>
                <input placeholder="Enter Rating here" onChange={(e) => handleRatingChange(e)} value={rating}/>

                <input type="submit" value="Search"/>
            </form>
        </>
    )
}

export default Filter