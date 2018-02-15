
$(document).ready(function(){	
	$('.btn-add').click(function(){
		var taskName = $('.input-add-task').val();
		if(taskName == ''){
			$('.alert-message').text('Você deve digitar uma tarefa para incluí-la no Check-List');
			return false;
		} 
		else if( taskName.length <= 3){
			$('.alert-message').text('O nome da tarefa deve ter mais de 3 caracteres');
			return false;
		}
		else{
			$('ul').append('<li><span class="name-task">'+ taskName +'</span>\
							  <span class="checked-task"><i class="fa fa-check" aria-hidden="true"></i></span>\
					          <span class="remove-task"><i class="fa fa-trash-o" aria-hidden="true"></i></span>\
					        </li>');

			$('.input-add-task').focus();	
			return false;
		}


	});

	$('.checked-task').click(function(){
		$(this).parent().find('.name-task').toggleClass('name-task-toggle');
	});

	$('.remove-task').click(function(){
		$(this).parent().hide('slow');
	});	
});