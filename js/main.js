$(function () {
    // =========================
    // width の値に元にした処理
    // =========================

    // サイト読み込み時の初期のwidth値を取得し、1000pxより大きい値であった場合は透過エフェクトクラス削除
    // $(window).width();ではあくまでブラウザが読み込んだ直後の1度のみ読み込む
    // let loading_width = $(window).width();
    // if (loading_width >= 999) {
    // console.log("よこ" + loading_width);
    //     $(".common_el_1").removeClass("common_el_1");
    //     $(".common_el_2").removeClass("common_el_2");
    //     $(".common_el_3").removeClass("common_el_3");
    // }

    // widthのリアルタイム値を取得する(デバイスが縦、横の画面切り替え時にはresizeメソッドで検知される)
    // $(window).resize(function () {
    //     let scrolling_width = $(this).width();
    // console.log("よこリアル" + loading_width);
    // scrolling_widthの値が1000より大きい値であった場合、
    // if (scrolling_width > 1000) {
    //     $(".common_el_1").removeClass("common_el_1");
    //     $(".common_el_2").removeClass("common_el_2");
    //     $(".common_el_3").removeClass("common_el_3");
    // }
    // });

    // =========================
    // メニューボタン押下時の処理
    // =========================
    //メニューボタン押下時の処理:navタグにclass="on"が付いたり、消えたりを繰り返す
    $('div.menu_btn').on('click', function () {
        $('nav').toggleClass('on');
    })
    //一度の.animate()メソッドの処理完了にかかる時間は500ms(第二引数)という意味になる
    $('#to_top').on('click', function () {
        // scrollTop: 0 の 0 はtop(0pxの位置)という意味
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    // ==========================
    // 縦スクロール値を元にした処理
    // ==========================
    // 縦スクロール量を取得し、一定値になったらクラス付与し、アニメーション実行させる
    $(window).on("scroll", function () {
        // リアルタイム縦スクロール値(ブラウザトップから現在どの程度下方向にスクロールしているかを判断)
        // 途中の位置でブラウザ更新時にはその位置のスクロール値を再取得する
        let scroll = $(this).scrollTop();
        // console.log("縦スクロール値" + scroll);
        // ブラウザウインドウ縦幅
        let wh = $(this).height();
        // console.log("ブラウザ縦幅値" + wh);
        // ブラウザ横幅
        let ww = $(this).width();
        // console.log("リアル縦取得時のよこ" + ww);
        // モバイル用(widthが1000pxより下回る場合)
        if (ww < 1000) {
            $(".trigg_1").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").addClass("display_on_1");
                }
            });
            $(".trigg_2").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").addClass("display_on_2");
                }
            });
            $(".trigg_3").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").addClass("display_on_3");
                }
            });

            $(".more_btn").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh - 100) {
                    $(this).removeClass("btn_on_1").addClass("btn_on_2");
                }
            });

            $(".trigg_4").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").addClass("display_on_4");
                }
            });


        } else { // PCサイズ用(widthが1000px以上となる場合)
            // モバイル用クラスは外しておく .trigg_1 ～ trigg_4まで
            $(".trigg_1").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").removeClass("display_on_1");
                }
            });
            $(".trigg_2").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").removeClass("display_on_2");
                }
            });
            $(".trigg_3").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").removeClass("display_on_3");
                }
            });
            $(".trigg_4").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 100) {
                    $(".common_el_1, .common_el_2, .common_el_3, .common_el_4").removeClass("display_on_4");
                }
            });

            //maskを右下へ
            $(".common_mask_odd").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 400) {
                    $(this).addClass("mask_off");
                }
            });
            // maskを左下へ
            $(".common_mask_even").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh + 400) {
                    $(this).addClass("mask_off");
                }
            });
            // 1000px以上かつ座標到達時にmoreボタンを表示する
            $(".more_btn").each(function () {
                let target_pos = $(this).offset().top;
                if (scroll > target_pos - wh - 100) {
                    $(this).removeClass("btn_on_2").addClass("btn_on_1");
                }
            });

        }// PCサイズ用if閉め

    });

}); //////////////////////
