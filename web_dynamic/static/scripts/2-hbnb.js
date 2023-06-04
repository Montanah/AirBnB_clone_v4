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
});
