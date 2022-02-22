'use strict';
{
  // 値の変数化
  // 共通処理の関数化
  // liやimgの動的生成 or 使用者が該当箇所の編集をする
  // input type=fileでファイル選択後、パスの入力をするUIを作ったほうが対象ユーザーのスキルは平坦化できる(1つ1つの登録に時間はかかるか)
  // htmlを編集してもらう前提の仕様では、使用者が限定されてしまう(逆に中身をいじれるので希望する挙動にするまでの道のりは短く済むか)


  // let myPath = location.pathname;
  // let url = myPath + '/img/';

  // const basename = function(path) {
  //   return this.fullBasename(path).replace(/[\?#].*$/g, '');
  // }
  // console.log(basename(url));




  // LボタンとRボタン押下時の処理をつくる
  window.addEventListener('load', () => {
    const left_btn = document.getElementById('left_btn');
    const right_btn = document.getElementById('right_btn');
    const li = document.querySelectorAll('li');
    let val_left = 'translate3d(' + -600 + 'px, ' + 0 + 'px, ' + 0 + ')';
    let val_right = 'translate3d(' + 600 + 'px, ' + 0 + 'px, ' + 0 + ')';

    left_btn.addEventListener('click', () => {
      // ↓ここから-----------------------------------------------------------------------------------
      new Promise((resolve) => {
        // 2度押し防止
        left_btn.disabled = true;
        // ここに左方向の処理
        console.log('左');
        // 画像スクロール
        // console.log(1);
        // ▼左回転
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = '0.5s'
          li[i].style.transform = val_left;
        }
        resolve();
      }).then(() => {
        return new Promise((resolve) => {
          setTimeout(
            () => {
              // console.log(2);
              let val = 'translate3d(' + 0 + 'px, ' + 0 + 'px, ' + 0 + ')';
              for (let i = 0; i < li.length; i++) {
                li[i].style.transition = 'none';
                li[i].style.transform = val;
              }
              // ▼左回転
              ul.lastElementChild.after(ul.firstElementChild);
              // 処理の最後にボタンを押せるように解除する
              left_btn.disabled = false;
              resolve();
            }, 500);
        });
      });
      // ↑ここまで-----------------------------------------------------------------------------------
    });

    right_btn.addEventListener('click', () => {
      // ↓ここから-----------------------------------------------------------------------------------
      new Promise((resolve) => {
        // 2度押し防止
        right_btn.disabled = true;
        // ここに左方向の処理
        console.log('右');
        // 画像スクロール
        // console.log(1);
        // ▼右回転
        let val = val_right;
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = '0.5s'
          li[i].style.transform = val;
        }
        resolve();
      }).then(() => {
        return new Promise((resolve) => {
          setTimeout(
            () => {
              // console.log(2);
              let val = 'translate3d(' + 0 + 'px, ' + 0 + 'px, ' + 0 + ')';
              for (let i = 0; i < li.length; i++) {
                li[i].style.transition = 'none';
                li[i].style.transform = val;
              }
              // ▼右回転
              ul.firstElementChild.before(ul.lastElementChild);

              // 処理の最後にボタンを押せるように解除する
              right_btn.disabled = false;
              resolve();
            }, 500);
        });
      });

      // ↑ここまで-----------------------------------------------------------------------------------
    });
  });// 'load'




  // 画像5枚を400ｍ秒順に左方向にスクロールしていく
  // 最初の子要素
  // console.log(ul.firstElementChild);
  // // 最後の子要素
  // console.log(ul.lastElementChild)
  // const li = document.querySelectorAll('li');
  // const slider = () => {

  //   // ↓ここから-----------------------------------------------------------------------------------
  //   new Promise((resolve) => {
  //     // 画像スクロール
  //     console.log(1);
  //     // ▼右回転
  //     let val = 'translate3d(' + 150 + 'px, ' + 0 + 'px, ' + 0 + ')';
  //     // ▼左回転
  //     // let val = 'translate3d(' + -150 + 'px, ' + 0 + 'px, ' + 0 + ')';
  //     for (let i = 0; i < li.length; i++) {
  //       li[i].style.transition = '0.4s'
  //       li[i].style.transform = val;
  //     }
  //     resolve();
  //   }).then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(
  //         () => {
  //           console.log(2);
  //           let val = 'translate3d(' + 0 + 'px, ' + 0 + 'px, ' + 0 + ')';
  //           for (let i = 0; i < li.length; i++) {
  //             li[i].style.transition = 'none';
  //             li[i].style.transform = val;
  //           }
  //           // ▼右回転
  //           ul.firstElementChild.before(ul.lastElementChild);
  //           // ▼左回転
  //           // ul.lastElementChild.after(ul.firstElementChild);
  //           resolve();
  //         }, 400);
  //     });
  //   });
  // ↑ここまで-----------------------------------------------------------------------------------

  // setTimeout(slider, 500);

  // }
  // setTimeoutの時間はアニメーションの時間より100msは足しておくと人の目から見てスムーズに見える
  // 課題として.thenで接続する処理をより細分化する必要はある(async/awaiteも導入する必要がありそうだ)
  // window.addEventListener('load', () => {
  //   // slider();
  // });
}