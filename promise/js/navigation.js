'use strict';
{// ブロックスタート
  // 要素数にあわせてナビゲーションボタン(白黒マーク)を作る
  // インデックス番号に応じて処理対象を決める
  const ul = document.getElementById('ul');
  const nav = document.getElementById('nav');
  // li要素の合計数をカウントしその分のナビゲーションボタンをつくる
  const count = ul.childElementCount;
  let i = 1;
  while (i <= count) {
    nav.insertAdjacentHTML('beforeend', '<button class="nav_btn"></button>');
    i++;
  }
  // ナビゲーションボタンの要素を配列ライクな形で取得
  const nabBtn = nav.querySelectorAll('.nav_btn');
  // 読み込み直後のスタイルを設置
  nabBtn[0].classList.add('current');
  const right_btn = document.getElementById('right_btn');
  const left_btn = document.getElementById('left_btn');
  let next = 0;
  let prev = count;
  let common_left = "";
  let common_right = "";
  let right_click_count = 0;
  let left_click_count = 0;

  function right() {
    // 右ボタンを連続で何回押しているかのチェック
    right_click_count++;
    // 一度以上左側が押された上で右側を押す場合

    if (left_click_count >= 1 && !(common_right === "")) {
      next = common_right;
      // 左側クリックカウントを初期化しておく
      // console.log("next_in_if → " + next);
      left_click_count = 0;
      common_right = 0;
    }
    next++;
    // console.log("next_a → " + next);
    if (next >= count) {
      // nextがcount以上の値となった場合の処理
      nabBtn[count - 1].classList.toggle('current');
      nabBtn[0].classList.toggle('current');
      next = 0;
      // console.log("next初期化されたよ")
    } else {
      // nextがcount未満の値の時の処理
      // console.log('next_hoge', next);
      nabBtn[next].classList.toggle('current');
      nabBtn[next - 1].classList.toggle('current');
      // console.log("next罪挙がってるよ " + next)
    }

    // console.log("next_b → " + next);
    common_left = next;
    // console.log("common_left_under → " + common_left);
  }
  function left() {
    // 左ボタンを連続で何回押しているかのチェック
    left_click_count++;
    // 一度以上右側が押された上で左側を押す場合

    if (right_click_count >= 1 && !(common_left === "")) {
      prev = common_left;
      // 右側クリックカウントを初期化しておく
      // console.log("prev_in_if → " + prev);
      right_click_count = 0;
      common_left = 0;
    }
    prev--;
    // console.log("prev_a → " + prev);
    if (prev < 0) {
      // prevが0未満の場合の処理
      prev = count - 1;
      nabBtn[prev].classList.toggle('current');
      nabBtn[0].classList.toggle('current');

      // console.log("prev初期化されたよ")
    } else if (prev === 4) {
      // prevが0以上の時の処理
      // console.log('prev_hoge', prev);
      nabBtn[prev].classList.toggle('current');
      nabBtn[0].classList.toggle('current');
      // console.log("next罪挙がってるよ " + prev)
    } else {
      // prevが0以上の時の処理
      // console.log('prev_hoge', prev);
      nabBtn[prev].classList.toggle('current');
      nabBtn[prev + 1].classList.toggle('current');
      // console.log("next罪挙がってるよ " + prev)
    }

    // console.log("prev_b → " + prev);
    common_right = prev;
    // console.log("common_right_under → " + common_right);
  }

  right_btn.addEventListener('click', () => { right(); });
  left_btn.addEventListener('click', () => { left(); });


} // ブロックエンド