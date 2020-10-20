function myFunction(){

			$('tbody tr').remove();
			
			var fileInput = document.getElementById('file');
			var filename;
			var table = document.getElementById("dynamicRow");
			document.getElementById("fileUpload").style.visibility = "visible";
			document.getElementById("btnUpload").style.visibility = "visible";
			
			let files = event.target.files;
			var filePathofClient;
			var file;
			var blob;
		

			document.getElementById('BulkfileLength').value = fileInput.files.length;
			
			for (let i = 0; i < files.length; i++) {

				file = fileInput.files[i];
				blob = new Blob([ file ]);
				
				filename = fileInput.files[i].name;

				row = table.insertRow(i);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				var cell7 = row.insertCell(6);

				
				filePathofClient = files[i].webkitRelativePath;

				var start = filePathofClient.lastIndexOf('/');
				var end = filePathofClient.length;
				var string_before_last_slash = filePathofClient
						.substring(0, start);
				var ClientNameIndex = string_before_last_slash
						.lastIndexOf("/");
				var ClientName = string_before_last_slash
						.substring(ClientNameIndex + 1);

				cell1.innerHTML = '<input type="text" id="FldSno" name="FldSno" value="'
						+ (i + 1)
						+ '" readonly="readonly" style="border-style:none;background: none !important;" size="5%">';
				cell2.innerHTML = '<input type="text" id="FldClientName" name="FldClientName" value="'
						+ ClientName
						+ '" readonly="readonly" style="border-style:none;background: none !important;" size="10%">';
				cell3.innerHTML = '<input type="text" id="FldFileName" name="FldFileName" value="'
						+ filename
						+ '" readonly="readonly" style="border-style:none;background: none !important;" size="50%">';
				cell4.innerHTML = '<select class="livesearch" id="clntDetails" name="clntDetails" ><option value="">--SELECT--</option><c:forEach var="ClientDet" items="${ClientDetailsList}"><option value="${ClientDet.client_id}">${ClientDet.customer_name}</option></c:forEach></select>';
				cell5.innerHTML = '<input type="text" id="FldClientId" name="FldClientId"  readonly="readonly"  size="10%">'+""+'<input type="hidden" id="FldClientorgName" name="FldClientorgName"  readonly="readonly"  size="10%">';
				
				cell6.innerHTML ='<select class="livesearch" id="advDetails" name="advDetails"  ><option value="">--SELECT--</option><c:forEach var="advDet" items="${AdvisorDetailsList}"><option value="${advDet.advisor_id}">${advDet.advisor_name}</option></c:forEach></select>';
				cell7.innerHTML = '<input type="text"  id="FldAdvId" name="FldAdvId"  readonly="readonly"  size="10%">'+""+'<input type="hidden" id="FldAdvName" name="FldAdvName"  readonly="readonly"  size="10%">';
				
				 
			}
			;
			 $(".container").hide();
			$(".livesearch").chosen();	
		

			
		}
	    

 $(document).on('change','select',function(){
	
		$(this).closest('td').next().find('input[type=text]').attr('value',$(this[this.selectedIndex]).val());
		$(this).closest('td').next().find('input[type=hidden]').attr('value',$(this[this.selectedIndex]).text());
		
	}); 
	

