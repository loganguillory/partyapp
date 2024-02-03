import React from 'react';
import './index.css';

function Home() {
    return (<div className='home'>

        <div>
            <h2>Hi There, Are you on your way?</h2>
            <h4>Upcoming Events:</h4>
            <h5>See Events for more.</h5>
        </div>


        <div className="card-container">
                <div className="card">
                    <img src="path/to/your/photo1.jpg" alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Card Title 1</div>
                        <div className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare,
                            quae sunt a te dicta?
                        </div>
                        <div className="card-location">Location: City, Country</div>
                    </div>
                </div>
        </div>



    </div>);
}

export default Home;