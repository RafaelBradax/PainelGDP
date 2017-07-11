$(document).ready(function () {
    //carrega tabela inicial
    $('#tabela tbody').each(function(){
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = 0; // Valor Nulo
        var orderby         = 0; // Valor Nulo
        var ordem           = 0; // Valor Nulo
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });

    $('#quant_por_pag').change(function(){
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $(this).val();
        var pag_atual       = 1; // Força a voltar para a primeira pagina por causa da pesquisa
        var orderby         = 0; // Valor Nulo
        var ordem           = 0; // Valor Nulo
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });


    $('#campo_pesquisa').keyup(function(){
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $(this).val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = 1; // Força a voltar para a primeira pagina por causa da pesquisa
        var orderby         = 0; // Valor Nulo
        var ordem           = 0; // Valor Nulo
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });

    $(document).on('click','#number_pag',function(){
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = $(this).val();
        var orderby         = 0; // Valor Nulo
        var ordem           = 0; // Valor Nulo
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });

    $('#sortByID').click(function(){
        $('#sortByID span').toggleClass('glyphicon glyphicon-sort-by-order');
        $('#sortByID span').toggleClass('glyphicon glyphicon-sort-by-order-alt');
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = 0; // Valor Nulo

        if($('#sortByID span').hasClass('glyphicon-sort-by-order')){
            var orderby     = 'id';
            var ordem       = 'ASC';
        }else if($('#sortByID span').hasClass('glyphicon-sort-by-order-alt')){
            var orderby     = 'id';
            var ordem       = 'DESC';
        }
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);

    });
    $('#sortByName').click(function(){
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet');
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet-alt');
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = 0; // Valor Nulo

        if($('#sortByName span').hasClass('glyphicon-sort-by-alphabet')){
            var orderby     = 'nome';
            var ordem       = 'ASC';
        }else if($('#sortByName span').hasClass('glyphicon-sort-by-alphabet-alt')){
            var orderby     = 'nome';
            var ordem       = 'DESC';
        }
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });

    $('#sortByNivel').click(function(){
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet');
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet-alt');
        var controller      = $('#controller').val();
        var tipo            = $('#tipo').val();
        var dados           = $('#campo_pesquisa').val();
        var quant_por_pags  = $('#quant_por_pag').val();
        var pag_atual       = 0; // Valor Nulo

        if($('#sortByName span').hasClass('glyphicon-sort-by-alphabet')){
            var orderby     = 'nivel';
            var ordem       = 'ASC';
        }else if($('#sortByName span').hasClass('glyphicon-sort-by-alphabet-alt')){
            var orderby     = 'nivel';
            var ordem       = 'DESC';
        }
        search(controller, dados, quant_por_pags, pag_atual, orderby, ordem, tipo);
    });

    var cookie = $.cookie('menu');


    var cookie_config = {
            expires : 7, 
            path : '/guiarestrito',
            domain : 'ulaula.ital.sp.gov.br'
        }

    if($('#view_panel tr').hasClass('active')){
        $.removeCookie('menu');
        $.cookie('menu','view',cookie_config);
    }else if($('#create_panel tr').hasClass('active')){
        $.removeCookie('menu');
        $.cookie('menu','create',cookie_config);

    }else{
        $.removeCookie('menu');
        $.cookie('menu','user',cookie_config);
        
    }

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
    *   FUNCOES DE PESQUISA NO BANCO DE DADOS
    *
    */

    $("#formulario input#nick_Administradores").keyup(function(){
        if($(this).val() == ""){
            $(this).css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
            $('.result').html('');
        }else{
            verifica_nick($(this).val());
        }
    });

  


    /**
    *
    *   MASCARAS
    *
    */

    $("#tel").mask("(99) 9999-9999?9");
    $(".price").maskMoney({
        symbol:'R$ ',
        showSymbol:true, 
        thousands:'.', 
        decimal:',', 
        symbolStay: true
    });

    /**
    *
    *   VALIDACOES DOS FORMS
    *
    */

    $('#confirm').click(function(){
        $('#modal_Confirm').modal('hide');
        $('#formulario').submit();
    });

    $('#formulario').validate({


    /**
    *
    *   REESCREVE A SAIDA DOS ERROS DO PLUGIN
    *
        errorClass: 'errorField',
        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.addClass("ui red pointing above ui label error").appendTo( element.closest('div.field') );
        }, 
        highlight: function(element, errorClass, validClass) {
            $('#modal_Confirm').modal('hide');
            $(element).closest("div.field").addClass("error").removeClass("success");
            $(element).css({"border-color" : "#F00", "padding": "2px"});
        },
        unhighlight: function(element, errorClass, validClass){
            $(element).closest(".error").removeClass("error").addClass("success");
            $(element).css({"border-color" : "", "padding": ""});
        },
    */

        rules:{
            
            address:"required",
            distancia:"required",
            solteiro:"required",
            casal:"required",
            triplo:"required",
            descricao:"required",
            prefixo:"required",
            nick:"required",
            radios:"required",
            nome:{
                required:true,
                minlength:5
            },
            nome_Linha:{
                required:true,
                minlength:5
            },
            tel:{
                required:true,
                minlength:10
            },
            email: {
                required: true,
                email: true
            },
            rota:{
                required:true,
                url:true
            },
            pass:{
            	required:true,
            	minlength:8
            },
            confpass:{
            	required:true,
            	minlength:8,
            	equalTo:"#pass"
            }
        },
        messages:{
            address:"Campo Obrigatório",
            distancia:"Campo Obrigatório",
            solteiro:"Campo Obrigatório",
            casal:"Campo Obrigatório",
            triplo:"Campo Obrigatório",
            descricao:"Campo Obrigatório",
            prefixo:"Campo Obrigatório",
            radios:"Campo Obrigatório",
            nome:{
                required:"Campo Obrigatório",
                minlength:"O nome deve conter pelo menos 5 caracteres"
            },
            nome_Linha:{
                required:"Campo Obrigatório",
                minlength:"O nome deve conter pelo menos 5 caracteres"
            },
            tel:{
                required:"Campo Obrigatório",
                minlength:"O telefone não é válido"
            },
            email: {
                required: "Campo Obrigatório",
                email: "Digite um e-mail válido"
            },
            rota:{
                required:"Campo Obrigatório",
                url:"Digite uma url válida, Ex.:<br>http://www.exemplo.com"
            },
            pass:{
            	required:"Campo Obrigatório",
            	minlength:"A senha deve conter pelo menos 8 caracteres"
            },
            confpass:{
            	required:"Campo Obrigatório",
            	minlength:"A senha deve conter pelo menos 8 caracteres",
            	equalTo:"Senhas não conferem"
            }
        }
    });


    /**
    *
    *   ORDENACAO DAS TABELAS
    *
    *

    $('#sortByID').click(function(){
        $('#sortByID span').toggleClass('glyphicon glyphicon-sort-by-order');
        $('#sortByID span').toggleClass('glyphicon glyphicon-sort-by-order-alt');
        

        if($('#sortByID span').hasClass('glyphicon-sort-by-order')){
            
        }else{
           
        }
    });
    $('#sortByName').click(function(){
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet');
        $('#sortByName span').toggleClass('glyphicon-sort-by-alphabet-alt');
    });


*/
    






}); // Fim da função principal
