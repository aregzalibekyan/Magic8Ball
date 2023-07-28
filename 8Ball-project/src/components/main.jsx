import answers from '../answers.jsx'
import { useState } from 'react'

export default function Main() {
    const [answers1, setAnswers1] = useState(answers)
    const [answer1, setAnswer1] = useState(8)

    const styles = {
        color: "black",
        margin: "auto",
        fontSize: answer1 == 8 ? "120px" : "25px"
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (document.querySelector('.Main--Input').value === "") {
            alert("Type the question!")
        }
        else {
            document.querySelector('.Main--Input').value = ""
            const randomNumber = Math.floor(Math.random() * answers1.length)

            document.querySelector('.Main--Ball').classList.add("animate")
            setTimeout(() => {
                document.querySelector('.Main--Ball').classList.remove("animate")
                setAnswer1(answers1[randomNumber].answer)
            }, 1000)

        }




    }
    return (
        <main>
            <div className="Main--Ball">
                <div className="Main--BallMiddle">
                    <h3 className="Main--title" style={styles}>{answer1}</h3>

                </div>

            </div>
            <form className="Main--Form" onSubmit={handleSubmit}>
                <input className="Main--Input" placeholder="Type Your Question here" type="text" />
                <button className="Main--Submit">Submit</button>
            </form>

        </main>
    )
}