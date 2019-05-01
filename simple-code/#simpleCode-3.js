const berangkat = (status) => {
  return status == 'wajib' ? 'Males, tetap berangkat.' : 'Males, ga berangkat';
}

console.log(berangkat('wajib'));
