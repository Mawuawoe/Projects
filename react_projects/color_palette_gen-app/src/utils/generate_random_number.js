const generateRandomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    color += hex[randomIndex];
  }
  return color;
};

const getListOfColors = () => {
  const listOfColors = [];
  for (let x = 0; x <= 5; x++) {
    let color = generateRandomColor();
    listOfColors.push(color);
  }
  return listOfColors;
};

export default getListOfColors;
