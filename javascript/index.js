window.addEventListener("DOMContentLoaded", function () {
  function changeScene(index) {
    imgShow.src = scenes[index];
    points.forEach((point) => {
      point.classList.remove("selected-point");
    });
    points[index].classList.add("selected-point");
  }

  function changeCharacter(index) {
    char.src = characters[index];
  }

  const char = this.document.getElementById("character-js");
  const map = this.document.getElementById("map-js");
  const imgShow = this.document.getElementById("img-show-js");

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

  const scenes = [
    "imgs/scene.png",
    "imgs/scene2.png",
    "imgs/scene3.png",
    "imgs/scene4.png",
    "imgs/scene5.png",
  ];

  const points = [
    this.document.getElementById("point1"),
    this.document.getElementById("point2"),
    this.document.getElementById("point3"),
    this.document.getElementById("point4"),
    this.document.getElementById("point5"),
  ];

  let index = 0;
  let index2 = 0;

  points.forEach((point, i) => {
    point.addEventListener("click", () => {
      changeScene(i);
      changeCharacter(i);
      index = i;
      index2 = i;
    });
  });

  setInterval(() => {
    if (index2 >= scenes.length) {
      index2 = 0;
    }
    if (index >= characters.length) {
      index = 0;
    }

    changeScene(index2);
    changeCharacter(index);

    index++;
    index2++;
  }, 6000);

  setTimeout(() => {
    setInterval(() => {
      if (index >= maps.length) {
        index = 0;
      }
      map.src = maps[index];
      index++;
    }, 6000);
  }, 3000);
});
