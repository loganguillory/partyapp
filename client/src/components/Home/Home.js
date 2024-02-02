import React from 'react';
import './index.css';

function Home() {
    return (<>
        <div class="card-container">
        <div class="card">
            <img src="path/to/your/photo1.jpg" alt="Card Image 1"/>
            <div class="card-content">
                <div class="card-title">Card Title 1</div>
                <div class="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare,
                    quae sunt a te dicta?
                </div>
                <div class="card-location">Location: City, Country</div>
            </div>
        </div>

        <div class="card">
            <img src="path/to/your/photo2.jpg" alt="Card Image 2"/>
            <div class="card-content">
                <div class="card-title">Card Title 2</div>
                <div class="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare,
                    quae sunt a te dicta?
                </div>
                <div class="card-location">Location: City, Country</div>
            </div>
        </div>
    </div>
    </>);
}

export default Home;