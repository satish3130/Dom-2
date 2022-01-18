let data = [
  {
    name: "satish",
    age: "24",
  },
  {
    name: "chethan",
    age: "25",
  },
  {
    name: "vishwa",
    age: "26",
  },
  {
    name: "dill",
    age: "27",
  },
  {
    name: "dill",
    age: "27",
  },
  {
    name: "dill",
    age: "27",
  },
  {
    name: "dill",
    age: "27",
  },
  {
    name: "dill",
    age: "27",
  },
];

const info = document.querySelector("#info");
let details = data.map(function (item) {
  return "<div>" + item.name + "  is " + item.age + " year's old" + "</div>";
});
info.innerHTML = details.join("\n");
