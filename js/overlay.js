var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

document.body.style.backgroundColor = "yellow";
var button = document.createElement("button");
document.body.appendChild(button);
