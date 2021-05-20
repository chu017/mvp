import React from 'react';
import moment from 'moment';
import Review from './Review.jsx';
import UploadFile from './UploadFile.jsx';
// import UploadImage from './UploadImage.jsx';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  // <img src="https://loremflickr.com/320/240" />

  render() {
    return (
      <div className="post">

        <div className="post-one">
          <img src="https://realfood.tesco.com/media/images/Souffle-omelette-b7cf7c9a-8ac1-4b94-a2bc-e7b3436f323c-0-636x418.jpg"/>
          <h2><b>Soufflé Omelette</b></h2>
          <p>Likes: 99</p>
          <br></br>
          <div className="card-profile">
          <img src="https://www.the-happy-chef.com/assets/img/team/team-3.jpg" className="profile-card"/>
          <p>Jack Ross</p>
          </div>
          <br></br>
          <h3><b>Method</b></h3>
          <h4><b>Step 1: Roast it right</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-1-979670e4-cf2e-4d28-adaf-64605c5dcccc-0-636x418.jpg"/>
          <p>Preheat the oven to gas 6, 200°C, fan 180°C. Toss the cauliflower florets and smaller leaves with the oil and spread over a large baking tray. Scatter with half the thyme and roast for 20-25 mins until tender and lightly charred.</p>
          <p>When roasting vegetables, use a large baking tray with low sides and space them well apart. This allows them to roast rather than steam, giving you lovely crisp edges. Not a fan of cauliflower? Try broccoli florets instead.</p>

          <br></br>
          <h4><b>Step 2: Make the sauce</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-2-fdd51284-faa6-4e34-a321-a032ee5f990e-0-636x418.jpg"/>
          <p>Ipsum nunc aliquet bibendum enim. Diam vel quam elementum pulvinar etiam non quam. Eget nullam non nisi est. Sit amet luctus venenatis lectus magna fringilla urna.</p>
          <br></br>
          <h4><b>Step 3: Separate the eggs</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-3-050e429a-881a-4ed6-aa4f-e9136d8d5aa8-0-636x418.jpg"/>
          <p>Ipsum nunc aliquet bibendum enim. Diam vel quam elementum pulvinar etiam non quam. Eget nullam non nisi est. Sit amet luctus venenatis lectus magna fringilla urna.</p>
          <br></br>
          <h4><b>Step 4: Beat the whites</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-4-3f5c1e4f-d6cb-4139-9bf5-45e225dc93c5-0-636x418.jpg"/>
          <p>Whisk for 2-3 mins until they triple in size and have soft peaks. Place the yolks in a separate, large bowl and whisk until pale and thick.</p>
          <p>To create a fluffy soufflé omelette, you need to beat the egg whites well. This fills them with tiny bubbles, which swell to create a beautiful consistency. To check they’re ready, lift your whisk to see if soft peaks form and just hold.</p>
          <br></br>
          <h4><b>Step 5: Fold them together</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-5-b2a6c158-2a3b-4653-a637-e71b97a5ac71-0-636x418.jpg"/>
          <p>Carefully add one-third of the whites to the yolks and gently stir with a large metal spoon until combined and looser in consistency. Cutting through the mix with the thin edge of the spoon crushes fewer air bubbles, for a light result.</p>
          <br></br>
          <h4><b>Step 6: The perfect finish</b></h4>
          <img src="https://realfood.tesco.com/media/images/Step-6-00b8ad50-5c25-4896-bde8-008a3de1aee8-0-636x418.jpg"/>
          <p>Next, melt the butter in a large (about 25cm) nonstick, lidded frying pan over a medium heat. Pour in the egg mixture, lightly spread with a spatula to evenly cover the base of the pan, then season and cover with the lid. Cook for 4-5 mins until the bottom of the omelette is golden and set and the top is pale but lightly set. Covering the pan with a lid helps the top of the omelette to set, so you don’t end up with raw, foamy egg. No lid? Use an ovenproof pan and grill for 30 secs to set.</p>
          <p>Slide a spatula around the omelette to loosen, then gently transfer to a plate. Cover half with the roasted cauliflower and spoon over the cheese sauce. Scatter with the parsley, remaining thyme leaves and a pinch of cayenne pepper. Fold the omelette over on itself and cut in half to serve.</p>
        </div>

        <div className="post-two">
          <br></br>
           <h3><b>Ingredients</b></h3>
            <p>1 small cauliflower (about 500g), cut into florets, outer leaves discarded</p>
            <p>3 thyme sprigs, leaves picked</p>
            <p>120g 50% less fat crème fraîche</p>
            <p>1 tsp Dijon mustard</p>
            <p>4 large eggs</p>
            <p>50g Gruyère or Emmental, grated</p>
            <p>5g unsalted butter</p>
            <p>5g fresh parsley leaves, finely chopped pinch of cayenne or chilli powder</p>
          <br></br>
          <Review />
          <UploadFile />
          {/* <UploadImage /> */}
        </div>

      </div>
    );
  }
}

export default Post;
