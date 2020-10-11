  
    var velocity = 0.2;    


    function update() {
        /*janela = $(window) scrollTop() obtém a posição vertical do scroll do mouse */
        /*obs se + ira subir a imagem de baixo para cima se for - imagem ira subir imagem de cima para baixo*/
        var currentWidth = $(this).width();
        let height = $(this).height();
        let position = $(window).scrollTop()-100; 

        $(".bg-second-image").each(function() {
                $(this).css('backgroundPosition','50% ' +Math.round((height - position) * velocity) + 'px');
        });        
    };

    $(window).bind('scroll', update);