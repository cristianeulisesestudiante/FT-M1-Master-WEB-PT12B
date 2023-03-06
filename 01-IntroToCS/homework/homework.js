"use strict";

function BinarioADecimal(num) {
   let binary = num.split("").reverse();
   let result = 0;

   for (let i = 0; i < binary.length; i++) {
      result = binary[i] * Math.pow(2, i) + result;
   }

   return result;
}

function DecimalABinario(num) {
   if (num === 0) return "0";
   let binary = [];
   while (num / 2 != 0) {
      binary.push(num % 2);
      num = parseInt(num / 2);
   }

   return binary.reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
