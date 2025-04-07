import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row-1">
          <div className="col-15">
            <div className="skill-bx wow zoomIn" style={{ padding: '20px' }}>
              <h2>Skills</h2>
              <p>🧠<b>Data Analyst-</b>
                Power BI, Microsoft Excel

                SQL, Python (Pandas, NumPy)

                Data cleaning, transformation, modeling

                Dashboard creation and KPI reporting</p>
              <p>
                <b>💻 Frontend Development-</b>
                HTML5

                CSS3

                JavaScript (ES6)

                Responsive Design

                Bootstrap

                Tailwind CSS

                React.js

                Git & GitHub

                DOM Manipulation

                REST API Integration
              </p>
              <p><b>🔧 Tools & Databases-</b>
                SQL, MongoDB

                PowerPoint, Git & GitHub

                ETL Concepts and Reporting Automation

              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Frontend Developement</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Loading...</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}



