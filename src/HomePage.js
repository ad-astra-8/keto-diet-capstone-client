import React, { Component } from 'react'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'
import Navbar from './Navbar'

const tabsProp = [
    {
        name: 'Routine tab',
        content: 'What’s the most important thing to do to reach ketosis? Avoid eating too many carbs. You’ll likely need to keep carb intake under 50 grams of net carbs per day, ideally below 20 grams.'
    },
    {
        name: 'Workout tab',
        content: 'Hitting the gym twice a week is fine if you want to maintain the muscle you already have, but if you’re shooting to add some size you should consider increasing your training frequency to 4-5 times per week. Even though these sessions may need to be a bit shorter to allow for recovery, the increased exposure to a training stimulus can be helpful in packing on mass.'
    },
    {
        name: 'Recipes tab',
        content: 'For the dressing, whisk together olive oil, tahini, lemon juice, honey and 1 tbs water until smooth. Season and stir in chives. Whisk together eggs, milk and herbs. Melt half the butter in a 24cm non-stick frying pan over medium-high heat. When it starts to foam, add half the egg mixture, shake pan to distribute and gently stir with a heatproof rubber spatula. As egg begins to set at the edges, use the spatula to draw cooked egg towards the centre (without breaking up), allowing the uncooked egg to run towards the edge.'
    },
]

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            // loading: false,
            results: [],
        }
    }



    render() {
        return (
            <div>
                <Navbar />
                <section className="homepage">
                    <h2 className="homepage-h2">Homepage</h2>

                    <p style={{ marginBottom: '20px', marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>"This is a presentation and explanation of the App"</p>
                    {/* <p>Click on the buttons inside the tabbed menu:</p> */}
                    <div className="icon-container" style={{ marginBottom: '20px', marginTop: '20px', fontSize: '20px', display: 'inline-flex' }}>
                        <img src="/images/about-image.jpg" alt="about-icon" />
                        <img src="/images/recipe-image.jpg" alt="recipe-icon" />
                        {/* <img src="/images/forum-image.jpg" alt="forum-icon" /> */}
                        <img src="/images/forum-image2.jpg" alt="forum-icon" />
                    </div>
                    <div className="tab">
                        {/* <button className="tablinks" onClick="openCity(event, 'London')">About <i className="fa fa-question" aria-hidden="true"></i></button>
                    <button className="tablinks" onClick="openCity(event, 'Paris')">Recipes <i className="fa fa-cutlery" aria-hidden="true"></i></button>
                    <button className="tablinks" onClick="openCity(event, 'Tokyo')">Forum <i className="fa fa-comments-o" aria-hidden="true"></i></button> */}
                    </div>
                    {/* <p>(As you select a tab, one of the page below will appear: about recipes or forum)</p> */}

                    <About />
                    <Recipes />
                    <Forum tabs={tabsProp} />
                </section>
            </div>
        )
    }

}

export default HomePage;