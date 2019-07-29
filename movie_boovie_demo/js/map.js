// const places = new daum.maps.services.Places();

// const callback = function(status) {
// 	let theaterName = [];
// 	status.filter((v) => {
// 		if(v.place_name.match(/CGV|롯데시네마|메가박스/g) && Number(v.distance) <= 2000) {
// 			theaterName.push(v.place_name);
// 			return true;
// 		}
// 	})
// 	console.log(status,theaterName);
// }

// navigator.geolocation.getCurrentPosition(function(position) {
// 	// CT1 === 문화시설
// 	places.categorySearch('CT1', callback, {
// 		location: new daum.maps.LatLng(position.coords.latitude, position.coords.longitude)
// 	});
// });