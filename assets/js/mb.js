(function() {
    "use strict"; // Start of use strict
    $(document).ready(function(){
        $('#filtro_ubicacion input[type="radio"]').click(function(){
            var inputValue = $(this).attr('value');
            var targetBox = $('#' + inputValue);
            $('#filtro_ubicacion_grupo .filtro-ubicacion').not(targetBox).hide();
            $(targetBox).show();
        });
    });


    $(document).ready(function(){
        $('#filtro_ubicacion-1 input[type="radio"]').click(function(){
            var inputValue = $(this).attr('value');
            var targetBox = $('#' + inputValue);
            $('#filtro_ubicacion_grupo-1 .filtro-ubicacion-1').not(targetBox).hide();
            $(targetBox).show();
        });
    });

        
})(); // End of use strict