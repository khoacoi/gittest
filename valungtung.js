const isValungtungDay = () => {
  const date = new Date();
  console.log('isValungtungDay');
  return date.getDay() === 14 && date.getMonth() === 2;
}

const test = () => {
  console.log('test');
}

export default isValungtungDay;
