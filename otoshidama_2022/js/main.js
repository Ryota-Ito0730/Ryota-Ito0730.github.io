// 暫定的にページ読み込み完了後という区切りを付けるが、正確には特定要素読み込み後から開始させる
window.addEventListener('load', function () {
  'use strict';
  // ボタン要素取得
  const btn = document.getElementById('push_btn');
  // 金額表示部分
  const money = document.getElementById('current_money');
  // 1pushごとの金額を設定
  let yen = 20;
  // ページ読み込み直後からボタン連打終了までの金額を設定
  let yen_total = 0;
  // ボタン連打初期値
  let i = 0;
  // ここの時間(秒換算)をページ内に残り～秒として表示させる大元の数値とする/setTimeout内と共用
  const millisecond = 3000;
  // ボタン連打ができる残時間
  let time = millisecond / 1000;
  let j = 0;
  // 時間表示部分
  const time_count = document.getElementById('time_count');
  console.log(time_count);
  //初期値
  let elapsedTime = time;
  time_count.innerHTML = 'あと' + '<span class="js_second">' + elapsedTime + '</span>' + '秒';

  function timeCounter() {
    let timeoutID = setTimeout(timeCounter, 1000);
    if (j === 3) {
      clearTimeout(timeoutID);
      btn_stopp_after_reading();
    }
    elapsedTime = time - j++;
    time_count.innerHTML = 'あと' + '<span class="js_second">' + elapsedTime + '</span>' + '秒';

  }
  // ボタン要素非活性化(暫定設定→読み込み直後から60秒後)
  function btn_stopper(el01) {
    el01.disabled = true;
  }
  function btn_stopp_after_reading() {
    document.getElementById('h1_text').innerText = 'そこまで！！'
    btn_stopper(btn);
    setTimeout(totalMoney, 1000);

  }
  function totalMoney() {
    money.classList.add('js_popup_end');
    money.innerHTML = '合計' + '￥' + yen_total + '<br>' + 'ゲットしました！';
  }
  function timeCounterDisplay() {
    setTimeout(timeCounter, 1000);
  }

  timeCounterDisplay();

  money.innerText = '￥' + yen_total;
  btn.addEventListener('mousedown', function () {
    yen_total = yen * i++;
    money.innerText = '￥' + yen_total;
    money.classList.add('js_popup_active');
    money.addEventListener('animationend', function () {
      money.classList.remove('js_popup_active');
    });
  });
});