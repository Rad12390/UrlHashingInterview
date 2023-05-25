<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>
        Url shortner
    </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <!-- to add the custom js file for the shorten URL -->

    <script src="{{ asset('assets/js/custom.js') }}" defer></script>
</head>
</script>
<body>

<!-- form to take the Url which need to be short-->

    <h2> Url Shortner </h2>
    <div class="shortner">
        <form data-action="{{ url('covertUrl') }}" id="form" method="POST">
               
            <input type="text" name="currentUrl" id="currentUrl" placeholder="Enter the Url">
            <input type="submit" id="submit" class="submit" value="Short URL">
        </form>
    </div>

</body>
</html>
