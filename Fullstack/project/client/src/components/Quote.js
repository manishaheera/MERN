import React, {useState, useEffect} from "react";
import axios from "axios";


const Quote = (props) => {

    const [quoteOfDay, setQuoteOfDay] = useState("")

    useEffect(() => {
        axios.get("https://zenquotes.io/api/random", {

        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setQuoteOfDay(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return(

        <div className="quote-box">
            <h4> Quote </h4>
        </div>
    )
}

export default Quote;