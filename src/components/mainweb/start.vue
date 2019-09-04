<template>
  <div id='app' ref="start" style="width:100%; height:100%; position:relative;"> 
        <div class="loading">
        <div class="loader">
            <h2 class="loading-text cd-headline clip is-full-width"> <span class="cd-words-wrapper"> <b class="is-visible">Hey please wait</b> <b>Still loading</b></span> </h2>
            <div class="loading-image"><img src="@/assets/images/loading.gif" alt="Image"></div>
        </div>
        <!-- end loader -->
    </div>
    <!-- end loading -->
    <div class="transition-overlay"></div>
    <!-- end transition-overlay -->
    <div class="navigation" role="navigation">
        <div class="video-bg hidden-sm hidden-xs">
            <video autoplay muted loop><source src="videos/video3.mp4" type="video/mp4"></video>
        </div>
        <!-- end video-bg -->
        <div class="table">
            <div class="inner">
                <nav>
                    <ul>


                        <linkweb></linkweb>                          
                        <!-- <router-link  :to="{ path: '/' }"  >
                            <li><a href="javascript:function() { return false; }">HOME</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'showcase' }"  >
                            <li><a href="javascript:function() { return false; }">SHOWCASE</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'about' }"  >
                            <li><a href="javascript:function() { return false; }">ABOUT</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'service' }"  >
                            <li><a href="javascript:function() { return false; }">SERVICE</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'blog' }"  >
                            <li><a href="javascript:function() { return false; }">BLOG</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'contact' }"  >
                            <li><a href="javascript:function() { return false; }">CONTACT</a></li>
                        </router-link> -->
                        <!-- <li><a href="showcase.html">SHOWCASE</a></li>
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
                <div class="col-xs-12"> <a href="index.html"><img src="@/assets/images/ids-logo.png" alt="Image" class="logo"></a>
                    <div class="hamburger-menu"> <span></span> <span></span> <span></span> <span></span> </div>
                </div>
                <!-- end col-12 -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </nav>
    <!-- end navbar -->
    <section class="slider">
        <div class="slider-inner">
            <div class="banner">
                <div id="rev_slider_35_1" class="rev_slider fullwidthabanner">
                    <ul>
                        <li data-transition="scaledownfromtop" data-masterspeed="700"> <img src="@/assets/images/banner-slider.jpg" alt="Image">
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="-21" data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="300"
                                data-start="500" data-easing="Quad.easeIn" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="4700" data-endspeed="300">
                                <h2>ICE CREAM</h2>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="121" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="500" data-start="600"
                                data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5000" data-endspeed="300">
                                <h5>3D REMODELLING.ANIMATION</h5>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="bottom" data-voffset="80" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="600" data-start="1100"
                                 data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5100" data-endspeed="300"> <img src="@/assets/images/icon-mouse.png" alt="Image"> </div>
                        </li>
                        <!-- end banner 1 -->
                        <li data-transition="scaledownfromtop" data-masterspeed="700"> <img src="@/assets/images/banner-slider3.jpg" alt="Image">
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="-21" data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="300"
                                data-start="500" data-easing="Quad.easeIn" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="4700" data-endspeed="300">
                                <h2>BEAR BOOK</h2>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="121" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="600" data-start="1000"
                                data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5000" data-endspeed="300">
                                <h5>CREATIVE.STORY BOARD</h5>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="bottom" data-voffset="80" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="600" data-start="1100"
                                data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5100" data-endspeed="300"> <img src="@/assets/images/icon-mouse.png" alt="Image"> </div>
                        </li>
                        <!-- end banner 2 -->
                        <li data-transition="scaledownfromtop" data-masterspeed="700"> <img src="@/assets/images/banner-slider2.jpg" alt="Image">
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="-21" data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="300"
                                data-start="500" data-easing="Quad.easeIn" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="4700" data-endspeed="300">
                                <h2>HEAD FONE</h2>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="center" data-voffset="121" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="600" data-start="1000"
                                data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5000" data-endspeed="300">
                                <h5>VISUAL IDENDITY.BRANDING</h5>
                            </div>
                            <div class="tp-caption" data-x="center" data-y="bottom" data-voffset="80" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="600" data-start="1100"
                                data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" data-end="5100" data-endspeed="300"> <img src="@/assets/images/icon-mouse.png" alt="Image"> </div>
                        </li>
                        <!-- end banner 3 -->
                    </ul>
                    <!-- end ul -->
                </div>
                <!-- end rev_slider -->
            </div>
            <!-- end banner -->
        </div>
        <!-- end slider-inner -->
    </section>
    <!-- end slider -->
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
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.10s">
                                    <figure><img src="set/images/portfolio/cheevamitr.png" alt="Image">
                                        <a href="set/images/portfolio2/cheevamitr.png" data-rel="gallery" class="swipebox" title="บริษัท ชีวามิตร วิสาหกิจเพื่อสังคม จำกัด">
                                            <figcaption class="bg-color3">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> บริษัท ชีวามิตร วิสาหกิจเพื่อสังคม จำกัด</div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.15s">
                                    <figure> <img src="set/images/portfolio/hisokaori.png" alt="Image">
                                        <a href="set/images/portfolio2/hisokaori.png" data-rel="gallery" class="swipebox" title="บริษัท วีเม็ท กรุ๊ป(ประเทศไทย) จำกัด">
                                            <figcaption class="bg-color2">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> บริษัท วีเม็ท กรุ๊ป(ประเทศไทย) จำกัด</div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.05s">
                                    <figure> <img src="set/images/portfolio/onlinebkd.png" alt="Image">
                                        <a href="set/images/portfolio2/onlinebkd.png" data-rel="gallery" class="swipebox" title="บริษัท บางกอก ดรัก จำกัด">
                                            <figcaption class="bg-color1">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> บริษัท บางกอก ดรัก จำกัด </div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.10s">
                                    <figure> <img src="set/images/portfolio/helix.png" alt="Image">
                                        <a href="set/images/portfolio2/helix.png" data-rel="gallery" class="swipebox" title="บริษัท เฮลิกซ์ จํากัด">
                                            <figcaption class="bg-color4">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> บริษัท เฮลิกซ์ จํากัด</div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="wow fadeInUp" data-wow-delay="0.15s">
                                    <figure> <img src="set/images/portfolio/AnandaDevelopment.png" alt="Image">
                                        <a href="set/images/portfolio2/AnandaDevelopment.png" data-rel="gallery" class="swipebox" title="Ananda Recruit Web">
                                            <figcaption class="bg-color3">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> Ananda Recruit Web</div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.05s">
                                    <figure> <img src="set/images/portfolio/clinicya.png" alt="Image">
                                        <a href="set/images/portfolio2/clinicya.png" data-rel="gallery" class="swipebox" title="คลินิกยา">
                                            <figcaption class="bg-color1">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> คลินิกยา </div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="double wow fadeInUp" data-wow-delay="0.10s">
                                    <figure> <img src="set/images/portfolio/tpp.png" alt="Image">
                                        <a href="set/images/portfolio2/tpp.png" data-rel="gallery" class="swipebox" title="บริษัท ที.พี.พี. แลนด์ แอนด์ เฮ้าส์ จำกัด">
                                            <figcaption class="bg-color4">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span>บริษัท ที.พี.พี. แลนด์ แอนด์ เฮ้าส์ จำกัด </div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </li>
                                <li class="wow fadeInUp" data-wow-delay="0.15s">
                                    <figure> <img src="set/images/portfolio/skland.png" alt="Image">
                                        <a href="set/images/portfolio2/skland.png" data-rel="gallery" class="swipebox" title="SK LAND">
                                            <figcaption class="bg-color2">
                                                <div class="table">
                                                    <div class="inner"> <span>O</span> SK LAND </div>
                                                </div>
                                            </figcaption>
                                        </a>
                                    </figure>
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
        <section class="services-list">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">Services</h2>
                            <h5 class="wow fadeInUp" data-wow-delay="0.10s">Amazing project with unique ideas</h5>
                            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box -->
                    </div>
                    <!-- end col-12 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.05s">
                        <h4>STRATEGY</h4>
                        <p>ช่วยลูกค้าในการวางแผนกลยุทธ์ในการทำการทำเว็บไซต์และการตลาดออนไลน์ ให้ได้ประสิทธิภาพสูงสุดในงบประมาณที่ลูกค้าควบคุมได้ ตั้งแต่เริ่มต้น เพื่อให้ได้ประสิทธิภาพของการทำการตลาดสูงสุด</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.10s">
                        <h4>DESIGN</h4>
                        <p>บริการจัดทำเว็บไซต์หลายหลายรูปแบบ ตามความตั้งการของลูกค้า จะรองรับการทำงานบนทุกอุปกรณ์ ดังนั้นลูกค้าที่เลือกทำเว็บไซต์กับเราสามารถทำการตลาดออนไลน์ได้ทันที</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.15s">
                        <h4>ONLINE MARKETING</h4>
                        <p>เราพร้อมให้แนะนำที่เหมาะสมกับแต่ละธุรกิจ ให้ตรงกับความต้องการของกลุ่มผู้ใช้งาน เพื่อผลลัพธ์ที่ดีให้กับธุรกิจของคุณ เช่น ระบบการขายแบบไหนที่เหมาะต่อผู้บริโภค เพื่อลดเวลาและขั้นตอนการทำงาน เพิ่มประสิทธิภาพในการทำธุรกิจให้มากขึ้น</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.05s">
                        <h4>DEVELOPMENT</h4>
                        <p>เรามุ่งมั่นในการพัฒนาการให้บริการลูกค้า ให้เกิดความประทับใจและตอบโจทย์ในทุกๆ ธุรกิจ เพื่อผลลัพธ์ที่ดี นำไปสู่เป้าหมายที่วางไว้</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.10s">
                        <h4>GOOGLE ADWORDS</h4>
                        <p>บริการบริหารจัดการโฆษณาบน Google AdWords ที่จะเป็นตัวช่วยลูกค้าในการบริหารจัดการแคมเปญบน Google AdWords ให้มีประสิทธิภาพมากยิ่งขึ้น ช่วยลูกค้าในการวิเคราะห์เว็บไซต์ คีย์เวิร์ด คำโฆษณาให้มีประสิทธิภาพ เพื่อเป้าหมายของลูกค้า</p>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 col-sm-12 wow fadeInUp services-blog" data-wow-delay="0.15s">
                        <h4>MA & SUPPORT</h4>
                        <p>บริการเป็นที่ปรึกษาส่วนตัวทางธุรกิจให้กับลูกค้าในการทำการจัดทำเว็บไซต์ แอพพลิเคชั่น การตลาดออนไลน์ สำหรับลูกค้าของเราทุกแพ็คเก็จ และบริการอัพเดทข้อมูลสำหรับลูกค้าที่ไม่มีเวลาในการอัพเดทเว็บไซต์ หรือ Social Media</p>
                    </div>
                    <!-- end col-4 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end services-list -->
        <section class="quote wow fadeInUp" data-wow-delay="0.5s">
            <div class="columms background-image">
                <div class="table">
                    <div class="inner">
                        <h2><span>IDEA SPACE</span><br> DIGITAL MARGETING</h2>
                        <a href="#">+</a> </div>
                    <!-- end inner -->
                </div>
                <!-- end table -->
            </div>
            <!-- end columms -->
            <div class="columms">
                <div class="table">
                    <div class="inner" style="vertical-align: top;">
                        <p>IDEA SPACE บริการวางกลยุทธ์การตลาดออนไลน์ครบวงจร มีเพียงไอเดีย รับพร้อมสร้างไอเดียเราก็พร้อมทำไอเดียของคุณให้เป็นจริง เพื่อเข้าถึงกลุ่มคนได้ง่ายขึ้น IDEA SPACE พร้อมที่ช่วยคุณไปถึงเป้าหมายที่ดีที่สุด ด้วยประสบการณ์มากกว่า 10 ปี
                            โดยมีบริการต่างๆ ดังนี้</p>
                        <ul class="list-about">
                            <li class="list"><i class="material-icons">&#xe5cc;</i> วางกลยุทธ์การตลาดออนไลน์</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> ออกแบบพัฒนาเว็บไซต์</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> Mobile Application</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> โฆษณา Google Adwords</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> โฆษณา Facebook Ads</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> Search Engine Optimization (SEO)</li>
                            <li class="list"><i class="material-icons">&#xe5cc;</i> บริการดูแลอัพเดทเว็บไซต์ &amp; Facebook Fanpage</li>
                        </ul>
                        <!--end list-about-->
                    </div>
                    <!-- end inner -->
                </div>
                <!-- end table -->
            </div>
            <!-- end columms -->
        </section>
        <!-- end quote -->
        <section class="wave-awards wow fadeInUp" data-wow-delay="0.5s">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <h3>OUR CUSTOMERS</h3>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-12 col-sm-12 customer-logo">
                        <div class="row">
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/สสส-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/divana-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/2020-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/dlt-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/helix-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/baiyokehotel-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/skland-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/cheevamitr-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/lohdee-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/AnandaDevelopment-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/bangkokdrug-logo.png" alt="Image"></div>
                            <!-- end col-4 -->
                            <div class="col-md-2 col-sm-2 text-center"> <img src="@/assets/images/logo/clinicya-logo.png" alt="Image"></div>
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
        <!-- end wave-awards -->
    </main>
    <div class="footer-space"></div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center"><span class="logo">IDEA SPACE</span>
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
// import $ from 'jquery'
// import "@/assets/js/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "wowjs/dist/wow.min.js";
// import "jquery.counterup/jquery.counterup.min.js";
// import "@/assets/js/jquery.textrotater.js";
// import "jquery.stellar/jquery.stellar.js";
// import "@/assets/js/jquery.vopacity.js";
// import "swipebox/src/js/jquery.swipebox.min.js";
// // import "@/assets/js/settings.js";
// import "@/assets/fonts/fpslineicons.woff";
// import "@/assets/fonts/jaapokkienchance-regular-webfont.woff2";
// import "@/assets/fonts/Kanit-Regular.ttf";





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
        $(".slider").addClass("goes-up");
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


<style lang="scss" scoped>
  // @import "assets/css/main.css";
</style>