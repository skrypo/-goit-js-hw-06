// const categories = document.querySelector("#categories");

const qtyCat = categories.querySelectorAll(".item");
console.log("Number of categories :", qtyCat.length);

qtyCat.forEach(function (element) {
  const titles = element.firstElementChild.textContent;
  console.log("Category :", titles);

  const subCat = element.lastElementChild;

  const subcatArr = Object.values(subCat.children);
  console.log("Elements :", subcatArr.length);
});
