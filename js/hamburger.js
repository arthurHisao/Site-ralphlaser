    function menu() {
        $('.menu-btn').on('click', function(event) {
            if(!($('.menu-btn').hasClass('open'))) {
                $('.menu-btn').toggleClass('open');
                $('.bar').css({'transform': 'translateX(-300px)'});
                $('.menu-btn_burger').append('<style>.menu-btn_burger::before, .menu-btn_burger::after, .menu-btn_burger{background-color: #FF0021}</style>');
                event.stopPropagation(); // evita que o menu continue existindo apos fechar   
                $('.transparent-div').css({'display': 'block'});
            } else {
                $('.bar').css({'transform': 'translateX(0px)'}); 
                $('.menu-btn_burger').append('<style>.menu-btn_burger::before, .menu-btn_burger::after, .menu-btn_burger{background-color: #000}</style>');
                $('.transparent-div').css({'display': 'none'});
                $('.menu-btn').toggleClass('open');
            }
        });  

        
        $('.transparent-div').click(function() {
            $('.bar').css({'transform': 'translateX(0px)'}); 
            $('.menu-btn_burger').append('<style>.menu-btn_burger::before, .menu-btn_burger::after, .menu-btn_burger{background-color: #000}</style>');
            $('.menu-btn').toggleClass('open');
            $('.transparent-div').css({'display': 'none'});

        });
    };

    // executando a funcao
    menu();