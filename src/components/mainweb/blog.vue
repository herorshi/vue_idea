<template>
    <div style="width:100%; height:100%; position:relative;" >
    <div class="loading">
        <div class="loader">
            <h2 class="loading-text cd-headline clip is-full-width"> <span class="cd-words-wrapper"> <b class="is-visible">Hey please wait</b> <b>Still loading</b></span> </h2>
            <div class="loading-image"><img src="set/images/loading.gif" alt="Image"></div>
        </div>
        <!-- end loader -->
    </div>
    <!-- end loading -->
    <div class="transition-overlay"></div>
    <!-- end transition-overlay -->
    <div class="navigation" role="navigation">
        <div class="video-bg hidden-sm hidden-xs">
            <video muted autoplay loop><source src="videos/video3.mp4" type="video/mp4"></video>
        </div>
        <!-- end video-bg -->
        <div class="table">
            <div class="inner">
                <nav>
                    <ul>
                        <linkweb></linkweb>
                        <!-- <li> <a href="index.html" class="transition">HOME</a></li>
                        <li><a href="showcase.html">SHOWCASE</a></li>
                        <li><a href="about.html" class="transition">ABOUT</a></li>
                        <li><a href="services.html" class="transition">SERVICES</a></li>
                        <li><a href="blog.html" class="transition">BLOGS</a></li>
                        <li><a href="contact.html" class="transition">CONTACT</a></li> -->
                    </ul>
                </nav>
                <span class="copyright">Copyright © 2019 IDEA SPACE  | All rights reserved</span> </div>
            <!-- end inner -->
        </div>
        <!-- end table -->
    </div>
    <!-- end navigation -->
    <nav class="navbar navbar-default" role="navigation">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <router-link  :to="{ path: '/' }"  >
                        <a href="javascript:function() { return false; }">
                        <img src="set/images/ids-logo.png" alt="Image" class="logo" />
                        </a>
                    </router-link>
                    <div class="hamburger-menu"> <span></span> <span></span> <span></span> <span></span> </div>
                </div>
                <!-- end col-12 -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </nav>
    <!-- end navbar -->
    <section class="int-header hero4">
        <div class="table">
            <div class="inner">
                <div class="container">
                    <h3>wave news</h3>
                    <p>Drop by for a coffee or leave us a message using contact form</p>
                    <img src="set/images/icon-mouse.png" alt="Image"> </div>
                <!-- end container -->
            </div>
            <!-- end inner -->
        </div>
        <!-- end table -->
    </section>
    <!-- end int-header -->
    <main>
        <section class="news">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="news-post">
                            <figure><img src="set/images/news1.jpg" alt="Image"></figure>
                            <figcaption>
                                <small>16TH OCTOBER 2015</small>
                                <h3>
                                    <router-link  :to="{ path: '/blog_detail' }"  >
                                        <a href="javascript:function() { return false; }">​Slack x Harvest</a>
                                    </router-link>
                                </h3>
                                <p>Introducing a full Harvest tracking and reporting tool inside Slack.</p>
                            </figcaption>
                        </div>
                        <!-- end news-post -->
                        <div class="news-post">
                            <figure><img src="set/images/news2.jpg" alt="Image"></figure>
                            <figcaption>
                                <small>9TH MARCH 2015</small>
                                <h3>
                                    <router-link  :to="{ path: '/blog_detail' }"  >
                                        <a href="javascript:function() { return false; }">Awwwards are ffffffun.</a>
                                    </router-link>
                                    </h3>
                                <p>Our 2nd Awwward in two months, for Savse Smoothies. Thanks internet.</p>
                            </figcaption>
                        </div>
                        <!-- end news-post -->

                        <div class="news-post">
                            <figure><img src="set/images/news3.jpg" alt="Image"></figure>
                            <figcaption>
                                <small>21TH MAY 2015</small>
                                <h3>
                                    <router-link  :to="{ path: '/blog_detail' }"  >
                                        <a href="javascript:function() { return false; }">Fixed up. Looking sharp</a>
                                    </router-link>
                                </h3>
                                <p>Everybody says the digital environment is changing brands radically.</p>
                            </figcaption>
                        </div>
                        <!-- end news-post -->
                    </div>
                    <!-- end col-12 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end news -->
    </main>
    <div class="footer-space"></div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center"> <span class="logo">IDEA SPACE</span>
                    <h3>WE ARE A DIGITAL AGENCY</h3>
                </div>
                <!-- end col-12 -->
                <div class="col-xs-12">
                    <div class="sub-footer"> <span class="copyright">Copyright © 2019 IDEA SPACE  | All rights reserved</span>

                    </div>
                    <!-- end sub-footer -->
                </div>
                <!-- end col-12 -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </footer>
    </div>
</template>


<script>
import linkweb from '@/components/mainweb/linkweb.vue'
    export default
{
        data(){
                return{ 
                        name:'Vue'
                      };
             },
        methods:   { },
        computed:  { },
        watch:     { },
        props:     [''],
        components:{ 
            linkweb
        },
        mounted()  { 
        var vm = this;
        let $ = jQuery;
    $(document).ready(function() {
                $(".loading .loading-image").addClass("dissappear");
                $(".loading .loading-text").addClass("dissappear");
                $(".int-header").addClass("goes-up");
                $(".navbar-default").addClass("show");
                $('.loading').delay(1000).addClass("fade-out");
        $('#rev_slider_35_1').show().revolution({
            dottedOverlay: "none",
            delay: 5000,
            startwidth: 960,
            startheight: 350,
            hideThumbs: 200,

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 3,


            simplifyAll: "off",

            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "round",

            touchenabled: "on",
            onHoverStop: "off",
            nextSlideOnWindowFocus: "off",

            swipe_threshold: 75,
            swipe_min_touches: 1,
            drag_block_vertical: false,



            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 0,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 0,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "off",
            fullScreen: "on",

            spinner: "spinner2",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",


            forceFullWidth: "off",
            fullScreenAlignForce: "off",
            minFullScreenHeight: "400",
            hideTimerBar: "on",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            fullScreenOffsetContainer: ".wrapper",
            fullScreenOffset: "",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });
        var setREVStartSize = function() {
    var tpopt = new Object();
    tpopt.startwidth = 960;
    tpopt.startheight = 350;
    tpopt.container = jQuery('#rev_slider_35_1');
    tpopt.fullScreen = "on";
    tpopt.forceFullWidth = "off";


    tpopt.container.closest(".rev_slider_wrapper").css({
        height: tpopt.container.height()
    });
    tpopt.width = parseInt(tpopt.container.width(), 0);
    tpopt.height = parseInt(tpopt.container.height(), 0);
    tpopt.bw = tpopt.width / tpopt.startwidth;
    tpopt.bh = tpopt.height / tpopt.startheight;
    if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
    if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
    if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
    if (tpopt.bh > 1) {
        tpopt.bw = 1;
        tpopt.bh = 1
    }
    if (tpopt.bw > 1) {
        tpopt.bw = 1;
        tpopt.bh = 1
    }
    tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
    if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
    if (tpopt.fullScreen == "on") {
        tpopt.height = tpopt.bw * tpopt.startheight;
        var cow = tpopt.container.parent().width();
        var coh = jQuery(window).height();
        if (tpopt.fullScreenOffsetContainer != undefined) {
            try {
                var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                jQuery.each(offcontainers, function(e, t) {
                    coh = coh - jQuery(t).outerHeight(true);
                    if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
                })
            } catch (e) {}
        }
        tpopt.container.parent().height(coh);
        tpopt.container.height(coh);
        tpopt.container.closest(".rev_slider_wrapper").height(coh);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
        tpopt.container.css({
            height: "100%"
        });
        tpopt.height = coh;
    } else {
        tpopt.container.height(tpopt.height);
        tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
    }
};

/* CALL PLACEHOLDER */
setREVStartSize();
    })
    this.$nextTick(() => {



        
    //    window.$ - jQuery;
      $(document).ready(function() {
        "use strict";
        // Scroll down opacity
        var divs = $(".slider-inner");
        $(window).on("scroll", function() {
          var st = $(this).scrollTop();
          divs.css({
            opacity: 1 - st / 700
          });
        });

        // Litebox
        $(".swipebox").swipebox();

        // Parallax effect
        $.stellar({
          horizontalScrolling: false,
          verticalOffset: 0,
          responsive: true
        });

        // Counter
        $(".counter").counterUp({
          delay: 10,
          time: 1000
        });

        // Hamburger Menu
        $(".hamburger-menu").on("click", function(e) {
          $(".hamburger-menu").toggleClass("menu-open");
          $(".navigation").toggleClass("show-me");
          $(".navigation ul li").toggleClass("show-me");
        });

        // Page transition
        $(".transition").on("click", function(e) {
          $(".transition-overlay").toggleClass("show-me");
        });

        // Transition delay
        $(".transition").on("click", function(e) {
          e.preventDefault();
          var goTo = this.getAttribute("href");
          setTimeout(function() {
            window.location = goTo;
          }, 1000);
        });

        // Hide Fixed Slider
        $(window).on("scroll touchmove", function() {
          $(".slider .slider-inner").toggleClass(
            "hide",
            $(document).scrollTop() > 1500
          );
        });
//////setting////
      });


      wow = new WOW({
        animateClass: "animated",
        offset: 50
      });
      wow.init();


      $(window).load(function() {
        var $container = $(".portfolio-masonry");
        $container.masonry({
          columnWidth: 0,
          itemSelector: ".portfolio-masonry li"
        });
      });
    });

        },
        mixins:    [ ],
}
</script>


<style scoped>
    
</style>