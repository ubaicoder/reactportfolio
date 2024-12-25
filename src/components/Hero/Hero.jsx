import './Hero.css'
function Hero(){
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className='pics img-fluid' src="./first (1).png" alt="profile-pic" srcset=""  />
                </div>
                <div className="col-lg-6 new">
                    <h5>Hey, I am</h5>
                    <h1>UBAI</h1>
                    <h6>Front-End Developer</h6>
                </div>
            </div>
        </div>
    )
}
export default Hero