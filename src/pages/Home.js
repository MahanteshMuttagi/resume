

const Home = ()=> {
    return(
        <div  style={backgroundStyle} className="home"><h3 className="home1" >Abjective:</h3>Innovative full-stack developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a dedication to writing clean, maintainable code, I strive to create seamless user experiences that delight customers. I'm motivated by the opportunity to work on cutting-edge projects that push the boundaries of technology while collaborating with talented individuals who share my passion for excellence.
        
        <h3 className="home1">Technical Skills : </h3>
        <ul className="home3"><li className="home2">Java</li><li className="home2">SQL</li><li className="home2">HTML</li><li className="home2">CSS</li><li className="home2">Java Script</li><li className="home2">React js</li></ul>
         
        <div className="social-links"><h3>Profiles : </h3>
        <a href="https://www.linkedin.com/in/mahantesh-muttagi-5a3aa2179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener">
        <img className="pics" src={require('../image/linkedin.jpg')} alt="image" />LinkedIn
        </a>
        <a href="https://github.com/MahanteshMuttagi" target="_blank" rel="noopener">
        <img className="pics" src={require('../image/github.jpg')} alt="image" />GitHub
        </a>
        <a href="https://www.hackerrank.com/profile/mahanteshmuttag1" target="_blank" rel="noopener">
        <img className="pics" src={require('../image/hackerrank.jpg')} alt="image" />HackerRank
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">
        <img className="pics" src={require('../image/facebook.jpg')} alt="image" />FaceBook
        </a>
       
      </div>
        </div>
        
    )
}

const backgroundStyle = {
    backgroundImage: `url('https://tse4.mm.bing.net/th?id=OIP.sI77Y3KXXxXIoYGOhlwCqAHaEK&pid=Api&P=0&h=220')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '65vh', 
  };
export default Home;