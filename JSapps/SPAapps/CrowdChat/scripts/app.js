/**
There's still few items I failed to implement and when you are checking my HW I will 
be very happy if you share your opinion on how to tackle them:
1. How to keep the fkin scroll at the bottom while loading the messages?
2. How to update the messages with only the new messages?
I think it might be something like save messages once locally than pull again and 
compare both arrays but I don't have the time to implement it.
I tried to delete the messages and reload them again, but it turned to be very slow and laggy.
Actual code samples will be appreciated. Thanks and good luck :) 
*/

$(document).ready((function($) {

  var app = $.sammy('#main', function() {
  	this.use('Template');
  	var BASE_URL = 'http://crowd-chat.herokuapp.com/posts';
    var messages = [];
  	this.get('#/', function(context){
  		loadMessages = function(){
        //$('.message').remove();
  			$.ajax({
  				url: BASE_URL,
  				datatype: 'json', 
  				success: function(allItems){
            allItems = allItems.slice(allItems.length - 200); // we dont actually need to load all the content everytime.
            if (messages.length === 0) {
              messages = allItems;
              console.log('in if');
              console.log(messages);
            }
            else{
              console.log('in else');
              var filteredMessages = _.difference(allItems, messages);
              console.log(filteredMessages);
              messages = filteredMessages;
            };
            
  					$.each(messages, function(i, item){
  						context.render('templates/message.template', {item : item})
  						.appendTo(context.$element());
  						$("#main").scrollTop($("#main")[0].scrollHeight);
  					});

  					context.render('templates/chatwindow.template')
  					.appendTo(context.$element());
  				}, 
  				error: function(err){
  					context.log('Something fucked up' + err.message);
  				}
  			});
  		};

  		sendMessage = function(){
  			$.ajax({
  				url: BASE_URL,
  				type: 'POST',
  				data: {
  					user: $('#username').val(),
  					text: $('#message').val()
  				},
  				datatype: 'json',
  				success: function(data){
  					loadMessages();
  					console.log('Success');
  				},
  				error: function(err){
  					console.log('FUCK');
  				}
  			})
  		};

  		reloadMessages = function(){
        
  			setInterval(loadMessages, 5000);
  			
  		};

  		//loadMessages();
  		reloadMessages();
  		var $sendButton = $('#send');
  		$sendButton.on('click', function(){
  			sendMessage();
  			$('#message').val('');
  		});
  	});
  });

$(function(){
	app.run('#/');
});

})(jQuery));