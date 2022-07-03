import {useState} from 'react';

const ChangeName = ({setPlayer1, setPlayer2, setShowNameChange}) => {
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name1) {
            alert("Please fill in Player 1's name")
            return
        }
        if(!name2) {
            alert("Please fill in Player 2's name")
            return
        }

        setPlayer1(name1)
        setPlayer2(name2)

        setName1("")
        setName2("")
        
        setShowNameChange(false)

    }

    return (
        <form className="name-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Player 1</label>
                <input type="text" placeholder="Add Name" value={name1} onChange={(e) => setName1(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Player 2</label>
                <input type="text" placeholder="Add Name" value={name2} onChange={(e) => setName2(e.target.value)}/>
            </div>

            <input type="submit" value="Submit Names" style={{backgroundColor:"gray"}} className="btn btn-block"/>
        </form>
    )
}

export default ChangeName