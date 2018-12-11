document.addEventListener("DOMContentLoaded", function() {
    function e() {
        TweenMax.set(window, {
            scrollTo: {
                y: 0
            }
        });
        var e = $(".barba-container"),
            t = $(".loader"),
            n = $(".loader-white"),
            o = $(".loader-title");
        e.css({
            visibility: "visible",
            top: "+=200px"
        }), tlEntry = new TimelineMax, tlEntry.to(t, .8, {
            y: "0%",
            ease: Power2.easeInOut
        }).to(t, .8, {
            y: "-100%",
            ease: Power2.easeInOut
        }, "+=0.1").set(t, {
            y: "100%"
        }).to(t, .8, {
            y: "0%",
            ease: Power2.easeInOut
        }).to(t, .8, {
            y: "-100%",
            ease: Power2.easeInOut
        }, "+=0.1").to(o, .3, {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=0.2").to(n, .8, {
            y: "-100%",
            ease: Power2.easeInOut
        }, "-=0.1").to(e, .7, {
            top: "0px",
            ease: Power2.easeInOut
        }, "-=0.7").to(o, .1, {
            css: {
                display: "none"
            }
        }).to(n, .1, {
            css: {
                display: "none"
            }
        }), tlEntry.play()
    }

    function t() {
        var e = $(window),
            t = 1.3,
            n = 200;
        e.on("mousewheel DOMMouseScroll", function(o) {
            o.preventDefault();
            var a = o.originalEvent.wheelDelta / 120 || -o.originalEvent.detail / 3,
                i = e.scrollTop(),
                s = i - parseInt(a * n);
            TweenMax.to(e, t, {
                scrollTo: {
                    y: s,
                    autoKill: !0
                },
                ease: Expo.easeOut,
                overwrite: 5
            })
        })
    }

    function n() {
        function e() {
            var e = $(this).scrollTop();
            if (e >= 30) {
                if (o >= Math.abs(n - e)) return;
                e > n && e > a ? $(".menu").addClass("nav-down").removeClass("nav-up") : e + $(window).height() < $(document).height() && setTimeout(function() {
                    $(".menu").removeClass("nav-down").addClass("nav-up")
                }, 30), n = e
            } else $(".menu").removeClass("nav-up").removeClass("nav-down")
        }
        var t, n = 0,
            o = 5,
            a = $(".menu").outerHeight();
        $(window).scroll(function() {
            function e(e) {
                $(n).each(function() {
                    var e = $(this),
                        t = e.outerHeight(),
                        n = e.attr("data-parallax");
                    (window.outerHeight - t) / 2;
                    var o = e.offset().top - $(window).scrollTop(),
                        a = o * -n / 5;
                    TweenLite.to(e, 1.5, {
                        y: a
                    })
                })
            }
            var n = $("[data-parallax]"),
                o = window.scrollY;
            e(o), t = !0
        }), $(window).width() > 1200 && setInterval(function() {
            t && (e(), t = !1)
        }, 250)
    }

    function o() {
        $(".selector-prev").mouseenter(function() {
            $(".selector-divider").addClass("prev")
        }).mouseleave(function() {
            $(".selector-divider").removeClass("prev")
        }), $(".selector-next").mouseenter(function() {
            $(".selector-divider").addClass("next")
        }).mouseleave(function() {
            $(".selector-divider").removeClass("next")
        }), $(window).width() > 992 && ($(".slider-h").each(function() {
            var e = $(this).find(".image-single"),
                t = $(this).find(".image-single-inner"),
                n = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                left: "57vw"
            }), TweenLite.set(t.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "-57vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), e.length - 1 > n ? n++ : n = 0, TweenLite.fromTo(e.eq(n), 1, {
                    left: "57vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "57vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), n > 0 ? n-- : n = e.length - 1, TweenLite.fromTo(e.eq(n), 1, {
                    left: "-57vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            })
        }), $(".slider-v").each(function() {
            var e = $(this).find(".image-single"),
                t = $(this).find(".image-single-inner"),
                n = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                left: "42vw"
            }), TweenLite.set(t.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "-42vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), e.length - 1 > n ? n++ : n = 0, TweenLite.fromTo(e.eq(n), 1, {
                    left: "42vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "42vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), n > 0 ? n-- : n = e.length - 1, TweenLite.fromTo(e.eq(n), 1, {
                    left: "-42vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            })
        }), $(".slider-summer").each(function() {
            var e = $(this).find(".name-teacher-summer"),
                t = $(this).find(".image-single"),
                n = $(this).find(".image-single-inner"),
                o = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                opacity: "0"
            }), TweenLite.set(t.filter(":gt(0)"), {
                left: "80vw"
            }), TweenLite.set(n.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }), TweenLite.to(t.eq(o), 1, {
                    left: "-80vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), t.length - 1 > o ? o++ : o = 0, TweenLite.fromTo(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {
                    opacity: "1",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(o), 1, {
                    left: "80vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }), TweenLite.to(t.eq(o), 1, {
                    left: "80vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), o > 0 ? o-- : o = t.length - 1, TweenLite.fromTo(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {
                    opacity: "1",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(o), 1, {
                    left: "-80vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "120% 120%",
                    ease: Power2.easeInOut
                })
            })
        })), 992 >= $(window).width() && ($(".slider-h").each(function() {
            var e = $(this).find(".image-single"),
                t = $(this).find(".image-single-inner"),
                n = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                left: "85vw"
            }), TweenLite.set(t.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "-85vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), e.length - 1 > n ? n++ : n = 0, TweenLite.fromTo(e.eq(n), 1, {
                    left: "85vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "85vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), n > 0 ? n-- : n = e.length - 1, TweenLite.fromTo(e.eq(n), 1, {
                    left: "-85vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            })
        }), $(".slider-v").each(function() {
            var e = $(this).find(".image-single"),
                t = $(this).find(".image-single-inner"),
                n = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                left: "50vw"
            }), TweenLite.set(t.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "-50vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), e.length - 1 > n ? n++ : n = 0, TweenLite.fromTo(e.eq(n), 1, {
                    left: "50vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(n), 1, {
                    left: "50vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), n > 0 ? n-- : n = e.length - 1, TweenLite.fromTo(e.eq(n), 1, {
                    left: "-50vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(n), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            })
        }), $(".slider-summer").each(function() {
            var e = $(this).find(".name-teacher-summer"),
                t = $(this).find(".image-single"),
                n = $(this).find(".image-single-inner"),
                o = 0;
            TweenLite.set(e.filter(":gt(0)"), {
                opacity: "0"
            }), TweenLite.set(t.filter(":gt(0)"), {
                left: "94vw"
            }), TweenLite.set(n.filter(":gt(0)"), {
                backgroundSize: "100% 100%"
            }), $(this).find(".selector-next").click(function() {
                TweenLite.to(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }), TweenLite.to(t.eq(o), 1, {
                    left: "-94vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), t.length - 1 > o ? o++ : o = 0, TweenLite.fromTo(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {
                    opacity: "1",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(o), 1, {
                    left: "94vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            }), $(this).find(".selector-prev").click(function() {
                TweenLite.to(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }), TweenLite.to(t.eq(o), 1, {
                    left: "94vw",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }), o > 0 ? o-- : o = t.length - 1, TweenLite.fromTo(e.eq(o), .6, {
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {
                    opacity: "1",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(t.eq(o), 1, {
                    left: "-94vw",
                    ease: Power2.easeInOut
                }, {
                    left: "0px",
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(n.eq(o), 1.2, {
                    backgroundSize: "100% 100%",
                    ease: Power2.easeInOut
                }, {
                    backgroundSize: "110% 110%",
                    ease: Power2.easeInOut
                })
            })
        })), $(window).width() > 768 && $(".slider-video").each(function() {
            $(this).find(".image-single"), $(this).find(".image-single-inner"), $(".selector-video").mouseenter(function() {
                var e = $(this).attr("id");
                $(".selector-video").removeClass("active"), $(this).addClass("active"), $(".slider-video .image-single").fadeOut(200), $(".slider-video #video-" + e).fadeIn(200)
            })
        })
    }

    function a() {
        $(".desc-text-teacher").each(function() {
            var e = $(this).children(".sub-level-1").height();
            $(this).height(e)
        }), $(".teacher-trigger").click(function() {
            var e = $(this).attr("id"),
                t = $(this).parent().siblings(".desc-text-teacher").attr("id");
            $(this).siblings(".teacher-trigger").removeClass("active"), $(this).addClass("active"), TweenLite.to($("#" + t).children(), .4, {
                y: 40,
                opacity: 0,
                ease: Power2.easeInOut
            }), setTimeout(function() {
                $("#" + t).children().css("display", "none"), TweenLite.fromTo($("#" + t + " ." + e), .4, {
                    y: 40,
                    opacity: 0,
                    ease: Power2.easeInOut
                }, {
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeInOut
                }), $("#" + t + " ." + e).css("display", "block")
            }, 350)
        })
    }

    function i() {
        $(".selector-slider-single").click(function() {
            var e = $(this).attr("id");
            $(".selector-slider-single").removeClass("active"), $(this).addClass("active"), $(".slider-group").removeClass("active"), $(".calendar").removeClass("active"), $("." + e).addClass("active")
        }), $(".selector-single").hover(function() {
            var e = $(this).attr("id");
            $(this).siblings(".selector-single").removeClass("active"), $(this).addClass("active"), $(this).parent().siblings(".slider").find(".image-single").removeClass("active"), $(this).parent().siblings(".date-group").find(".single-date").removeClass("active"), $("." + e).addClass("active")
        })
    }

    function s() {
        $(".video-trigger").click(function() {
            $("body").addClass("overflow_hidden"), $(window).width() > 1200 ? (TweenLite.to($(".menu"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            })) : 1200 >= $(window).width() && (TweenLite.to($(".menu-mobile-trigger"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            }), TweenLite.to($(".menu"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            }));
            var e = $(this).attr("id");
            TweenLite.to($("." + e), .9, {
                top: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + e + " .close-video"), .7, {
                marginTop: "0px",
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }), setTimeout(function() {
                var e = document.getElementById("videoVimeo");
                e.play()
            }, 750)
        }), $(".close-video").click(function() {
            var e = document.getElementById("videoVimeo");
            e.pause(), $("body").removeClass("overflow_hidden");
            var t = $(this).attr("id");
            TweenLite.to($("." + t + " .close-video"), .5, {
                marginTop: "30px",
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + t), .7, {
                top: "110%",
                delay: .4,
                ease: Power2.easeInOut
            }), $(window).width() > 1200 ? (TweenLite.to($(".menu"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            })) : 1200 >= $(window).width() && (TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu-mobile-trigger"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }))
        })
    }

    function r() {
        $(".more-details").click(function() {
            $("body").addClass("overflow_hidden"), $(window).width() > 1200 ? (TweenLite.to($(".menu"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            })) : 1200 >= $(window).width() && (TweenLite.to($(".menu-mobile-trigger"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            }), TweenLite.to($(".menu"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            }));
            var e = $(this).attr("id");
            TweenLite.to($("." + e), .9, {
                top: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + e + " .more-details-modal-inner"), .7, {
                bottom: "50px",
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + e + " .close-modal"), .7, {
                marginTop: "0px",
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            })
        }), $(".close-modal").click(function() {
            $("body").removeClass("overflow_hidden");
            var e = $(this).attr("id");
            TweenLite.to($("." + e + " .more-details-modal-inner"), .5, {
                bottom: "0px",
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + e + " .close-modal"), .5, {
                marginTop: "30px",
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($("." + e), .7, {
                top: "110%",
                delay: .4,
                ease: Power2.easeInOut
            }), $(window).width() > 1200 ? (TweenLite.to($(".menu"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            })) : 1200 >= $(window).width() && (TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu-mobile-trigger"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }))
        })
    }

    function w() {
        var e = $("#ajax-contact").height();
        $("#ajax-contact").height(e), $(".form-ajax").submit(function(e) {
            var t = $(this).attr("id"),
                n = $("#" + t + " #form-messages");
            e.preventDefault();
            var o = $("#" + t).serialize();
            $.ajax({
                type: "POST",
                url: $("#" + t).attr("action"),
                data: o
            }).done(function() {
                $(n).removeClass("alert-danger"), $(n).addClass("alert-success"), $(n).text("Grazie, il tuo messaggio è stato inviato correttamente."), $("#" + t + " #form_content").hide(), $(n).show(), $("#" + t + " #name").val(""), $("#" + t + " #email").val(""), $("#" + t + " #message").val(""), $("#" + t + " #object").val("")
            }).fail(function() {
                $(n).removeClass("alert-success"), $(n).addClass("alert-danger"), $("#" + t + " #name").val(""), $("#" + t + " #email").val(""), $("#" + t + " #message").val(""), $("#" + t + " #object").val(""), $(n).text("Si è verificato un errore, il messaggio non è stato inviato. Riprova."), $(n).show()
            })
        })
    }

    function l() {
        $("#map").click(function() {
            var e = "https://www.google.it/maps/place/Orsolina28/@45.0469038,8.2562012,17z/data=!3m1!4b1!4m5!3m4!1s0x4787bf1a9bbcf3b5:0x7d01355effbce94b!8m2!3d45.0469038!4d8.2583952";
            window.open(e)
        })
    }

    function u() {
        $(window).width() > 767 ? new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            slidesPerView: 4,
            spaceBetween: 30,
            grabCursor: !0
        }) : 767 >= $(window).width() && new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: !0
        })
    }

    function c() {
        $(".menu-mobile-trigger").click(function() {
            TweenLite.to($(".menu-mobile-trigger"), .8, {
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "none"
                },
                delay: .7
            }), $("body").addClass("overflow_hidden"), TweenLite.to($(".menu-mobile-modal"), .9, {
                top: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-modal .menu-mobile-modal-inner"), .7, {
                marginTop: "-180px",
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-modal .close-modal"), .7, {
                marginTop: "0px",
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            })
        }), $(".menu-mobile-modal .close-modal").click(function() {
            $("body").removeClass("overflow_hidden"), TweenLite.to($(".menu-mobile-modal .menu-mobile-modal-inner"), .5, {
                marginTop: "-130px",
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-modal .close-modal"), .5, {
                marginTop: "40px",
                opacity: 0,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-modal"), .7, {
                top: "110%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.to($(".menu-mobile-trigger"), .1, {
                css: {
                    display: "block"
                },
                delay: .5
            }), TweenLite.to($(".menu-mobile-trigger"), .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeInOut
            })
        }), $(".menu-mobile-modal .menu-mobile-modal-inner ul li a").click(function() {
            $("body").removeClass("overflow_hidden")
        })
    }

    function d() {
        function e(e) {
            return document.querySelector(e)
        }

        function t(t, n, o) {
            t instanceof HTMLElement || (t = e(t)), null != t && t.addEventListener(n, o, !1)
        }
        var n = plyr.setup({
            debug: !1
        });
        m(), n && n.forEach(function(e) {
            t(".js-play", "click", function() {
                e.play()
            }), t(".js-pause", "click", function() {
                e.pause()
            })
        })
    }

    function m() {
        var e = $(window).height(),
            t = .8 * $(window).width(),
            n = t / t,
            o = 1.78;
        if (n > o) {
            var a = 1.78 * e;
            $(".video-inner").width(a - 100)
        } else {
            var i = t / 1.78;
            $(".video-inner").height(i);
            var s = (e - i) / 2;
            $(".video-inner").css({
                top: s
            })
        }
    }
    var f;
    if (768 >= $(window).width()) {
        var p = $(window).height();
        $(".hero-slide").height(p - 65)
    }
    if ($(window).width() > 992 && n(), 1250 >= $(window).width() && c(), t(), o(), a(), i(), s(), w(), r(), l(), e(), "mag" == $(".barba-container").attr("data-namespace")) {
        u();
        var g = $(".top-mag .image .col-50-inner").height();
        $(".bg-top-mag").height(g)
    }
    d(), $(window).resize(function() {
        m()
    }), Barba.Pjax.init(), Barba.Prefetch.init(), Barba.Dispatcher.on("transitionCompleted", function() {
        if (768 >= $(window).width()) {
            var e = $(window).height();
            $(".hero-slide").height(e - 65)
        }
        if ($(window).width() > 992 && n(), 1250 >= $(window).width() && c(), t(), o(), a(), i(), s(), w(), r(), l(), "mag" == $(".barba-container").attr("data-namespace")) {
            u();
            var m = $(".top-mag .image .col-50-inner").height();
            $(".bg-top-mag").height(m)
        }
        d()
    }), Barba.Dispatcher.on("linkClicked", function(e) {
        f = e
    });
    var T = Barba.BaseTransition.extend({
        start: function() {
            this.originalThumb = f, Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
        },
        fadeOut: function() {
            var e = Barba.Utils.deferred(),
                t = $(this.oldContainer);
            return TweenMax.fromTo($(".loader"), .7, {
                css: {
                    y: "100%"
                },
                ease: Power2.easeInOut
            }, {
                css: {
                    y: "0%"
                },
                ease: Power2.easeInOut
            }), TweenMax.to($(".menu"), .3, {
                css: {
                    y: "-100%"
                },
                ease: Power2.easeInOut
            }), TweenLite.to(t, .8, {
                top: "-=300px",
                ease: Power2.easeInOut,
                onComplete: function() {
                    e.resolve()
                }
            }), e.promise
        },
        fadeIn: function() {
            TweenMax.set(window, {
                scrollTo: {
                    y: 0
                }
            }), $("body").removeClass("overflow_hidden");
            var e = this;
            $(this.newContainer), $(this.oldContainer).hide(), TweenMax.fromTo($(".loader"), .6, {
                css: {
                    y: "0%"
                },
                ease: Power2.easeInOut
            }, {
                css: {
                    y: "-100%"
                },
                ease: Power2.easeInOut
            }, .3), TweenMax.fromTo($(".menu"), .2, {
                css: {
                    top: "+=70px"
                },
                ease: Power2.easeInOut
            }, {
                css: {
                    top: "0px"
                },
                ease: Power2.easeInOut
            }), e.done()
        },
        getNewPageFile: function() {
            return Barba.HistoryManager.currentStatus().url.split("/").pop()
        }
    });
    Barba.Pjax.getTransition = function() {
        return T
    };
    var v = Barba.BaseView.extend({
        namespace: "home",
        onEnter: function() {
            TweenLite.from($(".hero-slide"), 1.3, {
                y: "70%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".hero-slide h1 span.span-outer"), .3, {
                borderWidth: 0,
                opacity: 0,
                delay: 1,
                ease: Power2.easeInOut
            }), TweenLite.from($(".hero-slide h1 span.span-inner"), .7, {
                marginTop: "+105px",
                delay: 1,
                ease: Power2.easeInOut
            }), TweenLite.from($(".hero-slide .video-trigger"), .7, {
                y: "70%",
                opacity: 0,
                delay: 1,
                ease: Power2.easeInOut
            }), TweenLite.from($(".hero-slide .scroll"), .7, {
                y: "70%",
                opacity: 0,
                delay: 1,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    v.init();
    var y = Barba.BaseView.extend({
        namespace: "about",
        onEnter: function() {
            TweenLite.from($(".bg-top-about"), 1.3, {
                y: "70%",
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-about .image"), 1.3, {
                y: "100%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-about h1 span.span-inner"), .7, {
                marginTop: "+105px",
                delay: 1,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    y.init();
    var h = Barba.BaseView.extend({
        namespace: "mag",
        onEnter: function() {
            TweenLite.from($(".bg-top-mag"), 1.2, {
                y: "80%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-mag .image"), 1.2, {
                y: "50%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-mag h1 span.span-inner"), .7, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-mag p"), .7, {
                y: "30%",
                opacity: 0,
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-mag h4"), .7, {
                y: "150%",
                opacity: 0,
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    h.init();
    var O = Barba.BaseView.extend({
        namespace: "courses",
        onEnter: function() {
            TweenLite.from($(".top-courses .image"), 1.3, {
                y: "80%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-courses-info .bg"), 1.3, {
                y: "50%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-courses .link-prev-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-courses .link-next-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-courses-title h1 span.span-inner"), .65, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-courses .top-courses-year"), .65, {
                y: "100%",
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    O.init();
    var P = Barba.BaseView.extend({
        namespace: "masterclasses",
        onEnter: function() {
            TweenLite.from($(".top-masterclasses .image"), 1.3, {
                y: "80%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-masterclasses-info .bg"), 1.3, {
                y: "50%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-masterclasses .link-prev-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-masterclasses .link-next-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-masterclasses-title h1 span.span-inner"), .65, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-masterclasses .top-courses-year"), .65, {
                y: "100%",
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    P.init();
    var I = Barba.BaseView.extend({
        namespace: "workshops",
        onEnter: function() {
            TweenLite.from($(".top-workshops .image"), 1.3, {
                y: "80%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-workshops-info .bg"), 1.3, {
                y: "50%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-workshops .link-prev-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-workshops .link-next-courses"), 1, {
                y: "100%",
                delay: .6,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-workshops-title h1 span.span-inner"), .65, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".top-workshops .top-courses-year"), .65, {
                y: "100%",
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    I.init();
    var L = Barba.BaseView.extend({
        namespace: "journal",
        onEnter: function() {
            TweenLite.from($(".big-journal .bg"), 1.1, {
                y: "80%",
                delay: .1,
                ease: Power2.easeInOut
            }), TweenLite.from($(".big-journal .image"), 1.1, {
                y: "80%",
                delay: .3,
                ease: Power2.easeInOut
            }), TweenLite.from($(".big-journal .cont h1 span.span-inner"), .7, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            }), TweenLite.from($(".big-journal .cont p"), .7, {
                y: "20%",
                opacity: 0,
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    L.init();
    var b = Barba.BaseView.extend({
        namespace: "contact",
        onEnter: function() {
            TweenLite.from($(".contact-1 .image"), 1.3, {
                y: "80%",
                delay: .2,
                ease: Power2.easeInOut
            }), TweenLite.from($(".contact-2"), 1.3, {
                y: "30%",
                delay: .4,
                ease: Power2.easeInOut
            }), TweenLite.from($(".contact-1 .title h1 span.span-inner"), .7, {
                marginTop: "+105px",
                delay: .9,
                ease: Power2.easeInOut
            })
        },
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
    });
    b.init()
});