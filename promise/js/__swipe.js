'use strict';
{// ブロックスタート
  // 左右どちらかに200px座標が増減したら、一枚左、または右に移動させる
  let add_style = 'translate3d(' + 200 + 'px, ' + 0 + 'px, ' + 0 + ')';

  const lis = Array.from(document.querySelectorAll('.img_list'));
  let swipeFlg = '';
  lis.forEach(li => {
    li.addEventListener('mousedown', (e) => {
      swipeFlg = true;
      // マウスポインタが押し込まれた場所のx座標取得

      let mX = e.pageX;
      console.log(mX);
      console.log(e.type);
      if (e.type === 'mousedown') {
        swipeFlg = true;
        console.log(swipeFlg);
        swipe_start(swipeFlg, e);
      }
      // if(e.target.type ===)
      return false;
    });// mousedown

    li.addEventListener('mouseup', (e) => {
      swipeFlg = false;
      // クリックしたままを解除した状態

      if (e.type === 'mouseup') {
        swipeFlg = false;
        console.log(swipeFlg);
        swipe_stop(swipeFlg, e);
      }
      // if(e.target.type ===)
      return false;
    });// mouseup

  });//forEach

  const swipe_start = (flg, event) => {
    if (flg === true) {

      console.log('マウスオーバー');
      event.target.addEventListener('mousemove', (e) => {
        console.log('うごいてる');
        let mX = e.pageX;  //X座標
        console.log(mX);
        console.log(flg);
        // e.target.style.transform = 'translate3d(' + mX + 'px, ' + 0 + 'px, ' + 0 + ')';
      });

    }
  }

  const swipe_stop = (flg, event) => {
    if (flg === false) {
      event.target.addEventListener('mousemove', (e) => {
        console.log('取得やめ!!');
        e.preventDefault();
        console.log(flg);
      });
    }
  }
  //    let mX = e.pageX;  //X座標
  //    let mY = e.pageY;  //Y座標
} // ブロックエンド