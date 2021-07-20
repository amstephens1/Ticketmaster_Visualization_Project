var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=20&stateCode=MN`

// function makeURL()  
d3.json(url).then((data)=> {
    // var size = data.page.totalElements

    console.log(data)

    var events = data._embedded.events
    console.log(events)
    for (var i = 0; i < events.length; i++){
        var name = events[i].name
        var startTime = events[i].dates.start.localDate
        var longitude = events[i]._embedded.venues[0].location.longitude
        var latitude = events[i]._embedded.venues[0].location.latitude
        console.log(name)
        console.log(startTime)
        console.log(longitude)
        console.log(latitude)
    }
})

// function getAllData(page) {
//     d3.json(url).then(function(response){
//         if (page && response.orders.length == 250)
//     })
// })
// var page = 0
// function getEvents(page) {

//     $('#events-panel').show();
//     $('#attraction-panel').hide();
  
//     if (page < 0) {
//       page = 0;
//       return;
//     }
//     if (page > 0) {
//       if (page > getEvents.json.page.totalPages-1) {
//         page=0;
//       }
//     }
//     d3.json(url+page).then((data)=> {
//         console.log(data)
//     })
// }
