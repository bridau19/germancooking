let contentGridElement = document.getElementById('contentGrid');

let firstJSON = {
  "title" : "spätzle",
  "subtitle" : "swabian noodles",
  "my_image" : "spatzle.jpg",
  "this_color" : "#000000",
  "description" : "These are not actually noodles. . ."
}

let jsonDatabase = [
  {
    "title" : "Rouladen",
    "subtitle" : "beef rolls",
    "my_image" : "images/rouladen.jpg",
    "this_color" : "#21409A",
    "description" : "Thinly sliced beef rolled with bacon, onion, and pickles. Traditional in Germany, Poland, and the Czech Republic."
  },
  {
    "title" : "Zwiebelkuchen",
    "subtitle" : "onion pie",
    "my_image" : "images/zwiebelkuchen.jpg",
    "this_color" : "#BE1E2D",
    "description" : "Kind of like a deep dish pizza with extra onions. Actually more like an Italian fritatta with a crust, wait no a quiche! idk. . ."
  },
  {
    "title" : "Kohlrouladen",
    "subtitle" : "stuffed cabbage",
    "my_image" : "images/kohlrouladen.jpg",
    "this_color" : "#000",
    "description" : "Cabbage leaves stuffed with spiced ground beef, a dish found all over Eastern Europe. Another childhood favorite."
  },
  {
    "title" : "Springerle",
    "subtitle" : "pressed anise cookies",
    "my_image" : "images/springerle.jpg",
    "this_color" : "#21409A",
    "description" : "A traditional Christmas sugar cookie. These are usually made with an engraved rolling pin – super fun!"
  },
  {
    "title" : "Bratwurst in Bier",
    "subtitle" : "pork link sausages in beer",
    "my_image" : "images/bratwurst.jpg",
    "this_color" : "#BE1E2D",
    "description" : "Yes, the traditional way is to braise them in beer. Then serve with more beer. Because Germany."
  },
  {
    "title" : "Kartoffelsalat",
    "subtitle" : "potato salad",
    "my_image" : "images/kartoffelsalat.jpg",
    "this_color" : "#000",
    "description" : "This potato salad is usually a fresh dish with sliced poatoes and herbs, served hot or cold. No mayonnaise!"
  },
  {
    "title" : "Rotkohl",
    "subtitle" : "cooked red cabbage",
    "my_image" : "images/rotkohl.jpg",
    "this_color" : "#21409A",
    "description" : "The longer you cook it, the bluer and sweeter it gets. Usually has bacon or apples with cloves. Smells like Christmas. . ."
  },
  {
    "title" : "Kohlrabi",
    "subtitle" : "yeah just kohlrabi",
    "my_image" : "images/kohlrabi.jpeg",
    "this_color" : "#BE1E2D",
    "description" : "Wikipedia says this is also called a German turnip. The more you know I guess. This one's a Thanksgiving staple."
  },
  {
    "title" : "Kaiserschmarrn",
    "subtitle" : "scrambled pancakes",
    "my_image" : "images/kaiserschmarrn.jpg",
    "this_color" : "#000",
    "description" : "Comes from Austria and literally means the Emperor's Mess. It's the lazy girl's dream. Best with fresh fruit mixed in. "
  },
  {
    "title" : "Æbelskivers",
    "subtitle" : "mini stuffed pancakes",
    "my_image" : "images/ebelskiver.jpg",
    "this_color" : "#21409A",
    "description" : "Fluffy pancake spheres filled with chocolate or jam. The original Danish dish used applesauce."
  },
  {
    "title" : "Mohnkuchen",
    "subtitle" : "poppy seed cake",
    "my_image" : "images/mohnkuchen.jpg",
    "this_color" : "#BE1E2D",
    "description" : "Do you have any idea how hard it is to buy a pound of poppy seeds in the Bay Area? Thank God for the Russians!"
  },
  {
    "title" : "Hamantaschen",
    "subtitle" : "pocket cookie",
    "my_image" : "images/hamantaschen.jpg",
    "this_color" : "#000",
    "description" : "A Jewish triangular cookie with a filling, traditionally poppy seed. Usually associated with the Jewish holiday of Purim."
  },
  {
    "title" : "Dresdner Stollen",
    "subtitle" : "yeast bread of Dresden",
    "my_image" : "images/stollen.jpg",
    "this_color" : "#21409A",
    "description" : "A fruit bread with nuts and spices. Also called Christstollen or Weihnachtsstollen because it's served on Christmas."
  },
  {
    "title" : "Zucchinipuffer",
    "subtitle" : "zucchini pancakes",
    "my_image" : "images/zucchinipuffer.jpg",
    "this_color" : "#BE1E2D",
    "description" : "Fried vegetable fritters. There is also a Kartoffelpuffer, which just ends up tasting like a hash brown."
  },
  {
    "title" : "Käsestangen",
    "subtitle" : "cheese twists",
    "my_image" : "images/kasestangen.jpeg",
    "this_color" : "#000",
    "description" : "Differs between regions. It may be more like bread, or it may be puff pastry. Often made with kümmel (caraway seeds)."
  },

]

//go through each part in JSON database
for (var i = 0; i < jsonDatabase.length; i++) {
  createRecipeBox(jsonDatabase[i]);
}

function createRecipeBox(incomingJSON) {

  // Create item and add class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.border = "2px solid" + incomingJSON['this_color'];
  newContentElement.style.color = incomingJSON['this_color'];
  // add class contentItem
  newContentElement.classList.add('contentItem');

  // Create dish name H3
  let newContentHeading = document.createElement("H3");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentHeading.classList.add('contentTitle');
  // Add the dish name to item
  newContentElement.appendChild(newContentHeading);

  // Create subtitle H4 for dishname
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerHTML = incomingJSON['subtitle'];
  // add to item
  newContentElement.appendChild(newContentSubhead);

  // create description P for dish description
  let newContentDescription = document.createElement("P");
  newContentDescription.innerHTML = incomingJSON['description']
  // add to item
  newContentElement.appendChild(newContentDescription);

  // Create IMG
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['my_image'];
  // add to item
  newContentElement.appendChild(newImage);

  //add entire new item to CSS grid (contentGrid DIV)
  contentGridElement.appendChild(newContentElement);
}
