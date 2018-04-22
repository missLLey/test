/**
 * 用于登录的js文件
 */

function login_in(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if(username == "" || password == ""){
		alert("登录信息不能为空！");
		return;
	}
	
	var login_json = {
		'username':username,
		'password':password
	};
	var postdata = JSON.stringify(login_json);
	
	$.ajax({
		url:"../login.do",		
		type:'POST',	
		contentType:"application/json",
		dataType:'json',
		data:postdata,
		success:function(data){
			if(data.result == '成功'){
				location.replace("/GetCardServer/html/equipment/equipment.html");
			}else{
				alert(data.result);
			}
		},
		error:function(data){
			alert('error');
		}
	});
}


