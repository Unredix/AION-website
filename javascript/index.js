window.addEventListener("DOMContentLoaded", function () {
  const char = this.document.getElementById("character-js");
  const map = this.document.getElementById("map-js");

  const characters = [
    "imgs/character.png",
    "imgs/character2.png",
    "imgs/character3.png",
  ];

  const maps = [
    "imgs/map1.png",
    "imgs/map2.png",
    "imgs/map3.png",
    "imgs/map4.png",
  ];

  let index = 0;

  this.setInterval(() => {
    if (index >= characters.length) {
      index = 0;
    }
    char.src = characters[index];
    index++;
  }, 6000);

  this.setTimeout(() => {
    this.setInterval(() => {
      if (index >= maps.length) {
        index = 0;
      }
      map.src = maps[index];
      index++;
    }, 6000);
  }, 3000);
});
