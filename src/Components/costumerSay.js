import { useState } from "react"


const Testimonial = () => {
    const [Reviewindex,setReviewsIndex] = useState(0)
    const Change = () => {
        setReviewsIndex(index => {
            if(index === reviews.length -1 ) return 0
            return index + 1
        })
    }

    const reviews = ['"A bunch of words in the middle"',
        `"The quick brown fox jumped over the lazy dog"`,
        `"Something Something Something"`
    ]

    return(
        <div className = "Reviews" onClick={Change}>
                {reviews.map(words => (
                    <div  className="Feedback" style = {{translate:`${-100 * Reviewindex}%`}}>
                        <center key = {reviews[Reviewindex]}> {words} </center>
                    </div>
                ))}
        </div>
    )
}

export default Testimonial