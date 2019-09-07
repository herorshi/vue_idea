<template>
    <div  style="width:100%; height:100%; position:relative;">
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
    <section class="int-header hero2">
        <div class="table">
            <div class="inner">
                <div class="container">
                    <h3>About</h3>
                    <p>We are the creative design agency that brings ambitious brands to the next level by transforming their digital business environment.</p>
                    <img src="set/images/icon-mouse.png" alt="Image"> </div>
                <!-- end container -->
            </div>
            <!-- end inner -->
        </div>
        <!-- end table -->
    </section>
    <!-- end int-header -->
    <main>
        <section class="wave-things">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">services</h2>
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
                        <h4>DEVERLOPMENT</h4>
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
        <!-- end wave-things -->
        <section class="process">
            <div class="video">
                <video muted autoplay data-stellar-ratio="0.5" loop><source src="videos/video3.mp4" type="video/mp4"></video>
            </div>
            <!-- end video -->
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title-box">
                            <h2 class="wow fadeInUp" data-wow-delay="0.05s">process</h2>
                            <h5 class="wow fadeInUp" data-wow-delay="0.10s">Amazing features with creative portfolio</h5>
                            <span class="shape wow fadeInUp" data-wow-delay="0.15s">O</span> </div>
                        <!-- end title-box -->
                    </div>
                    <!-- end col-12 -->
                    <div class="col-md-3 wow fadeIn" data-wow-delay="0.05s"> <span class="numbers">1</span>
                        <h5 class="steps">PLANNING</h5>
                        <p>วางแผนงานโดยมืออาชีพ</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 wow fadeIn" data-wow-delay="0.10s"> <span class="numbers">2</span>
                        <h5 class="steps">DESIGN</h5>
                        <p>Design งานตามความต้องการ</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 wow fadeIn" data-wow-delay="0.15s"> <span class="numbers">3</span>
                        <h5 class="steps">DEVELOPMENT</h5>
                        <p>พัฒนางาน ระบบ ให้มีความสมบูรณ์</p>
                    </div>
                    <!-- end col-3 -->
                    <div class="col-md-3 wow fadeIn" data-wow-delay="0.20s"> <span class="numbers">4</span>
                        <h5 class="steps">LAUNCH</h5>
                        <p>ดำเนินการโดยทีมงานคุณภาพ</p>
                    </div>
                    <!-- end col-3 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end process -->
        <section class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 wow fadeInUp" data-wow-delay="0.5s">
                        <h2>ทำไมต้อง IDEA SPACE</h2>
                        <h3>บริการครบวงจร ให้คำแนะนำเสมือนคนในครอบครัว</h3>
                        <p>มั่นใจได้เลยประสบการณ์ที่มากกว่า 10 ปี จะทำให้คุณได้รับความคุ้มค่ากลับไปอย่างแน่นอน เรามีทีมที่พร้อมและมุ่งมั่นที่จะช่วยเป็นคู่คิดให้ธุรกิจของคุณเป็นไปตามแผน ลดขั้นตอนในการทำงาน เพิ่มประสิทธิภาพของงานได้มากขึ้นกว่าเดิม </p>
                        <p>เราพร้อมช่วยให้แบรนด์ของคุณเป็นที่รู้จักได้มากขึ้น เพิ่มยอดขาย เจาะกลุ่มลูกค้าได้กว้างขึ้น ด้วยภาพลักษณ์ที่มีความโดดเด่นในโลกของออนไลน์ เราทราบดีว่าแต่ละธุรกิจมีความแตกต่างไม่เหมือนกัน ในการคิดออกแบบพัฒนา รวมถึงโปรแกรมต่างๆ ที่ใช้งานจะถูกออกแบบอย่างรอบคอบ
                            เพื่อให้เกิดประโยชน์สูงสุดต่อลูกค้า และหากมีปัญหาใดๆ ก็พร้อมให้คำปรึกษาอย่างรวดเร็ว </p>
                    </div>
                    <!-- end col-7 -->
                    <div class="col-md-5 wow fadeInUp" data-wow-delay="0.10s">
                        <!--<img src="set/images/image1.jpg" alt="Image">-->
                        <video muted autoplay loop><source src="http://www.ideaspace.co.th/videos/Dashboard.mp4" type="video/mp4"></video>
                    </div>
                    <!-- end col-5 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
        <!-- end about -us -->
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
                    <div class="inner">
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
        <section class="team-members wow fadeInUp" data-wow-delay="0.5s">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 member">
                        <div class="member-info">
                            <h3>JESSICA MCLOREN</h3>
                            <span>CREATIVE COPYWRITER</span> </div>
                        <!-- end member-info -->
                        <figure> <img src="set/images/team-member1.jpg" alt="Image"> </figure>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 member">
                        <div class="member-info">
                            <h3>CHRIS WILLAM</h3>
                            <span>CREATIVE ART DIRECTOR</span> </div>
                        <!-- end member-info -->
                        <figure> <img src="set/images/team-member2.jpg" alt="Image"> </figure>
                    </div>
                    <!-- end col-4 -->
                    <div class="col-md-4 member">
                        <div class="member-info">
                            <h3>MELISSA CARTER</h3>
                            <span>FRONT-END DEVELOPER</span> </div>
                        <!-- end member-info -->
                        <figure> <img src="set/images/team-member3.jpg" alt="Image"> </figure>
                    </div>
                    <!-- end col-4 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end containe -->
        </section>
        <!-- end team-members -->
        <section class="logos">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>HAPPY CLIENTS</h4>

                    </div>
                    <!-- end col-4 -->
                    <div class="col-sm-12 customer-logos">
                        <ul>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/สสส-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/divana-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/2020-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/dlt-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/helix-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/baiyokehotel-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/skland-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/cheevamitr-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/lohdee-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/AnandaDevelopment-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/bangkokdrug-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/clinicya-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/cho-on-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/ozonediw-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/goldenland-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/thankgoditsorganic-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/jasminjewelry-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/medeehotsale-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/baansuanklangdong-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/tpp-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/hunsavacation-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/truck101online-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/simmersmith-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/tonchabub-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/fotomemory-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/tharisjewelry-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/digitalmarketingcenter-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/tanabordeedesign-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/awasadagrandview-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/s-drug24-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/paisteel-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/riewlai-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/sriprathumyotha-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/dkidshop-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/syrup-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/papadishes-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/beefastener-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/makemistakestore-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/tmookajok-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/insureinbox-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/atlerdesign-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/ninedotz-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/savvydiamond-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/2pmaddicts-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/rayongsupplier-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/haifulry-logo.png" alt="Image"> </figure>
                            </li>
                            <li class="col-md-2 col-sm-2 text-center">
                                <figure><img src="set/images/logo/genztyle-logo.png" alt="Image"> </figure>
                            </li>

                        </ul>
                    </div>
                    <!-- end col-8 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
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