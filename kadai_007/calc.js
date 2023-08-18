//変数numに０〜20のランダムな整数を代入する
let num = Math.floor(Math.random() * 20);
//変数numの値を出力する
console.log(num);
//numが３と５の倍数の時、’３と５の倍数です’と表示
if((num % 3 === 0) && (num % 5 === 0)){
  console.log('3と5の倍数です');
}
//numが３の倍数の時、’３の倍数です’と表示
else if(num % 3 === 0) {
  console.log('3の倍数です');
} 
//numが５の倍数の時、’５の倍数です’と表示
else if(num % 5 === 0){
  console.log('5の倍数です');
}
//それ以外の時、数字を表示
else {
  console.log(num);
}
