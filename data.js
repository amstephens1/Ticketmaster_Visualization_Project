var url1 = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=200&stateCode=MN`

// function makeURL()  
// d3.json(url1).then((data)=> {
//     // var size = data.page.totalElements

//     console.log(data)

//     var events = data._embedded.events
//     console.log(events)
//     for (var i = 0; i < events.length; i++){
//         var name = events[i].name
//         var startDate = events[i].dates.start.localDate
//         var longitude = events[i]._embedded.venues[0].location.longitude
//         var latitude = events[i]._embedded.venues[0].location.latitude
//         var localStartTime = events[i].dates.start.localTime
//         var genre = events[i].classifications[0].genre.name
//         // var minprice = events[i].priceRanges[0].min
//         // var maxprice = events[i].priceRanges[0].max
//         console.log(name)
//         console.log(startDate)
//         console.log(longitude)
//         console.log(latitude)
//         console.log(localStartTime)
//         console.log(genre)
//         // console.log(maxprice)
//     }
// })
d3.json(url1).then((data) => {
    console.log(data)
})
function time(){
    var userTime = document.getElementById("userTime").value
    var state = document.getElementById("inputGroupSelect01")
    var userTime = userTime.substr(0,11)+"00:00:00Z"
    var endTime = userTime.substr(0,11)+"23:59:00Z"
    console.log(userTime)
    console.log(endTime)
    var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=10&stateCode=MN&startDateTime=${userTime}&endDateTime=${endTime}`
    d3.json(url).then((data)=> {
        // var size = data.page.totalElements
    
        console.log(data)
    
        var events = data._embedded.events
        console.log(events)
        for (var i = 0; i < events.length; i++){
            var name = events[i].name
            var startDate = events[i].dates.start.localDate
            var longitude = events[i]._embedded.venues[0].location.longitude
            var latitude = events[i]._embedded.venues[0].location.latitude
            var localStartTime = events[i].dates.start.localTime
            var genre = events[i].classifications[0].genre.name
            // var minprice = events[i].priceRanges[0].min
            // var maxprice = events[i].priceRanges[0].max
            console.log(name)
            console.log(startDate)
            console.log(longitude)
            console.log(latitude)
            console.log(localStartTime)
            console.log(genre)
            // console.log(maxprice)
        }
    })
}
