import React from "react"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/page2')
    }
    return (
        <React.Fragment>
            <div>Hello this is a home</div>
            <button onClick={handleClick}>click on me</button>
        </React.Fragment>
    )
}

export { Home }