
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0){
    return [];
  }
  let a = matrix.reduce((result, item, index) => {
    if (index % 2 === 1){
      return result.concat(item.reverse())
    } else {
      return result.concat(item)
    }
  }, []);
  return a;
}
