let gatito
let gatito2

function preload() {
  // put preload code here
  gatito = loadImage('./images/gatito.jpg')
  gatito2 = loadImage('./images/gatito.jpg')

}

function setup() {
  // put setup code here
  createCanvas(gatito.width,gatito.height)
  noLoop()
}

function draw() {
  // put drawing code here
  background(255)
  let numPixeles = 4*gatito.width*gatito.height
  for (let i=0; i<numPixeles; i++){}
  image(gatito2,0,0,300,300)
}
