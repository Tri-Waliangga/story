const berangkat = (status) => {
  return status == 'wajib' ? 'Males, tetap berangkat.' : 'Males, ga berangkat';
}
//Semales apapun, kewajiban tetap harus dilaksanakan. Namanya juga kewajiban, hehehe...
console.log(berangkat('wajib'));
