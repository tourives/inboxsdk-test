InboxSDK.load('1', 'sdk_mindsettest1_9f74035a17').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "SAP Test 2",
			iconUrl: 'https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365',
			onClick: function(event) {
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
			},
		});

	});
	
	sdk.Lists.registerThreadRowViewHandler(function(listView){
	
		listView.addLabel({
			title: "Approve",
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/IconApproved.png',
		});
		listView.addLabel({
			title: "Reject",
			iconUrl: 'https://cdn3.iconfinder.com/data/icons/musthave/256/Cancel.png',
		})
	});


});
