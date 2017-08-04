$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var firstName = data.results[0].name.first;
        $("body").append("<h2> My name is " + firstName + "</h2>");

    }
});

