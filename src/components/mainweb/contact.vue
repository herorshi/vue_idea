<template>
    <div style="width:100%; height:100%; position:relative;">
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
            <video muted autoplay loop><source src="set/videos/video3.mp4" type="video/mp4"></video>
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
                <span class="copyright">Copyright © 2019 IDEA SPACE  | All rights reserved</span>
             </div>
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
    <section class="int-header hero5">
        <div class="table">
            <div class="inner">
                <div class="container">
                    <h3>Contact</h3>
                    <p>Drop by for a coffee or leave us a message using contact form or email</p>
                    <img src="set/images/icon-mouse.png" alt="Image"> </div>
                <!-- end container -->
            </div>
            <!-- end inner -->
        </div>
        <!-- end table -->
    </section>
    <!-- end int-header -->
    <main>
        <section class="contact-info">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.05s">
                        <h3>CONTACT INFOS</h3>
                        <p>ช่องทางสำหรับติดต่อสอบถามเพิ่มเติมสำหรับการใช้งานบริการวางแผนกลยุทธ์การตลาดออนไลน์ครบวงจร</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-8 wow fadeInUp" data-wow-delay="0.10s">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 text-right">
                                <h4>ADDRESS</h4>
                                <span>95/256 ถนนสุวินทวงศ์ แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510</span> </div>
                            <!-- end col-4 -->
                            <div class="col-md-4 col-sm-4 text-right">
                                <h4>PHONES</h4>
                                <span>061-864-5666 </span> </div>
                            <!-- end col-4 -->
                            <div class="col-md-4 col-sm-4 text-right">
                                <h4>E-MAIL</h4>
                                <span><a href="mailto:info@ideaspace.co.th" data-mce-href="mailto:info@ideaspace.co.th">info@ideaspace.co.th</a></li></span> </div>
                            <!-- end col-4 -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col-8 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end contact-info -->
        <div id="map" class="wow fadeInUp" data-wow-delay="0.05s"></div>
        <!-- end mao -->
        <section class="contact-form" id="contact-from">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">Contact</h2>
                            <h5 class="wow fadeInUp" data-wow-delay="0.10s">How can we help or assist you. We have a passion for building </h5>
                            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box -->
                    </div>
                    <!-- end col-12 -->
                    <div class="col-xs-12 wow fadeInUp" data-wow-delay="0.15s">
                        <form id="contact" name="contact" method="post">
                            <div class="form-group">
                                <label>Your name</label>
                                <input type="text" name="name" id="name" required>
                            </div>
                            <!-- end form-group -->
                            <div class="form-group">
                                <label>Your e-mail</label>
                                <input type="text" name="email" id="email" required>
                            </div>
                            <!-- end form-group -->
                            <div class="form-group">
                                <label>Subject</label>
                                <input type="text" name="subject" id="subject" required>
                            </div>
                            <!-- end form-group -->
                            <div class="form-group">
                                <textarea name="message" id="message" required></textarea>
                            </div>
                            <!-- end form-group -->
                            <div class="form-group">
                                <button id="submit" type="submit" name="submit">SEND NOW</button>
                            </div>
                            <!-- end form-group -->
                        </form>
                        <div id="success" class="alert alert-success" role="alert">
                            <p>Your message was sent successfully! We will be in touch as soon as we can.</p>
                        </div>
                        <!-- end success -->
                        <div id="error" class="alert alert-danger" role="alert">
                            <p>Something went wrong, try refreshing and submitting the form again.</p>
                        </div>
                        <!-- end error -->
                    </div>
                    <!-- end col-12 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end contact-form  -->
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
                        name:'Vue',
                        data:this
                      };
             },
        methods:   { },
        computed:  { },
        watch:{

},
        props:     [''],
        components:{ 
            linkweb
        },

   beforeRouteEnter (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    next(vm=>{
        vm.$nextTick(function(){
         // Google maps pin tooltip	
var markers = [{
    "lat": '13.822244',
    "lng": '100.732861',

    "description": 'CHOLA DIGITAL <br/><a href="http://www.acrocapoeira.com/chola" style="color:#ef3c3c; font-weight:800;">Get it now</a>'
}];


// Google maps main api

    var mapOptions = {
        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        zoom: 16,
        flat: true,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,

        // Google maps style	
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var infoWindow = new google.maps.InfoWindow();
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    for (i = 0; i < markers.length; i++) {
        var data = markers[i]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'images/map-pin2.png',
            title: data.title
        });
        (function(marker, data) {
            google.maps.event.addListener(marker, "click", function(e) {
                infoWindow.setContent(data.description);
                infoWindow.open(map, marker);
            });
        })(marker, data);
    }

        });
    } )
  },
  created(){
      window.zero = "zero";
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
// Google maps pin tooltip	
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