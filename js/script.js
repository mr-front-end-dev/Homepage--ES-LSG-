{
  const welcome = () => {
    console.log("Hola a todos los desarrolladores, que visitan aquí 🔒")
  };
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");
    const imageColor = document.querySelector(".imageColor");
    const nameColor = document.querySelector(".nameColor");
    const underlineColor = document.querySelector(".underlineColor");

    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "luces grises" : "blanco";
    imageColor.classList.toggle("lightSlateGreyColorImage");
    nameColor.classList.toggle("lightSlateGreyColorName");
    underlineColor.classList.toggle("lightSlateGreyColorUnderline"); 

  };
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}