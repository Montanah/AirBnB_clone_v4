$(document).ready(function () {
	const checkedAmenities = {};

	$('div.amenities input[type="checkbox"]').change(function () {
		const amenity = $(this)[0];
		console.log($('this'));
		console.log(amenity);
		if (amenity['checked'] === true) {
		  checkedAmenities[amenity.attributes[0].nodeValue] = amenity.attributes[1].nodeValue;
		  console.log(amenity.attributes[0]);
		  console.log(amenity.attributes[1]);
		  console.log(Object.values(checkedAmenities));
		} else {
		  delete checkedAmenities[amenity.attributes[0].nodeValue];
		}
		$('div.amenities h4').text(Object.values(amenities));
		console.log(checkedAmenities);
		console.log($('div.amenities h4').text());
		});

	$.get.JSON("http://0.0.0.0:5001/api/v1/status/", 'a string', function (data) {
		if (data.status === 'OK') {
			$("#api_status").addClass("available");
		else {
			$("#api_status").removeClass("available");
		}
		}
	});

	$.ajax({
		url: "http://0.0.0.0:5001/api/v1/places_search/",
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify({}),
		dataType: "json"
		}).done(function(data) {
		 data.sort(function(a, b) {
		 return a.name.localeCompare(b.name);
		 });

		for (let place of data) {
			const article = $('<article>');
			const title = $('<div>').addClass('title');
			const priceByNight = $('<div>').addClass('price_by_night');
			const information = $('<div>').addClass('information');
			const maxGuest = $('<div>').addClass('max_guest');
			const numberRooms = $('<div>').addClass('number_rooms');
			const numberBathrooms = $('<div>').addClass('number_bathrooms');
			const description = $('<div>').addClass('description');

			$('<h2>').text(place.name).appendTo(title);
			priceByNight.html(place.price_by_night).appendTo(title);

			$('<i>').addClass('fa fa-users fa-3x').attr('aria-hidden', 'true').appendTo(maxGuest);
			$('<br>').appendTo(maxGuest);
			$('<span>').text(place.max_guest + ' Guests').appendTo(maxGuest);

			$('<i>').addClass('fa fa-bed fa-3x').attr('aria-hidden', 'true').appendTo(numberRooms);
			$('<br>').appendTo(numberRooms);
			$('<span>').text(place.number_rooms + ' Bedrooms').appendTo(numberRooms);

			$('<i>').addClass('fa fa-bath fa-3x').attr('aria-hidden', 'true').appendTo(numberBathrooms);
			$('<br>').appendTo(numberBathrooms);
			$('<span>').text(place.number_bathrooms + ' Bathroom').appendTo(numberBathrooms);

			description.html(place.description);

			information.append(maxGuest, numberRooms, numberBathrooms);

			article.append(title, information, description);
			$('.places').append(article);
			}
});
