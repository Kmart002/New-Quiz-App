import React from 'react'
import Logo1 from "../../Images/Logo1.png"
// import bg from "../../Components/components/pexels-monstera-7411969 (1).jpg"
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return ( 
    //THE WHOLE BODY
    <div className='heading'>

  {/* THE WHOLE CONTAINER */}
      <section id='section' >
        {/* THE LOGO */}
        <img className='kwiz' src={Logo1} alt="" />
        {/* THE START QUIZ CONTAINER */}
        <div className='container'>
          <h1>StartQuiz</h1> 
          {/* THE BUTTON */}         
          <Link to='/Html'>
          <button className='play'>Html Questions</button>
          </Link>          
          <div className='loginsignup'>
            <Link to="/Css">
              <button className='lol'>Css Questions</button>
            </Link>
            <Link to="/Quiz">
              <button className='sig'>JS Questions</button>
            </Link>          
          </div>
          {/* <h3>NOTE: Quiz starts immediately you click on any quiz category</h3>
          <h3>You have 10seconds for each question</h3> */}
        </div>
      </section>
    </div>
  )
}

export default Home