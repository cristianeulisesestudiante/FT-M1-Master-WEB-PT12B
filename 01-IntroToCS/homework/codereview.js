// * CODE SOLUTION 
/**
 * It takes a binary number as a string, reverses it, and then iterates over it, adding the value of
 * each digit multiplied by 2 to the power of its index to a result variable.
 * @param num - The binary number to convert to decimal.
 * @returns the result of the operation.
 */
function BinarioADecimal(num) {
   let result = 0;
   let numReverse = num.split("").reverse();

   // ? que es entries
   // * define
/* The above code is converting a binary number to a decimal number. */
   for (let [i, value] of numReverse.entries()) {
      result += value * 2 ** i;
   }
   return result;
}


/**
 * The function takes a number and returns a string of the binary representation of that number.
 * @param num - The number to be converted to binary.
 * @returns The binary representation of the number.
 */
function DecimalABinario(num) {
   let binary = [];

   while (num >= 1) {
      let residue = Math.trunc(num) % 2;
      num = num / 2;

      if (residue === 0) binary.unshift(0);
      if (residue !== 0) binary.unshift(1);
   }

   return binary.join('');
}

console.log(BinarioADecimal("0001"))

