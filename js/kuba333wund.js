$(function(){
	loadLists();
	$('#reload').click(function(){
		loadLists();
	});
});

function loadLists()
{
	$('.lists ul').html('');
	$.getJSON('https://a.wunderlist.com/api/v1/lists?client_id=bd483f8b708076fe3327&access_token=25711c2eed990251aac52ac6f2509b3344195743553f514d21ad4ad9836f&client_device_id=undefined&client_instance_id=undefined',function(data){
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li>" + val.title + "</li>" );
		});
		$('.lists ul').html(items.join(''));
	});
}