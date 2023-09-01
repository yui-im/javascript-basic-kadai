$(window).on({
  // HTMLが読み込まれた時
  'load':() => {
  // コンソールに出力
  console.log('loadイベントが発生しました');
  },
  // 画面をスクロールした時
'scroll':() => {
  // コンソールに出力
  console.log('scrollイベントが発生しました');
},
});
  