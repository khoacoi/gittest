const isValungtungDay = () => {
  const date = new Date();
  console.log('isValungtungDay');
  console.log('isValungtungDay');
  console.log('isValungtungDay');
  return date.getDay() === 14 && date.getMonth() === 2;
}

export default isValungtungDay;
