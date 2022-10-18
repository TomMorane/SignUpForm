function onChangeFire(value) {
  let image = document.getElementById('canvas');
  image.src = value;
  console.log('set fire' + value);
}

function onChangeWater(value) {
  let image = document.getElementById('canvas2');
  image.src = value;
  console.log('set eau ' + value);
}

function onChangePlant(value) {
  let image = document.getElementById('canvas3');
  image.src = value;
  console.log('set plante ' + value);
}
