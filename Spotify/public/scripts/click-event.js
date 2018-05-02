$(function(){
    $('body').on('click', '.track', function(){
        const _this = $(this);
        const id = _this.data('id');
        const result = $.ajax({
            url: `/track/${id}`
        });
        
    })
})