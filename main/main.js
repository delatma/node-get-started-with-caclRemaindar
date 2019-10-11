// Write your cade below:
function caclRemaindar(number1, number2) {
	return number1%number2;
};

function caclSum(numArray) {
	return numArray.reduce((a, b) => a+b);
};

function caclSumInConditon(numArray, limit) {
	return numArray.filter((a) =>{
	  if (a < limit)
	  return a;
	}).reduce((a,b) => a+b)
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}