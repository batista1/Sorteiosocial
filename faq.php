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
    if (window.location.href.split("/")[2] == "localhost" && server == false) {
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

                        <h3>Perguntas e respostas</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="index.html">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">Perguntas e respostas</span>
                                </a>
                            </span>
                        </div>

                    </div>  
                    <!-- kopa-breadcrumb -->
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-16 -->

            <section class="kopa-area kopa-area-20">

                <div class="container">

                    <div class="row ct-row-3">
                    
                        <div class="main-col col-md-9 col-sm-9 col-xs-9 col-md-push-3">

                            <div class="widget reading-module-faq-list-1">
                                <h3 class="widget-title style-09">Tire aqui todas suas dúvidas</h3>
                                <div class="widget-content">
                                    <p>Relacionamos as perguntas mais comuns para você poder tirar qualquer dúvida rapidamente</p>
                                    <ul class="faq-list" id="faq">
                                    </ul>
                                                        
                                </div>
                            </div>
                            <!-- widget --> 
                    
                        </div>
                        <!-- col-md-9 -->
                    
                        <div class="sidebar col-md-3 col-sm-3 col-xs-3 col-md-pull-9">

                            <div class="widget reading-module-form-1">
                                <div class="widget-content">
                                    <div class="ct-form-box style-01">
                                        <div id="respond" class="comment-respond">
                                            <form class="ct-form-2" action="processForm.php" method="post" novalidate="novalidate">

                                                <span></span>

                                                <h4>Alguma dúvida?</h4>

                                                <p class="input-block">
                                                    <input type="text" value="Nome"  name="name" class="valid">
                                                </p>

                                                <p class="input-block">
                                                    <input type="text" value="Email" onfocus="if(this.value=='Email')this.value='';" onblur="if(this.value=='')this.value='Email';" name="email" class="valid">
                                                </p>

                                                <p class="textarea-block">
                                                    <textarea name="message" placeholder="Escreva sua pergunta" cols="88" rows="3"></textarea>
                                                </p>
                                                
                                                <p class="input-block btn-block clearfix text-center">           
                                                    <input type="submit" value="Enviar mensagem" class="ct-submit-2">
                                                </p>
                                                
                                            </form>

                                            <div id="response-2"></div>
                                        </div>
                                    </div>
                                    <!-- form-box -->
                                </div>
                            </div>
                            <!-- widget --> 

                           
                            <!-- widget --> 
                    
                        </div>
                        <!-- col-md-3 -->
                    
                    </div>
                    <!-- row --> 
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-18 -->

        </div>
        <!-- main-content -->

        
       <?php include 'site/includes/footer.html'; ?>
    <!-- slide-area -->

    
    <script src="site/js/jquery-1.12.4.min.js"></script>
    <script src="site/js/bootstrap.min.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js"></script>

    <script type="text/javascript">
        socket = io.connect(window.ws)
        socket.emit("faq_load")
        socket.on("faq_load", function(data) {

            console.log(data)
            $.each(data, function(k, v) {                
                $("#faq").append(
                    '<li>'+
                        '<div>'+
                            '<h4>'+
                                '<span class="order-num"></span>'+
                                v.pergunta+
                            '</h4>'+
                            '<p>'+
                                v.resposta+
                            '</p> '+
                        '</div>'+
                    '</li>'
                    )
            })
        })
        </script>

</body>

</html>
