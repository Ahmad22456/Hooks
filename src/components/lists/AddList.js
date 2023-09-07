import AddedCard from "../cards/AddedCard"

function AddList({newAdd}) {

    return (
        <div className="listAdd">
            {newAdd.map((x) => (
                <AddedCard title={x.title} description={x.description} posterURL={x.posterURL} rating={x.rating}/>
            ))}
        </div>
    )
}

export default AddList