// JavaScript Document
		$(function() {
			$("#submit").click(function() {
				// validate and process from here
				var type = $("input#projecttype").val();
				var name = $("input#hname").val();
				var phone = $("input#hphone").val();
				var email = $("input#hemail").val();
				var project = $("textarea#project").val();
				var budget = $("input#budget").val();
				//alert(type);
				$.ajax({
					url:"bin/hire_us.php",
					type: "POST",
					data: {type: type, name: name, phone: phone, email: email, project: project, budget: budget},
					cache: false,
					success: function(response) {
						//$('#successModal').modal('show');
						//console.log(response);
					}
				});
				return true;
			});
		});