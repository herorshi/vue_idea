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
    <section class="int-header hero3">
        <div class="table">
            <div class="inner">
                <div class="container">
                    <h3>Services</h3>
                    <!--<p>We are the creative design agency that brings ambitious brands to the next level by transforming their digital business environment.</p>-->
                    <img src="set/images/icon-mouse.png" alt="Image"> </div>
                <!-- end container -->
            </div>
            <!-- end inner -->
        </div>
        <!-- end table -->
    </section>
    <!-- end int-header -->
    <main>
        <section class="services-list">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">services</h2>
                            <h5 class="wow fadeInUp" data-wow-delay="0.10s">We have a passion for building products that will shape</h5>
                            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box -->
                    </div>
                    <!-- end col-12 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.05s">
                        <h4>STRATEGY</h4>
                        <p>ช่วยลูกค้าในการวางแผนกลยุทธ์ในการทำการทำเว็บไซต์และการตลาดออนไลน์ ให้ได้ประสิทธิภาพสูงสุดในงบประมาณที่ลูกค้าควบคุมได้ ตั้งแต่เริ่มต้น เพื่อให้ได้ประสิทธิภาพของการทำการตลาดสูงสุด</p>
                        <!-- <ul>
              <li>Understanding the MVP</li>
              <li>User Story Creation</li>
              <li>Technical Architecture</li>
              <li>Technical Specifications</li>
              <li>Brand Direction</li>
              <li>Growth Tools Integration</li>
            </ul>-->
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.10s">
                        <h4>DESIGN</h4>
                        <p>บริการออกแบบเว็บไซต์หลายหลายรูปแบบ ตามความตั้งการของลูกค้า จะรองรับการทำงานบนทุกอุปกรณ์ ดังนั้นลูกค้าที่เลือกทำเว็บไซต์กับเราสามารถทำการตลาดออนไลน์ได้ทันที </p>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3/4</li>
                            <li>W3C</li>
                            <li>Cross Browser</li>
                            <li>Cross Device</li>
                            <li>CMS</li>
                            <li>E-Commerce</li>
                        </ul>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.15s">
                        <h4>DEVELOPMENT</h4>
                        <p>บริการพัฒนาจัดทำ Web Application ตามความตั้งการของลูกค้า ไม่ว่าจะเป็นเว็บไซต์ส่วนบุคคล ห้างร้าน บริษัท องค์กร หน่วยงานราชการ และรองรับการทำงานบนทุกอุปกรณ์</p>
                        <ul>
                            <li>PHP</li>
                            <li>Javascript + jQuery + AJAX</li>
                            <li>LINUX Server</li>
                            <li>MySQL, ProgreSQL</li>
                            <li>ASP.Net</li>
                            <li>Window Server, IIS</li>
                            <li>SQL Server, Oracle</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.05s">
                        <h4>ONLINE MARKETING</h4>
                        <p>บริการทำการตลาดออนไลน์ทั้ง Google Adwords, Facebook Ads.,Youtube, Instagram, Twitter เป็นต้น</p>
                        <ul>
                            <li>Google Adwords</li>
                            <li>Facebook Ads.</li>

                        </ul>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.10s">
                        <h4>GOOGLE ADWORDS</h4>
                        <p>บริการบริหารจัดการโฆษณาบน Google AdWords ที่จะเป็นตัวช่วยลูกค้าในการบริหารจัดการแคมเปญบน Google AdWords ให้มีประสิทธิภาพมากยิ่งขึ้น ช่วยลูกค้าในการวิเคราะห์เว็บไซต์ คีย์เวิร์ด คำโฆษณาให้มีประสิทธิภาพ เพื่อเป้าหมายของลูกค้า </p>
                        <!-- <ul>
              <li>Understanding the MVP</li>
              <li>User Story Creation</li>
              <li>Technical Architecture</li>
              <li>Technical Specifications</li>
              <li>Brand Direction</li>
              <li>Growth Tools Integration</li>
            </ul>-->
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.15s">
                        <h4>MA & SUPPORT</h4>
                        <p>บริการเป็นที่ปรึกษาส่วนตัวทางธุรกิจให้กับลูกค้าในการทำการจัดทำเว็บไซต์ แอพพลิเคชั่น การตลาดออนไลน์ สำหรับลูกค้าของเราทุกแพ็คเก็จ และบริการอัพเดทข้อมูลสำหรับลูกค้าที่ไม่มีเวลาในการอัพเดทเว็บไซต์ หรือ Social Media</p>
                        <!-- <ul>
              <li>Understanding the MVP</li>
              <li>User Story Creation</li>
              <li>Technical Architecture</li>
              <li>Technical Specifications</li>
              <li>Brand Direction</li>
              <li>Growth Tools Integration</li>
            </ul>-->
                    </div>
                    <!-- end col-4 -->
                </div>
                <!-- end row -->
            </div>
            <!--end containe -->
        </section>
        <!-- end services-list -->
        <section class="services">
            <div class="container">
                <div class="row margin-bottom">
                    <div class="col-md-3 col-sm-6"> <i class="icon-theme"></i>
                        <h4>BRAND CONTENT</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-cart"></i>
                        <h4>DIGITAL COMMERCE</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-paintcylinder"></i>
                        <h4>VISUAL IDENTITY</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-eye"></i>
                        <h4>SOCIAL MEDIA</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-md-3 col-sm-6"> <i class="icon-monitor"></i>
                        <h4>UI-UX DESIGN</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-projector"></i>
                        <h4>BEHAVIOURAL MARKETING</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-keyboard"></i>
                        <h4>STRATEGIC SUPPORT</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 col-sm-6"> <i class="icon-mouse"></i>
                        <h4>MOBILE SOLUTIONS</h4>
                        <p>Everybody says the digital environment is changing brands radically.</p>
                    </div>
                    <!-- end col-3 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end services -->
        <section class="features-list">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">services plan</h2>
                            <h5 class="wow fadeInUp" data-wow-delay="0.10s">We have a passion for building products that will shape</h5>
                            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box -->
                    </div>
                    <!-- end col-12 -->
           
                    <div class="col-md-4 col-sm-4 services-plans">
         <router-link  :to="{ path: '/webapp' }"  >
         <a href="javascript:function() { return false; }" target="_blank">
          <img src="set/images/website-app.jpg">
          <div class="services-overlay"></div>
          <div class="textweb">ดูรายละเอียด</div>
          <h3>Website & App</h3>
          </a>
         </router-link>
         
                    </div>
                    <!-- end col-4 -->
        <div class="col-md-4 col-sm-4 services-plans">
          <router-link  :to="{ path: '/banner' }"  >  
            <a href="javascript:function() { return false; }" target="_blank">
            <img src="set/images/baner-logo.jpg">
            <div class="services-overlay"></div>
            <div class="text">ดูรายละเอียด</div>
            <h3>Banner & Logo</h3>
            </a>
          </router-link>
                    </div>
                    <!-- end col-4 -->
                    
         <div class="col-md-4 col-sm-4 services-plans">
          <router-link  :to="{ path: '/domain' }"  >  
            <a href="javascript:function() { return false; }" target="_blank">
            <img src="set/images/domain.jpg">
            <div class="services-overlay"></div>
            <div class="text">ดูรายละเอียด</div>
            <h3>Domain</h3>
            </a>
          </router-link>
                    </div>
                    <!-- end col-4 -->
        <div class="col-md-4 col-sm-4 services-plans">
        <router-link  :to="{ path: '/hosting' }"  >  
          <a href="javascript:function() { return false; }" target="_blank">
          <img src="set/images/hosting.jpg">
          <div class="services-overlay"></div>
          <div class="text">ดูรายละเอียด</div>
          <h3>Hosting</h3>
          </a>
        </router-link>
                    </div>
                    <!-- end col-4 -->
         <div class="col-md-4 col-sm-4 services-plans">
             <router-link  :to="{ path: '/email_hosting' }"  >
                <a href="javascript:function() { return false; }" target="_blank">
                <img src="set/images/email-hosting.jpg">
                <div class="services-overlay"></div>
                <div class="text">ดูรายละเอียด</div>
                <h3>E-mail Hosting</h3>
                </a>
             </router-link>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-4 services-plans">
          <router-link  :to="{ path: '/google' }"  >
            <a href="javascript:function() { return false; }" target="_blank">
            <img src="set/images/google-adwords.png">
            <div class="services-overlay"></div>
            <div class="text">ดูรายละเอียด</div>
            <h3>Google Adwords</h3>
            </a>
          </router-link>
                    </div>
                    <!-- end col-4 -->

          <div class="col-md-4 col-sm-4 services-plans">
          <router-link  :to="{ path: '/google' }"  > 
            <a href="javascript:function() { return false; }" target="_blank">
            <img src="set/images/facebook-ads.png">
            <div class="services-overlay"></div>
            <div class="text">ดูรายละเอียด</div>
            <h3>Facebook Ads.</h3>
            </a>
          </router-link>
                    </div>
                    <!-- end col-4 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end features-list -->
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