$(document).ready(function(){
    $("form#calcValues").on('submit', function(e){
        e.preventDefault();
        var var1 = $('input[name=var1]').val();
        var sign = $('input[name=sign]').val();   
        var var2 = $('input[name=var2]').val();
        $.ajax({
            type: 'post',
            url: '/',
            data: data{
  		var1: var1,
		sign: sign,
		var2: var2
	    },
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});