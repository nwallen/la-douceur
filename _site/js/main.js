console.log('hello');


$.ajax({
    url:'api/full-court.json',
    success: function(data) {
        console.log(data);
    }
})
