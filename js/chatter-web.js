function ViewModel() {

	var self = this;

	self.Chits = ko.observableArray([]);

	self.Init = function() {

		$.ajax({
			url: 'http://chatter-api.azurewebsites.net/api/Chit', 
			success: function(data){
				self.Chits(data);
				console.log(data);
			}

		});

	}

	self.Add = function() {
		
		var chit = { UserName: 'Jason', Message: 'Delete Me, Please!'};

		$.ajax({
			url: 'http://chatter-api.azurewebsites.net/api/Chit', 
			method: 'post',
			data: JSON.stringify( chit ),
			contentType: "application/json",
			success: function(data){
				self.Init();
				
			},
			error: function(data) {
				console.error(data);
			}

		});

	}

	self.Delete = function(chit) {
		$.ajax({
			url: 'http://chatter-api.azurewebsites.net/api/Chit/' + chit.Id, 
			method: 'delete',
			success: function(data) {
				self.Init();
			},
			error: function(data) {
				console.error(data);
			}
		});

	
	}

	self.Init();
}


ko.applyBindings(new ViewModel());