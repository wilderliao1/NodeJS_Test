var vue_obj = new Vue({
	el:'#el_hello',
	data:{
		message:'Hello Vue!'
	}
})	

var hover_obj = new Vue({
	el:'#el_hover',
	data:{
		message:'页面加载于' + new Date().toLocaleString()
	}
})

var seen_obj = new Vue({
	el:'#el_seen',
	data:{
		seen:false
	}
})