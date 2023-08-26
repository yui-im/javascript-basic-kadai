const btn = document.getElementById('btn');

// ボタンが押されたら２秒後にテキストが変更される
btn.addEventListener('click', () => {
  setTimeout(() => {
  const text = document.getElementById('text');
  text.textContent ='ボタンをクリックしました';
  }, 2000);
});