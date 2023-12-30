const productTerms=[{
  image:'images/python.png',
  name:'Python',
  cost:5000
},{
  image:'images/python.png',
  name:'Python',
  cost:5000
},{
  image:'images/python.png',
  name:'Python',
  cost:5000
}];

productTerms.forEach((productTerm) => {
  const html=`
  <div class="projects">

    <img src="images/ml.jpg">
    <h3>Machine Learning Project <br><span class="add">₹5000/-</span></h3>
    <button type="button" class="btn btn-success" onclick="myfunction()">Add to cart</button>
  </div>`;

});
