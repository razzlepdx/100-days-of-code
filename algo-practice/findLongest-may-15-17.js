function findLongest(array){
  let longest = array[0];
  for (let i = 1; i < array.length; i++){
    let str_digits = array[i].toString();
    let long_str = longest.toString();
    if (str_digits.length > long_str.length) {
        longest = array[i];
    }
  }
  return longest;
}