<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Sorteio Social</title>
      <meta name="description" content="A melhor experiência em gestão de clientes." />
      <meta charset=utf-8>
      <link rel="icon" href="src/img/icon.png" />
      <meta name="robots" content="index,follow">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="theme-color" content="#80CBC4">
      <meta name="mobile-web-app-capable" content="yes">
      <meta property="og:locale" content="pt_BR">
      <meta property="og:url" content="http://sorteiosocial.com">
      <meta property="og:title" content="Sorteio Social">
      <meta property="og:site_name" content="Sorteio Social">
      <meta property="og:description" content="Sorteios online">
      <meta property="og:image" content="src/img/Sorteio.png">
      <meta property="og:image:type" content="image/png">
      <meta property="fb:app_id" content="668117953338216" />
      <link rel="stylesheet" href="site/css/bootstrap.min.css" media="all" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" media="all">
      <link rel="stylesheet" href="site/css/themify-icons.css" media="all" />
      <link rel="stylesheet" href="site/css/superfish.css" media="all" />
      <link rel="stylesheet" href="site/css/megafish.css" media="all" />
      <link rel="stylesheet" href="site/css/jquery.navgoco.css" media="all" />
      <link rel="stylesheet" href="site/css/jquery.mCustomScrollbar.css" media="all" />
      <link rel="stylesheet" href="site/css/owl.carousel.css" media="all" />
      <link rel="stylesheet" href="site/css/owl.theme.css" media="all" />
      <link rel="stylesheet" href="site/css/animate.css" media="all" />
      <link rel="stylesheet" href="site/css/style.css" media="all">
      <script src="site/js/modernizr.custom.js"></script>
      <!-- Le fav and touch icons -->
      <link rel="shortcut icon" href="img/icons/favicon.ico">
      <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png">
      <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-touch-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-touch-icon-114x114.png">
   </head>
   <script type="text/javascript">
      window.version = "A1oDaa"
      window.server = true
      if (window.location.href.split("/")[2] == "localhost" && server == true) {
          console.log("operando local")
          window.ws = "localhost:8080"
          window.cors = "http://localhost:8081/"
          window.config_base = {
              "facebook_id": '668117953338216',
              "analytcs_id": 'UA-77164828-2'
          }
      } else {
          window.ws = "http://preview.sorteiosocial.com:8080/"
          window.cors = "http://preview.sorteiosocial.com:8081/"
          window.config_base = {
              "facebook_id": '668117953338216',
              "analytcs_id": 'UA-77164828-2'
          }
      }
   </script>
   <body class="">
      <div class="main-container">
         <?php include 'site/includes/menu.html'; ?>

        <div id="main-content">

            <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">

                <div class="kopa-area-tg-5">
                    <span></span>
                </div>

                <div class="container">

                    <div class="kopa-breadcrumb">

                        <h3>Todos os sorteios</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">Shop categories</span>
                                </a>
                            </span>
                        </div>

                    </div>  
                    <!-- kopa-breadcrumb -->
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-16 -->

            <section class="kopa-area kopa-area-20 main-col style-01">

                <div class="container">
                    <!-- row --> 

                    <div class="row">
                    
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="woocommerce-main-primary">

                                <div class="woocommerce-main-content">

                                    <ul class="ul-mh row" id="sort">
                                        
                                        
                                        
                                    </ul>

                                </div>
                                <!-- woocommerce-main-content --> 

                                

                            </div>
                            <!-- woocommerce-main-primary --> 
                    
                        </div>
                        <!-- col-md-12 -->
                    
                    </div>
                    <!-- row --> 
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-18 -->

        </div>
        <!-- main-content -->

       
         <?php include 'site/includes/footer.html'; ?>

    
    <script src="site/js/jquery-1.12.4.min.js"></script>
    <script src="site/js/bootstrap.min.js"></script>
    <script src="site/js/superfish.min.js"></script>
    <script src="site/js/jquery.navgoco.min.js"></script>
    <script src="site/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="site/js/jquery.mousewheel.min.js"></script>
    <script src="site/js/imagesloaded.pkgd.min.js"></script>
    <script src="site/js/masonry.pkgd.min.js"></script>
    <script src="site/js/owl.carousel.min.js"></script>
    <script src="site/js/jquery.sliderPro.min.js"></script>
    <script src="site/js/jquery.validate.min.js"></script>
    <script src="site/js/jquery-ui.min.js"></script>
    <script src="site/js/jquery.matchHeight-min.js"></script>
    <script src="site/js/jquery.wow.js"></script>
	<script src="site/js/custom.js" charset="utf-8"></script>
      <script src="src/js/moment.js"></script>
      <script src="site/js/countdown.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js"></script>
    <script type="text/javascript">
         socket = io.connect(window.ws)
        socket.emit("search_sort")
         socket.on("search_sort", function(data) {
             console.log(data)
             $.each(data, function(k, v) {
                 $("#sort").append('<div class="ms-item-01 show col-md-3 col-sm-6 col-xs-12" data-val="1" >' +
                     '<article class="entry-item ct-item-1 style-01">' +
                     '<div class="entry-thumb">' +
                     '<a href="#">' +
                     '<img src="' + v.data.img + '">' +
                     '</a>' +
                     '<div class="entry-content">' +
                     '<header>' +
                     '<h4 class="entry-title"><a href="#">' + v.data.titulo + '</a></h4>' +
                     '</header>' +
                     '<p>'+v.data.desc+'</p>' +
                     '<p class="ct-space-1"></p>' +
                     '<div class="ct-icon-1">' +
                     '<p><span></span>' + v.tickets + '</p>' +
                     '</div>' +
                     '</div>' +
                     '</div>' +
                     '<footer>'+
                        '<div class="ft-wrap style-01">'+
                            '<ul>'+
                                '<li>'+
                                    '<a href="#">Sorteio dia: '+
                                         moment(v.data.data).format('DD//MM/YYYY') +
                                    '</a>'+
                                '</li>   '+
                                
                            '</ul>'+
                        '</div>'+
                        '<div class="ft-wrap style-02">'+
                            '<ul>'+
                                '<li>'+
                                    '<div class="add-to-wishlist">'+
                                        '<div>'+
                                            '<a href="#" class="add_to_wishlist">'+
                                                '<i class="ti-heart"></i>   '+
                                                '<span>Wishlist</span> '+
                                            '</a>'+
                                        '</div>'+
                                    '</div>'+
                                '</li> '+
                                '<li>'+
                                    '<a href="#">'+
                                        '<i class="ti-shopping-cart"></i>'+
                                        '<span>Add to cart</span>'+
                                    '</a>'+
                                '</li>   '+
                                '<li>'+
                                    '<a href="#" target="blank">'+
                                        '<i class="ti-new-window"></i>'+
                                        '<span>Details</span>'+
                                    '</a>'+
                                '</li>     '+
                            '</ul>'+
                        '</div>'+
                    '</footer>'+

                     '</article>' +
                     '<div class="badge-icon-1 style-01">' +
                     'Leilão' +
                     '<span></span>' +
                     '</div>' +
                     '</div>')
             })
         })
    </script>
    
</body>

</html>
