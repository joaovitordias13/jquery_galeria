$(document).ready(function(){
    $('header button').click(function(){
       $('form').slideDown();
    });

    $('.butao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay-img">
                <a href="${enderecoDaNovaImagem}" target="_blank" tittle='Ver imagem em tamanho real'>
                    Ver imagem no tamanho real 
                </a>
         `).appendTo(novoItem);
         $(novoItem).appendTo('ul');
         $(novoItem).fadeIn(1000);  //AppenTo para inserir um elemento HTML dentro de uma tag
         $("#imagem-nova").val('');
    });
})

