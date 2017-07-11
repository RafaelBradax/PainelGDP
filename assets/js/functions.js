function search(controller,dados,quant_por_pags,pagAtual,orderby,order,tipo){
	var array = {
		action		    : 'search',
        value           : dados,
        type            : tipo,
		limit		    : quant_por_pags,
        pag_atual       : pagAtual,
        orderBy         : orderby,
        ordem           : order
	}
	$.post( "/guiarestrito/app/controller/"+controller+".php", array, function( data ) {
        $('#tabela tbody').html(data);
        counter(controller,dados,quant_por_pags,pagAtual,orderby,order,tipo);
    });
}

function counter(controller,dados,limit,pagAtual,orderby,order,tipo){
    var array = {
        action          : 'counter',
        value           : dados,
        type            : tipo,
        pag_atual       : ((pagAtual == 0) ? "0" : pagAtual) ,
        limit           : limit
    }
    $.ajax({
        url     : "/guiarestrito/app/controller/"+controller+".php",
        cache   : false,
        data    : array,
        method  : "POST",
        dataType: "json",
        success : function(json) {
            pagination(json);
        },
    });
}

function pagination(json){
    var disablePrevious = '';
    var disableNext = '';
    var idPrevious = 'number_pag';
    var idNext = 'number_pag';

    if(json.pag_atual <= 1){
        disablePrevious = 'disabled';
        idPrevious = '';
    }
    $('#pagination').html(
        '<p>Mostrando de '+json.offset+' a '+json.result+' de '+json.total+' existentes</p>'+
        '<ul class="pagination">'+
            '<li id="previous_pag">'+
                '<button type="button" class="btn btn-default '+disablePrevious+'" id="'+idPrevious+'" aria-label="Previous" value="'+(json.pag_atual-1)+'" >'+
                    '<span aria-hidden="true">&laquo;</span>'+
                '</button>'+
            '</li>'
    );
            var total_pags = (json.total / json.limit);
            for (var i = 0; i < total_pags; i++) {
                var active = ((i+1) == json.pag_atual) ? 'btn-primary' : 'btn-default';
                $('#pagination ul').append('<li><button class="btn '+active+'" type="button" id="number_pag" value="'+(i+1)+'" >'+(i+1)+'</button></li>');
            }
            if(json.pag_atual >= total_pags){
                disableNext = 'disabled';
                idNext= '';
            }
             $('#pagination ul').append(
            '<li>'+
                '<button type="button" class="btn btn-default '+disableNext+'" aria-label="Next" id="'+idNext+'" value="'+(json.pag_atual+1)+'">'+
                    '<span aria-hidden="true">&raquo;</span>'+
               '</button>'+
            '</li>'+
        '</ul>');
}

function verifica_nick(dados){
    var array = {
        action  : 'verify',
        value   : dados
    }
	$.post( "/guiarestrito/app/controller/controllerAdmin.php", array, function( data ) {
        if(data){
            $('#nick_Administradores').css({"border-color" : "#F00", "padding": "2px"});
            $('#submit').attr('disabled','disabled');
            $('#confirm').attr('disabled','disabled');
            $('.result').css({"color" : "#F00"});
            $('.result').html('Nome indisponível');
       }else{
            $('#nick_Administradores').css({"border-color" : "#0F0", "padding": "2px"});
            $('#submit').removeAttr('disabled');
            $('#confirm').removeAttr('disabled');
            $('.result').css({"color" : "#0F0"});
            $('.result').html('Nome disponível');
        } 
    });

}