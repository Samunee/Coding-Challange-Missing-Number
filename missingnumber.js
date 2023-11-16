/**
 * Fungsi untuk menemukan angka yang hilang dari rentang 1 sampai n
 * @param {number} n - Jumlah total angka dari 1 sampai n
 * @param {number[]} arr - Array yang berisi n-1 angka antara 1 dan n
 * @returns {number} - Angka yang hilang dari rentang 1 sampai n
 */
function findMissingNumber(n, arr) {
  // Menghitung jumlah dari 1 sampai n menggunakan rumus sum
  let totalSum = (n * (n + 1)) / 2;

  // Menghitung jumlah seluruh angka yang diberikan di dalam array
  let currentSum = arr.reduce((acc, curr) => acc + curr, 0);

  // Mengembalikan angka yang hilang
  return totalSum - currentSum;
}

// Input
const n = 5;
const arr = [2, 3, 1, 5];

// Menemukan angka yang hilang
const missingNumber = findMissingNumber(n, arr);

// Output hasil pencarian angka yang hilang
console.log(missingNumber); // Output: 4
