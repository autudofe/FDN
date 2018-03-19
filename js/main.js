"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        //
        // var controller = new ScrollMagic.Controller({
        //     globalSceneOptions:{
        //         triggerHook:0.45,
        //         reverse:false
        //     }
        // })
        //
        //
        // var scene = new ScrollMagic.Scene({
        //     triggerElement: '.im_1'
        // })
        //
        //
        // scene.setClassToggle('.im_1','fade-in')
        //     .addIndicators({
        //         name: 'fade scene',
        //         colorTrigger:'black',
        //         indent:200,
        //         colorStart:'#75c695'
        //
        //     })
        //
        //     .addTo(controller);


        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 1,
                reverse: false
            }
        });

        var arr = [".general", ".capital", ".popular", ".project", ".pdf", ".constr", ".proc", ".subs", ".expert", ".work", ".im_1", ".im_2", ".im_3", ".im_4", ".im_5", ".im_6"];

        arr.forEach(function (v, i, a) {
            console.log(v);
            new ScrollMagic.Scene({
                triggerElement: v
            }).setClassToggle(v, 'fade-in')
            // .addIndicators()
            .addTo(controller);
        });

        //--------------------------------------------------------

        // $('.general').slick({
        //     autoplay: true,
        //     autoplaySpeed: 100
        // });
    }, {}] }, {}, [1]);