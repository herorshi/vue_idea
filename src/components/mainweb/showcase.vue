<template>
    <div   style="width:100%; height:100%; position:relative;">
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
         <!-- <a href="index.html"><img src="set/images/ids-logo.png" alt="Image" class="logo"></a> -->

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
        <h3>Showcase</h3>
       <!-- <p>We are the creative design agency that brings ambitious brands to the next level.</p>-->
        <img src="set/images/icon-mouse.png" alt="Image"> </div>
      <!-- end container --> 
    </div>
    <!-- end inner --> 
  </div>
  <!-- end table --> 
</section>
<!-- end int-header -->
<main>
  <section class="showcase">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2 class="wow fadeInUp" data-wow-delay="0.5s">our showcase</h2>
            <h5 class="wow fadeInUp" data-wow-delay="0.10s">Amazing features with creative portfolio</h5>
            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
          <!-- end col-12 --> 
        </div>
        <!-- end row --> 
      </div>
      <!-- end container --> 
    </div>
    <!-- end header -->
    <div class="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <ul class="portfolio-masonry">
              <li class="wow fadeInUp" data-wow-delay="0.05s">
                <figure><img src="set/images/portfolio/lohdee.png" alt="Image"> 
                  <a href="set/images/portfolio2/lohdee.png" data-rel="gallery" class="swipebox" title="บริษัท ธนวัฒน์ คาสเตอร์ จำกัด">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท ธนวัฒน์ คาสเตอร์ จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure><img src="set/images/portfolio/cheevamitr.png" alt="Image"> 
                  <a href="set/images/portfolio2/cheevamitr.png" data-rel="gallery" class="swipebox" title="บริษัท ชีวามิตร วิสาหกิจเพื่อสังคม จำกัด">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ชีวามิตร วิสาหกิจเพื่อสังคม จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/hisokaori.png" alt="Image"> 
                  <a href="set/images/portfolio2/hisokaori.png" data-rel="gallery" class="swipebox" title="บริษัท วีเม็ท กรุ๊ป(ประเทศไทย) จำกัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท วีเม็ท กรุ๊ป(ประเทศไทย) จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.05s">
                <figure> <img src="set/images/portfolio/onlinebkd.png" alt="Image"> 
                  <a href="set/images/portfolio2/onlinebkd.png" data-rel="gallery" class="swipebox" title="บริษัท บางกอก ดรัก จำกัด">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท บางกอก ดรัก จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/helix.png" alt="Image"> 
                  <a href="set/images/portfolio2/helix.png" data-rel="gallery" class="swipebox" title="บริษัท เฮลิกซ์ จํากัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท เฮลิกซ์ จํากัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/AnandaDevelopment.png" alt="Image">
                  <a href="set/images/portfolio2/AnandaDevelopment.png" data-rel="gallery" class="swipebox" title="Ananda Recruit Web">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span> Ananda Recruit Web </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.05s">
                <figure> <img src="set/images/portfolio/clinicya.png" alt="Image"> 
                  <a href="set/images/portfolio2/clinicya.png" data-rel="gallery" class="swipebox" title="คลินิกยา">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> คลินิกยา </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/skland.png" alt="Image">
                  <a href="set/images/portfolio2/skland.png" data-rel="gallery" class="swipebox" title=" SK LAND">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span> SK LAND </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/tpp.png" alt="Image"> 
                  <a href="set/images/portfolio2/tpp.png" data-rel="gallery" class="swipebox" title="บริษัท ที.พี.พี. แลนด์ แอนด์ เฮ้าส์ จำกัด">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>  บริษัท ที.พี.พี. แลนด์ แอนด์ เฮ้าส์ จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.05s">
                <figure> <img src="set/images/portfolio/hunsavacation.png" alt="Image"> 
                  <a href="set/images/portfolio2/hunsavacation.png" data-rel="gallery" class="swipebox" title="บริษัท หรรษา เวเคชั่น จำกัด">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท หรรษา เวเคชั่น จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/insureinbox.png" alt="Image"> 
                  <a href="set/images/portfolio2/insureinbox.png" data-rel="gallery" class="swipebox" title="Insure Inbox">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span> Insure Inbox </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/dkidshop.png" alt="Image"> 
                  <a href="set/images/portfolio2/dkidshop.png" data-rel="gallery" class="swipebox" title="D Kids Shop">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> D Kids Shop</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/cho-on.png" alt="Image"> 
                    <a href="set/images/portfolio2/cho-on.png" data-rel="gallery" class="swipebox" title="บริษัท โช-อ๊อน (ประเทศไทย) จำกัด">
                    <figcaption class="bg-color4">
                      <div class="table">
                        <div class="inner"> <span>O</span>บริษัท โช-อ๊อน (ประเทศไทย) จำกัด </div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                  <figure> <img src="set/images/portfolio/divanaspa.png" alt="Image"> 
                    <a href="set/images/portfolio2/divanaspa.png" data-rel="gallery" class="swipebox" title="DIVANA SPA RESERVATION">
                    <figcaption class="bg-color2">
                      <div class="table">
                        <div class="inner"> <span>O</span> DIVANA SPA RESERVATION</div>
                      </div>
                    </figcaption>
                    </a> </figure>
                </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/tharisjewelry.png" alt="Image"> 
                    <a href="set/images/portfolio2/tharisjewelry.png" data-rel="gallery" class="swipebox" title="THARIS ENTERPRISE CO.,LTD">
                    <figcaption class="bg-color4">
                      <div class="table">
                        <div class="inner"> <span>O</span>THARIS ENTERPRISE CO.,LTD </div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                  <figure> <img src="set/images/portfolio/ozonediw.png" alt="Image"> 
                    <a href="set/images/portfolio2/ozonediw.png" data-rel="gallery" class="swipebox" title="ส่วนอนุรักษ์โอโซน กรมโรงงานอุตสาหกรรม">
                    <figcaption class="bg-color3">
                      <div class="table">
                        <div class="inner"> <span>O</span> ส่วนอนุรักษ์โอโซน กรมโรงงานอุตสาหกรรม</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/thankgoditsorganic.png" alt="Image"> 
                    <a href="set/images/portfolio2/thankgoditsorganic.png" data-rel="gallery" class="swipebox" title="Thank God It's Organic">
                    <figcaption class="bg-color1">
                      <div class="table">
                        <div class="inner"> <span>O</span>Thank God It's Organic</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/jasminjewelry.png" alt="Image"> 
                    <a href="set/images/portfolio2/jasminjewelry.png" data-rel="gallery" class="swipebox" title="JASMIN JEWELRY">
                    <figcaption class="bg-color4">
                      <div class="table">
                        <div class="inner"> <span>O</span>JASMIN JEWELRY</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/dltkorat.png" alt="Image"> 
                    <a href="set/images/portfolio2/dltkorat.png" data-rel="gallery" class="swipebox" title="กรมการขนส่งทางบก จังหวัดนครราชสีมา จอหอ">
                    <figcaption class="bg-color3">
                      <div class="table">
                        <div class="inner"> <span>O</span>กรมการขนส่งทางบก จังหวัดนครราชสีมา จอหอ</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                  <figure> <img src="set/images/portfolio/rayongsupplier.png" alt="Image"> 
                    <a href="set/images/portfolio2/rayongsupplier.png" data-rel="gallery" class="swipebox" title="บริษัท ออลล์ซัพพลายเออร์ จำกัด">
                    <figcaption class="bg-color4">
                      <div class="table">
                        <div class="inner"> <span>O</span>บริษัท ออลล์ซัพพลายเออร์ จำกัด</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                  <figure> <img src="set/images/portfolio/fotomemory.png" alt="Image"> 
                    <a href="set/images/portfolio2/fotomemory.png" data-rel="gallery" class="swipebox" title="foto memory">
                    <figcaption class="bg-color2">
                      <div class="table">
                        <div class="inner"> <span>O</span> foto memory</div>
                      </div>
                    </figcaption>
                    </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/digitalmarketing.png" alt="Image"> 
                  <a href="set/images/portfolio2/digitalmarketing.png" data-rel="gallery" class="swipebox" title="บริษัท ดิจิตอล มาร์เก็ตติ้ง เซ็นเตอร์ จำกัด">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ดิจิตอล มาร์เก็ตติ้ง เซ็นเตอร์ จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/goldenland.png" alt="Image"> 
                  <a href="set/images/portfolio2/goldenland.png" data-rel="gallery" class="swipebox" title="บริษัท สุวรรณภูมิ ทราเวล คอนซัลแท็นแอนด์ เซอร์วิส จำกัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท สุวรรณภูมิ ทราเวล คอนซัลแท็นแอนด์ เซอร์วิส จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/tanabordeedesign.png" alt="Image"> 
                  <a href="set/images/portfolio2/tanabordeedesign.png" data-rel="gallery" class="swipebox" title="บริษัท ธนบดี ดีไซน์ จำกัด">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ธนบดี ดีไซน์ จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.15s">
                <figure> <img src="set/images/portfolio/medeehotsale.png" alt="Image"> 
                  <a href="set/images/portfolio2/medeehotsale.png" data-rel="gallery" class="swipebox" title="me-d hot sale">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span>me-d hot sale</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/awasadagrandview.png" alt="Image"> 
                  <a href="set/images/portfolio2/awasadagrandview.png" data-rel="gallery" class="swipebox" title="โครงการอวัสดา แกรนด์ วิว">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>โครงการอวัสดา แกรนด์ วิว</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/baansuanklangdong.png" alt="Image"> 
                  <a href="set/images/portfolio2/baansuanklangdong.png" data-rel="gallery" class="swipebox" title="โครงการบ้านสวนกลางดง">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>โครงการบ้านสวนกลางดง</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/s-drug24.png" alt="Image"> 
                  <a href="set/images/portfolio2/s-drug24.png" data-rel="gallery" class="swipebox" title="ระบบขายส่งยาออนไลน์">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>ระบบขายส่งยาออนไลน์</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class=" wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/truck101online.png" alt="Image"> 
                  <a href="set/images/portfolio2/truck101online.png" data-rel="gallery" class="swipebox" title="Truck101online">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span>Truck101online</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/paisteel.png" alt="Image"> 
                  <a href="set/images/portfolio2/paisteel.png" data-rel="gallery" class="swipebox" title="บริษัท พาย สตีล จำกัด">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท พาย สตีล จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/riewlai.png" alt="Image"> 
                  <a href="set/images/portfolio2/riewlai.png" data-rel="gallery" class="swipebox" title="Riew Lai">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>Riew Lai</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/2020.png" alt="Image"> 
                  <a href="set/images/portfolio2/2020.png" data-rel="gallery" class="swipebox" title="บริษัท ทเวนตี้ ทเวนตี้ เอนเตอร์เทนเมนต์ จำกัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ทเวนตี้ ทเวนตี้ เอนเตอร์เทนเมนต์ จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/sriprathumyotha.png" alt="Image"> 
                  <a href="set/images/portfolio2/sriprathumyotha.png" data-rel="gallery" class="swipebox" title="บริษัท ศรีปทุมโยธา จำกัด">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ศรีปทุมโยธา จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/simmersmith.png" alt="Image"> 
                  <a href="set/images/portfolio2/simmersmith.png" data-rel="gallery" class="swipebox" title="Simmer Smith">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> Simmer Smith </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/syrup.png" alt="Image"> 
                  <a href="set/images/portfolio2/syrup.png" data-rel="gallery" class="swipebox" title="บริษัท ไซรัป จำกัด">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ไซรัป จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure><img src="set/images/portfolio/papadishes.png" alt="Image"> 
                  <a href="set/images/portfolio2/papadishes.png" data-rel="gallery" class="swipebox" title="โต๊ะจีน เฉ่า บริการ">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>โต๊ะจีน เฉ่า บริการ</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/haifulry.png" alt="Image"> 
                  <a href="set/images/portfolio2/haifulry.png" data-rel="gallery" class="swipebox" title="HAIFULRY Hair Tonic Shampoo">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>HAIFULRY Hair Tonic Shampoo</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/bangvita.png" alt="Image"> 
                  <a href="set/images/portfolio2/bangvita.png" data-rel="gallery" class="swipebox" title="บริษัท เนเจอร์โปร (ประเทศไทย) จำกัด">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท เนเจอร์โปร (ประเทศไทย) จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/genztyle.png" alt="Image"> 
                  <a href="set/images/portfolio2/genztyle.png" data-rel="gallery" class="swipebox" title="บริษัท อัลติเมทลิฟวิ่ง จำกัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท อัลติเมทลิฟวิ่ง จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/beefastener.png" alt="Image"> 
                  <a href="set/images/portfolio2/beefastener.png" data-rel="gallery" class="swipebox" title="บริษัท บี ฟาสเทนเนอร์ จํากัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท บี ฟาสเทนเนอร์ จํากัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/makemistakestore.png" alt="Image"> 
                  <a href="set/images/portfolio2/makemistakestore.png" data-rel="gallery" class="swipebox" title="MAKE MISTAKE STORE">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>MAKE MISTAKE STORE</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure><img src="set/images/portfolio/tmookajok.png" alt="Image"> 
                  <a href="set/images/portfolio2/tmookajok.png" data-rel="gallery" class="swipebox" title="บริษัท ต.หมูกระจกโคราช ฟู้ด โปรดักส์ จำกัด">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ต.หมูกระจกโคราช ฟู้ด โปรดักส์ จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/inkjet45.png" alt="Image"> 
                  <a href="set/images/portfolio2/inkjet45.png" data-rel="gallery" class="swipebox" title="บริษัท ต้นฉบับ จำกัด">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span> บริษัท ต้นฉบับ จำกัด </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/atlerdesign.png" alt="Image"> 
                  <a href="set/images/portfolio2/atlerdesign.png" data-rel="gallery" class="swipebox" title="ATLER DESIGN">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>ATLER DESIGN </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/ninedotz.png" alt="Image"> 
                  <a href="set/images/portfolio2/ninedotz.png" data-rel="gallery" class="swipebox" title="บริษัท ไนน์ดอทซ์ จำกัด">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>บริษัท ไนน์ดอทซ์ จำกัด</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure><img src="set/images/portfolio/savvydiamond.png" alt="Image"> 
                  <a href="set/images/portfolio2/savvydiamond.png" data-rel="gallery" class="swipebox" title="SAVVY Diamond">
                  <figcaption class="bg-color3">
                    <div class="table">
                      <div class="inner"> <span>O</span>SAVVY Diamond</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/PlayHouseTheatre.png" alt="Image"> 
                  <a href="set/images/portfolio2/PlayHouseTheatre.png" data-rel="gallery" class="swipebox" title="Theatre Ticketing System">
                  <figcaption class="bg-color4">
                    <div class="table">
                      <div class="inner"> <span>O</span>Theatre Ticketing System</div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/BaiyokeRoomReservation.png" alt="Image"> 
                  <a href="set/images/portfolio2/BaiyokeRoomReservation.png" data-rel="gallery" class="swipebox" title="Baiyoke Hotel Reservation System">
                  <figcaption class="bg-color2">
                    <div class="table">
                      <div class="inner"> <span>O</span>Baiyoke Hotel Reservation System </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
              <li class="double wow fadeInUp" data-wow-delay="0.10s">
                <figure> <img src="set/images/portfolio/2pmaddicts.png" alt="Image"> 
                  <a href="set/images/portfolio2/2pmaddicts.png" data-rel="gallery" class="swipebox" title="2PM Club">
                  <figcaption class="bg-color1">
                    <div class="table">
                      <div class="inner"> <span>O</span>2PM Club </div>
                    </div>
                  </figcaption>
                  </a> </figure>
              </li>
            </ul>
          </div>
          <!-- end col-12 --> 
        </div>
        <!-- end row --> 
      </div>
      <!-- end container --> 
    </div>
    <!-- end portfolio --> 
  </section>
  <!-- end showcase --> 
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
        created(){
            
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

///////setting////





// var $ = jQuery;
// $.noConflict();


// $(document).ready(function() {
// });


//////setting////
    });

        },
        mixins:    [ ],
}
</script>


<style scoped>
    
</style>