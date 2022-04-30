const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);

const categoriesNameAndElementsQuantity = () => {
  categoriesList.forEach((element) =>
    console.log(
      `Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`
    )
  );
};

categoriesNameAndElementsQuantity();
