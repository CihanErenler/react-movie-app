const calc = (num) => {
  const temp = parseFloat((num / 2).toFixed(1));
  const temp2 = parseInt(Math.floor(temp)) + 0.5;
  return temp2 >= temp ? temp2 : temp2 + 1;
};

export default calc;
