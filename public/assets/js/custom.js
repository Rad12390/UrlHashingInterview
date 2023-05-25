 $(document).ready(function(){
    $("#form").on('submit', function(event){
        event.preventDefault();
        var url = $(this).attr('data-action');
        var currenturl = $("#currentUrl").val();
        
        if (currenturl.startsWith('http://') || currenturl.startsWith('https://') ) // check whether the Url is valid or not*/
        {

           /* to call ajax when click on shortUrl button*/

           $.ajax({
                        url: url,
                        method: 'post',
                        data: {
                            currenturl:currenturl,
                           },
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success:function(response)
                        {
                          var html = '';
                              html = 'Url: ' + response;
                              $(".shortner").append(html); // to add the response on the frontend part
                        },

                        error: function(response) {

                        }
                    });
             } else {

            alert("Please enter the valid Url."); // to show alert message if the entered URK is not valid
        }       
    });

 });
