function changePage(response) {
	document.getElementById('navigation').innerHTML = response;
	}

function getPage(URL) {
	AjaxResponder('GET','php/'+URL, changePage);
}

/**function changePage2(response) {
	document.getElementById('category_list_db').innerHTML = response;
	}

function getPage2(URL) {
	AjaxResponder('GET','inc/'+URL, changePage2);
}
*/

function PostData() {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	else {
		throw new Error("Ajax is not supported by this browser");
	}
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 && xhr.status < 300) {
				document.getElementById('navigation').innerHTML = xhr.responseText;
			}
		}
	}

	var i_n = document.getElementById("tName").value;
	var i_sd = document.getElementById("eStart").value;
	var i_ld = document.getElementById("eFinish").value;
	var vars = "tName="+i_n+"&eStart="+i_sd+"&eFinish="+i_ld;
	xhr.open('POST', 'php/dbinsert.php');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(vars);
	getPage('index.php');
}

 

window.addEventListener("onload",getPage('index.php'));