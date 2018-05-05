const arr = [];

function saveImages(input,i) {
  //convert input to output
  console.log(arr);
  return arr.push(input);
}

function getImages(){
  return arr;
}
module.exports = {
  saveImages: saveImages, 
  getImages: getImages
};