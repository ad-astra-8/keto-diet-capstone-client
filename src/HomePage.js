import React, { Component } from 'react'
// import Data from "./Data"

// import About from './About'
// import Recipes from './Recipes'
// import Forum from './Forum'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // loading: false,
            results: [],
        }
    }

    render() {
        // const myData = Data.map((tabsProp, key) =>
        //     <Forum tabsProp={tabsProp} key={tabsProp.id} />)
        // console.log(myData);


        console.log(this.props.tabs)

        return (
            <div>
                <Navbar />
                <section className="homepage">
                    <h2 className="section-title">Homepage</h2>

                    <p style={{ marginBottom: '20px', marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>"This is a presentation and explanation of the App"</p>

                    <div className="icon-title">
                        <span>About</span>
                        <span>Recipes</span>
                        <span>Forum</span>
                    </div>

                    <div className="icon-container">
                        <Link to="about"><img src="/images/about-image.jpg" alt="about-icon" /></Link>
                        <Link to="search-recipes"><img src="/images/recipe-image.jpg" alt="recipe-icon" /></Link>
                        <Link to="forum" tabs={this.props.tabs} key={this.props.tabs.id}><img src="/images/forum-image2.jpg" alt="forum-icon" /></Link>
                    </div>

                    {/* <About /> */}
                    {/* <Recipes />*/}
                    {/* <Forum tabs={tabsProp} />  */}
                </section>
            </div>
        )
    }

}

export default HomePage;