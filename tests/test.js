$(".like-btn").click(function() {

	$(this).toggleClass('clicked');
  event.preventDefault();

});



$(".panel-group_btn span").click(function(){
        let btnStorage = $(this).attr("id");

        if($(this).hasClass("clicked")) {
            localStorage.setItem(btnStorage, 'true');
        } else {
            localStorage.removeItem(btnStorage, 'true');
        }

    });


    $( ".panel-group_btn span" ).each(function() {
        let mainlocalStorage = $( this ).attr( "id" );

        if(localStorage.getItem(mainlocalStorage) == 'true') {
        $(this).addClass("clicked");
    } else {
        $(this).removeClass("clicked");
    }



    });
// $(function() {
//     $('#like').click(function() {
//       var $this = $(this);
//       if ($this.hasClass('highlighted')) {
//         $this.removeClass('highlighted');
//         $this.text('Like');
//       } else {
//         $this.addClass('highlighted');
//         $this.text('Liked');
//       }
//     });
//   });