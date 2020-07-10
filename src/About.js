import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <section className="about">
        <h2 className="section-title">About</h2>
        {/* <img src="http://via.placeholder.com/640x360" alt="placeholder" /> */}
        <p className="intro">What Is It?</p>
        <p className="text">
          “Ketogenic” is a term for a low-carb diet (like the Atkins diet). The
          idea is for you to get more calories from protein and fat and less
          from carbohydrates. You cut back most on the carbs that are easy to
          digest, like sugar, soda, pastries, and white bread.
        </p>
        <p className="intro">How It Works</p>
        <p className="text">When you eat less than 50 grams of carbs a day, your body eventually runs out of fuel (blood sugar) 
          it can use quickly. This typically takes 3 to 4 days. Then you’ll start to break down protein and fat for energy, 
          which can make you lose weight. This is called ketosis. It's important to note that the ketogenic diet is a short 
          term diet that's focussed on weight loss rather than the pursuit of health benefits. </p>
        <p className="intro">Who Uses It?</p>
        <p className="text">
        People use a ketogenic diet most often to lose weight, but it can help manage certain medical conditions, like epilepsy, too. 
        It also may help people with heart disease, certain brain diseases, and even acne, but there needs to be more research in those 
        areas. Talk with your doctor first to find out if it’s safe for you to try a ketogenic diet, especially if you have type 1 diabetes.
        </p>
        <p className='intro'>Weight Loss</p>
        <p className='text'>A ketogenic diet may help you lose more weight in the first 3 to 6 months than some other diets. 
        This may be because it takes more calories to change fat into energy than it does to change carbs into energy. 
        It’s also possible that a high-fat, high-protein diet satisfies you more, so you eat less, but that hasn’t been proved yet.</p>
        
        <p className="intro">You can find links to to other sources below: </p>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </section>
      <Footer />
    </div>
  );
}

export default About;
