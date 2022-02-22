'use strict';
// 1秒ずつ連続して上の行から表示していく
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// settimeoutをつかった"コールバック地獄を再現(意図したタイミングの処理ができるが非常に可読性が悪い)"
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => { console.log(5); }
//           , 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promiseで上記を表現
new Promise((resolve) => {
  setTimeout(
    () => {
      console.log(1);
      resolve();
    }, 1000);
}).then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
}).then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
});