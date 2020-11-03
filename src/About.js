import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <section className="about">
        <h2 className="section-title">About</h2>
        <div className="intro">
          <p>What Is It?</p>
        <p className="text">
          “Ketogenic” is a term for a low-carb diet (like the Atkins diet). The
          idea is for you to get more calories from protein and fat and less
          from carbohydrates. You cut back most on the carbs that are easy to
          digest, like sugar, soda, pastries, and white bread.
        </p>
        </div>

        <div className="intro">
          <p>How It Works?</p>
        <p className="text">When you eat less than 50 grams of carbs a day, your body eventually runs out of fuel (blood sugar)
        it can use quickly. This typically takes 3 to 4 days. Then you’ll start to break down protein and fat for energy,
        which can make you lose weight. This is called ketosis. It's important to note that the ketogenic diet is a short
          term diet that's focussed on weight loss rather than the pursuit of health benefits. </p>
        </div>

        <div className="intro">
        <p>Who Uses It?</p>
        <p className="text">
          People use a ketogenic diet most often to lose weight, but it can help manage certain medical conditions, like epilepsy, too.
          It also may help people with heart disease, certain brain diseases, and even acne, but there needs to be more research in those
          areas. Talk with your doctor first to find out if it’s safe for you to try a ketogenic diet, especially if you have type 1 diabetes.
        </p>
        </div>

        <div className='intro'>
          <p>Weight Loss?</p>
        <p className='text'>A ketogenic diet may help you lose more weight in the first 3 to 6 months than some other diets.
        This may be because it takes more calories to change fat into energy than it does to change carbs into energy.
        It’s also possible that a high-fat, high-protein diet satisfies you more, so you eat less, but that hasn’t been proved yet.</p>
        </div>

        <div className='intro sources-container'>
          <p>You can find links to other sources below:</p>
          <ul className='sources-ul'>
            <li className='sources-li'><a href="https://alldayidreamaboutfood.com/" target='_blank' rel="noopener noreferrer">All Day I Dream About Food</a></li>
            <li className='sources-li'><a href="https://jenniferbanz.com/" target='_blank' rel="noopener noreferrer">Low Carb with Jennifer</a></li>
            <li className='sources-li'><a href="https://www.yummly.com/recipes?q=keto&taste-pref-appended=true" target='_blank' rel="noopener noreferrer">Yummly</a></li>
            <li className='sources-li'><a href="https://www.pinterest.com/search/pins/?q=keto&rs=typed&term_meta[]=keto%7Ctyped" target='_blank' rel="noopener noreferrer">Pinterest (keto section)</a></li>
            <li className='sources-li'><a href="https://nobunplease.com/" target='_blank' rel="noopener noreferrer">No Bun Please</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
