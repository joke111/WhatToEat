$(document).ready(function() {
	/*window.onbeforeunload = confirmExit;

	function confirmExit()
	{
		return "페이지를 벗어나려 하고있습니다.";
	}
	*/


	$('#modifyRestaurantForm').submit(function() {
		data = $('#modifyRestaurantForm').serialize();

		$.ajax({
			type:'POST',
			url:modifyOldRestaurantUrl,
			data: data,
			dataType: "json",
			success: function(data) {
				state = data[0].state;
				if (state == 0) {
					alert("음식점 수정 성공!");
					//일단 이렇게 해놓고 나중에 고치든 ㄲ
					window.location.replace(restaurantDetailUrl);
				}
				else {
					alert("음식점 수정 실패");
				}
			},
			error: function(xhr,err) {
				alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
				//alert("responseText: "+xhr.responseText);
			}
		});
		event.preventDefault();
	});

	function addNewFoodAtFoodList(data)
	{
		formTag = '<tr><form class="modifyFoodForm" name="modify_food" action=""><input class="food_pk" type="hidden" name="food_pk" value="' + data[0].food_pk + '" />'
		inputName = '<td>이름</td><td><input class="textboxFoodName" type="textbox" name="food_name" value="' + data[0].food_name + '" /></td>'
		inputPrice = '<td>가격</td><td><input class="textboxFoodPrice" type="textbox" name="food_price" value="' + data[0].food_price + '" /></td>'
		inputDetail = '<td>특이사항</td><td><input class="textboxFoodDetail" type="textbox" name="food_detail" value="' + data[0].food_detail + '" /></td>'
		inputButton = '<td><input class="modifyFoodForm" type="submit" name="modify_food_submit" value="수정 적용" /></td></form></tr>'
		$('#modifyFood tr:last').after(formTag + inputName + inputPrice + inputDetail + inputButton);
	}

	$('#addNewFoodForm').submit(function() {
		data = $('#addNewFoodForm').serialize();
		
		$.ajax({
			type:'POST',
			url:addNewFoodUrl,
			data: data,
			dataType: "json",
			success: function(data) {
				state = data[0].state;
				if (state == 0) {
					alert("음식 등록 성공!");
					//$('#addNewFoodForm')[0].reset();
					//addNewFoodAtFoodList(data)
					window.location.reload();
					event.preventDefault();
				}
				else {
					alert("음식 등록 실패");
				}
			},
			error: function(xhr,err) {
				alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
				//alert("responseText: "+xhr.responseText);
			}
		});
		event.preventDefault();
	});
	$('.modifyFoodForm').submit(function() {
		data = $(this).serialize();
		
		$.ajax({
			type:'POST',
			url:modifyFoodDetailUrl,
			data: data,
			dataType: "json",
			success: function(data) {
				state = data[0].state;
				if (state == 0) {
					alert("음식 수정 성공!");
				}
				else {
					alert("음식 등록 실패");
				}
			},
			error: function(xhr,err) {
				alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
				//alert("responseText: "+xhr.responseText);
			}
		});
		event.preventDefault();
	});

	$("#returnRestaurantDetailButton").click(function() {
		alert(returnRestaurantDetailUrl);
		window.location.replace(returnRestaurantDetailUrl);
	});
});
