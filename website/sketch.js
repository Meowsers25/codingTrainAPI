


function setup() {
  // put setup code here
  createCanvas(400, 400);

  //drawData();
  console.log('running');

  var button = select('#submit');
  button.mousePressed(submitWord);

  var buttonA = select('#analyze');
  buttonA.mousePressed(analyzeThis);
}

function analyzeThis() {
  var txt = select('#textinput').value();

  var data = {
    text: txt
  }
  httpPost('analyze/', data, 'json', dataPosted, postErr);
}
function dataPosted(result) {
  console.log(result);
}

function postErr(err) {
  console.log(err);
}

// function drawData() {
//   loadJSON('/all', gotData);
// }

function submitWord() {
  var word = select('#word').value();
  var score = select('#score').value();
  console.log(word, score);

  loadJSON('add/' + word + '/' + score, finished);

  function finished(data) {
    console.log(data);
    //drawData();

  }

}

// function gotData(data) {
//     background(51);
//     console.log(data);
//     var keys = Object.keys(data);
//     for (var i = 0; i < keys.length; i++) {
//       var word = keys[i];
//       var score = data[word];
//       var x = random(width);
//       var y = random(height);
//       fill(255);
//       textSize(16);
//       text(word, x, y);
//     }
// }

// function draw() {
//
//
// }
