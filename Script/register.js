$(document).ready(function() {
	window.onbeforeunload = confirmExit;

	function confirmExit()
	{
		return "아직 음식점을 등록하지 않았습니다.";
	}

	$('#addFoodButton').click(function() {
		$('#foodTextbox tr:last').after('<form id="registerFoodForm" name="register_food" action="">{% csrf_token %}<tr><td>이름</td><td><input type="textbox" name="food_name" /></td><td>가격</td><td><input type="textbox" name="food_price" /></td><td>특이사항</td><td><input type="textbox" name="food_detail" /></td></tr></form>');
	});

	$('#registerRestaurantForm').submit(function() {
		data = $('#registerRestaurantForm').serialize();

		$.ajax({
			type:'POST',
			url:'registerNewRestaurant/',
			data: data,
			dataType: "json",
			success: function(data) {
				state = data[0].state;
				if (state == 0) {
					alert("음식점 등록 성공!");
					//테스트해보기
					var restaurantDetailUrl = url.replace(0, data[0].restaurant_pk);
					window.location.replace(restaurantDetailUrl);
				}
				else {
					alert("음식점 등록 실패");
				}
			},
			error: function(xhr,err) {
				alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
				//alert("responseText: "+xhr.responseText);
			}
		});
		event.preventDefault();
	});
});
