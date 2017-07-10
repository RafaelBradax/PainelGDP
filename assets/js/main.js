$(document).ready(function () {

    var cookie = $.cookie('menu');

    if(cookie == 'view'){
        $('#user_panel').removeClass('in');
        $('#create_panel').removeClass('in');
        $('#view_panel').addClass('in');
    }else if(cookie == 'create'){
        $('#view_panel').removeClass('in');
        $('#user_panel').removeClass('in');
        $('#create_panel').addClass('in');
    }else{
        $('#create_panel').removeClass('in');
        $('#view_panel').removeClass('in');
        $('#user_panel').addClass('in');
    }


    $('#user').click(function () {
        $.removeCookie('menu');
        $.cookie('menu','user',{
            expires : 10, 
            path : '/guiarestrito',
            domain : 'ulaula.ital.sp.gov.br'
        });
        console.log($.cookie('menu'));
    });

    $('#create').click(function () {
        $.removeCookie('menu');
        $.cookie('menu','create',{
            expires : 10, 
            path : '/guiarestrito',
            domain : 'ulaula.ital.sp.gov.br'
        });
        console.log($.cookie('menu'));
    });
    
    $('#view').click(function () {
        $.removeCookie('menu');
        $.cookie('menu','view',{
            expires : 10, 
            path : '/guiarestrito',
            domain : 'ulaula.ital.sp.gov.br'
        });
        console.log($.cookie('menu'));
    });   

    var cookie = $.cookie('menu');

    if(cookie == 'view'){
        $('#user_panel').removeClass('in');
        $('#create_panel').removeClass('in');
        $('#view_panel').addClass('in');
    }else if(cookie == 'create'){
        $('#view_panel').removeClass('in');
        $('#user_panel').removeClass('in');
        $('#create_panel').addClass('in');
    }else{
        $('#create_panel').removeClass('in');
        $('#view_panel').removeClass('in');
        $('#user_panel').addClass('in');
    }

    /**
    *
    * Foca o primeiro campo da pagina
    *
    */

    $('input:visible:enabled:first').focus();


    /**
    *
    *   Desabilita os botoes dos formularios
    *
    */




    $('#submit').attr('disabled','disabled');
    $('#confirm').attr('disabled','disabled');
    
    /**
    *
    *   SEARCHs
    *
    */

    $("#formulario input#nick_Administradores").blur(function(){
        

        var dados = $(this).val();
        $.post( "/guiarestrito/app/control/crud/administradores/verifica_nome.php", { valor : dados}, function( data ) {
            if(data){
                $('#nick_Administradores').css({"border-color" : "#F00", "padding": "2px"});
                $('#submit').attr('disabled','disabled');
                $('#confirm').attr('disabled','disabled');
                $('.result').css({"color" : "#F00"});
                $('.result').html('Nome indisponível');
            }else if($('#nick_Administradores').val() == ""){
                $('#submit').attr('disabled','disabled');
                $('#confirm').attr('disabled','disabled');
                $('.result').html('');

            }else{
                $('#nick_Administradores').css({"border-color" : "#0F0", "padding": "2px"});
                $('#submit').removeAttr('disabled');
                $('#confirm').removeAttr('disabled');
                $('.result').css({"color" : "#0F0"});
                $('.result').html('Nome disponível');
            } 
        });

        if($(this).val() == ""){
            $(this).css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }


    });


    $('#search_hoteis input').keyup(function(){
        var dados = $(this).val();
        console.log(dados);
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Hoteis.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    $('#search_bus input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Bus.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    
    $('#search_aeroportos input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Aeroportos.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    
    $('#search_taxi input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Taxi.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    $('#search_restaurantes input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Restaurantes.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    $('#search_fastfoods input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Fastfoods.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    $('#search_bancos input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Bancos.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });
    $('#search_shopping input').keyup(function(){
        var dados = $(this).val();
        if(dados != ""){
            $('#tabela').hide();
            $('#resultado_search').show();

        }else{
            $('#tabela').show();
            $('#resultado_search').hide();
        }
        $.post( "/guiarestrito/app/control/crud/search/search_Shopping.php", { valor : dados}, function( data ) {
            $('#resultado_search').html(data);
        });
    });


    /**
    *
    *   Verifica Campos Vazios
    *
    */

    $("input").blur(function(){
        


        if($(this).val() == ""){
            $(this).css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }
    });

    
    $('input:radio[name=radios]').each(function() {
        if ($("input[type='radio'][name='radios']").is(':checked')){
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }else{
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }
    });

    $("#formulario textarea").blur(function(){
        if($(this).val() == ""){
            $(this).css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }
    });



    /**
    *
    *   Verifica Telefone
    *
    */


    $("#formulario input#tel").blur(function(){
        


        if($(this).val().length < 14){
            $(this).css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }
    });




    /**
    *
    *   Verifica Senhas
    *
    */



    $('#formulario #confpass').blur(function(){
        if (($(this).val() != $('#newpass').val())){
            $('#newpass').css({"border" : "1px solid #F00", "padding": "2px"});
            $(this).css({"border" : "1px solid #F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else if($(this).val().length == 0){
            $(this).css({"border-color" : "#000", "padding": "2px"});
            $('#newpass').css({"border-color" : "#000", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#newpass').css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }
    });
    $('#formulario #newpass').blur(function(){
        if (($(this).val() != $('#confpass').val())){
            $('#confpass').css({"border" : "1px solid #F00", "padding": "2px"});
            $(this).css({"border" : "1px solid #F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else if ($(this).val().length == 0) {
            $('#confpass').removeAttr("style");
            $(this).removeAttr("style");
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
        }else{
            $(this).css({"border-color" : "#0F0", "padding": "2px"});
            $('#confpass').css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
        }
    });










    /**
    *
    *   Verifica os Campos quando o botao de comfirmacao for acionado
    *
    */


    $("#confirm").click(function(){
        var cont = 0;

        /**
        *
        *   Verifica Campos vazios
        *
        */

        $("input").each(function(){
            if($(this).val() == ""){
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                $('#alerta').html(
                    '<div class="alert text-center alert-warning" role="alert">'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                        '<strong>Cuidado!&nbsp;</strong>Todos os campos devem ser preenchidos'+
                    '</div>'
                );
                cont++;
            }
        });
        

        $('input:radio[name=radios]').each(function() {
            if (!$("input[type='radio'][name='radios']").is(':checked')){
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                $('#alerta').html(
                    '<div class="alert text-center alert-danger" role="alert">'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                        '<strong>Erro!&nbsp;</strong>Você deve informar o tipo do usuário!'+
                    '</div>'
                );
                cont++;
            }
        });



        /**
       not
        *   Verifica Campos vazios
        *
        */

        $("textarea").each(function(){
            if($(this).val() == ""){
            $(this).css({"border" : "1px solid #F00", "padding": "2px"});
            $('#alerta').html(
                '<div class="alert text-center alert-warning" role="alert">'+
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                    '<strong>Cuidado!&nbsp;</strong>Todos os campos devem ser preenchidos'+
                '</div>'
            );
            cont++;
            }
        });


        /**
        *
        *   Verifica Telefone
        *
        */

        $("input#tel").each(function(){
            if($(this).val().length < 14){
            $(this).css({"border" : "1px solid #F00", "padding": "2px"});
            $('#alerta').html(
                '<div class="alert text-center alert-warning" role="alert">'+
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                    '<strong>Cuidado!&nbsp;</strong>O campo Telefone deve ser preenchido com um número valido.'+
                '</div>'
            );
            cont++;
            }
        });


        /**
        *
        *   Verifica Senhas
        *
        */



        $('#confpass').each(function(){
            if (($(this).val() != $('#newpass').val()) || ($(this).val().length == 0)){
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                $('#newpass').css({"border" : "1px solid #F00", "padding": "2px"});
                $('#alerta').html(
                    '<div class="alert text-center alert-warning" role="alert">'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                        '<strong>Cuidado!&nbsp;</strong>Senhas não conferem'+
                    '</div>'
                );
                cont++;
            }
        });
        $('#newpass').each(function(){
            if (($(this).val() != $('#confpass').val()) || ($(this).val().length == 0)){
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                $('#newpass').css({"border" : "1px solid #F00", "padding": "2px"});
                $('#alerta').html(
                    '<div class="alert text-center alert-warning" role="alert">'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                        '<strong>Cuidado!&nbsp;</strong>Senhas não conferem'+
                    '</div>'
                );
                cont++;
            }
        });



        /**
        *
        *   Executa o submit ou retorna ao formulario
        *
        */

        if(cont == 0){
            $("#formulario").submit();
        }else{
            $('#modal_Confirm').modal('toggle');
        }
    });
         

}); // Fim da função principal































/*

**************************************
***** SCRIPT PARA MUDANCA DE COR *****
**************************************


var url = "/novoguia/js/jquery.cookie.js";
$.getScript( url, function() {

	    ///Style switcher/////

	 //////////   //  COLOR : CODES ///////////////

	    // Blue : #37AFFF

	    // Green : #469E66

	    // Brown : #E69351

	    // Red : #E7484E

    var cor = $.cookie("color");
    console.log(cor);

    if (cor == "blue") {
        $('#mainStyle').attr('href', '/novoguia/css/style.css');
    }else if(cor == "green"){
        $('#mainStyle').attr('href', '/novoguia/css/style-green.css');
    }else if(cor == "brown"){
        $('#mainStyle').attr('href', '/novoguia/css/style-brown.css');
    }else if(cor == "red"){
        $('#mainStyle').attr('href', '/novoguia/css/style-red.css');
    }



    $(document).ready(function () {
        $(".trigger").click(function () {
            $(".painel").toggle("slow");
            $(this).toggleClass("active");
            return false;
        });
    });
    $('#theme_blue').click(function () {
        $('#mainStyle').attr('href', '/novoguia/css/style.css');
        $.removeCookie('color');
        $.cookie('color','blue',{
            expires : 10, 
            path : '/novoguia',
            domain : 'ulaula.ital.sp.gov.br'
        });
    });
    $('#theme_green').click(function () {
        $('#mainStyle').attr('href', '/novoguia/css/style-green.css');
        $.removeCookie('color');
        $.cookie('color','green',{
            expires : 10, 
            path : '/novoguia',
            domain : 'ulaula.ital.sp.gov.br'
        });
    });
    $('#theme_brown').click(function () {
        $('#mainStyle').attr('href', '/novoguia/css/style-brown.css');
        $.removeCookie('color');
        $.cookie('color','brown',{
            expires : 10, 
            path : '/novoguia',
            domain : 'ulaula.ital.sp.gov.br'
        });
    });
    $('#theme_red').click(function () {
        $('#mainStyle').attr('href', '/novoguia/css/style-red.css');
        $.removeCookie('color');
        $.cookie('color','red',{
            expires : 10, 
            path : '/novoguia',
            domain : 'ulaula.ital.sp.gov.br'
        });
    });
});

*/