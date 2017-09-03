var data = [];
var space = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
makedata();

function makedata() {
  var obj = {};

  for (var i = 0; i < 50; i++) {
    obj = {};
    value = Math.floor(Math.random() * space.length);
    rand = Math.floor(Math.random() * space.length)
    name = space.charAt(rand);
    obj["name"] = name;
    obj["val"] = value;
    data.push(obj);
    space = space.slice(0, rand) + space.slice(rand + 1, space.length)
  }
}
