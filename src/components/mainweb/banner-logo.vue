<template>
    <div id='app' style="width:100%; height:100%; position:relative;">
        <div class="loading">
  <div class="loader">
    <h2 class="loading-text cd-headline clip is-full-width"> <span class="cd-words-wrapper"> <b class="is-visible">Hey please wait</b> <b>Still loading</b></span> </h2>
    <div class="loading-image"><img src="set/images/loading.gif" alt="Image"></div>
  </div>
  <!-- end loader --> 
</div>

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
        </ul>
      </nav>
      <span class="copyright">Copyright © 2019 IDEA SPACE  | All rights reserved</span> </div>
    <!-- end inner --> 
  </div>
  <!-- end table --> 
</div>
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
<section class="int-header hero1">
  <div class="table">
    <div class="inner">
      <div class="container">
        <h3>Banner & Logo</h3>
        <p>We are the creative design agency that brings ambitious brands to the next level.</p>
        <img src="set/images/icon-mouse.png" alt="Image"> </div>
      <!-- end container --> 
    </div>
    <!-- end inner --> 
  </div>
  <!-- end table --> 
</section>

<main>
  <section class="title-box" style="margin-top:100px;">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2 class="wow fadeInUp" data-wow-delay="0.5s">Banner & Logo</h2>
            <h5 class="wow fadeInUp" data-wow-delay="0.10s">รับทำออกแบบ Banner & Logo</h5>
          
          <!-- end col-12 --> 
        </div>
        <!-- end row --> 
      </div>
      <!-- end container --> 
    </div>
    <!-- end header -->
    </div>
    </section>
    <section class="contact-form" style="background-image: linear-gradient(to top, #75DDD9,white );">
            <div class="container">
                    <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                          
                          <h3 class="wow fadeInUp" data-wow-delay="0.10s">ติดต่อขอใบเสนอราคา</h3>
                          <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box --> 
                      </div>
                      <!-- end col-12 -->
                      <div class="col-xs-12 wow fadeInUp" data-wow-delay="0.15s">
                        <form id="contact" name="contact" method="post">
                          <div class="form-group">
                            <label>Your name</label>
                             <input type="text" v-model="name" name="name" id="name"  required>
                          </div>
                          <!-- end form-group -->
                          <div class="form-group">
                            <label>Your e-mail</label>
                             <input type="text" v-model="email" name="email" id="email" required>
                          </div>
                          <!-- end form-group -->
                          <div class="form-group">
                            <label>Subject</label>
                            <input type="text" name="subject" v-model="subject" id="subject" required>
                          </div>
                          <!-- end form-group -->
                          <div class="form-group">
                            <textarea name="message" v-model="detail" id="message" required></textarea>
                          </div>
                          <!-- end form-group -->
                          <div class="form-group">
                            <button id="submit" @click.prevent="suggestion()" type="submit" name="submit">SEND NOW</button>
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


    </div>
</template>


<script>
import linkweb from '@/components/mainweb/linkweb.vue'
    export default
{
        data(){
                return{ 
                        name:'',
                        email:'',
                        subject:'',
                        detail:'',
                      };
             },
        methods:   { 
         async   suggestion(event){
                var formData = new FormData();
                formData.append('name', this.$data.name);
                formData.append('email', this.$data.email);
                formData.append('subject', this.$data.subject);
                formData.append('detail', this.$data.detail );
                let  data = {
                    name:this.$data.name,
                    email:this.$data.email,
                    subject:this.$data.subject,
                    detail:this.$data.detail
                }
            let data_check =  await   fetch('https://metasitx.000webhostapp.com/process.php', {
                    method: 'POST',
                    mode: 'cors',
                    body: formData, // data can be `string` or {object}!
                    // headers:{'Content-Type': 'application/json'}
                    })
                .then(function(response) {
                        return response.json();
                })
                .catch(function(error) {
                    console.log('Request failed', error)
                });
                console.log(data_check.name);
                if(data_check.name){
                    this.$swal.fire(
                    'Good job!',
                    '',
                    'success'
                )
                    this.$data.name = "";
                    this.$data.email = "";
                    this.$data.subject = "";
                    this.$data.detail = "";
                }
            }
        },
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