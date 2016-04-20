var form1 = {
	fatherId: "father_form1",
	formId: "form1",
	formClass: "form1",
	//content: [row1,row2],
	content: {
		row1: {
			label: '名称',                    // 表单标签
		    type: 'input',                   // 表单类型
		    validator: function () {},    // 表单验证规
		    rules: '必填，长度为4-16个字符',    // 填写规则提示
		    success: '格式正确',              // 验证通过提示
		    fail: '名称不能为空',               // 验证失败提示
		},
		row2: {
			label: '名称',                    // 表单标签
		    type: 'input',                   // 表单类型
		    validator: function () {},    // 表单验证规
		    rules: '必填，长度为4-16个字符',    // 填写规则提示
		    success: '格式正确',              // 验证通过提示
		    fail: '名称不能为空',               // 验证失败提示
		}
	}
}
window.onload = function(){
	function init(){
		var form = new Form();
		form.createForm(form1);
		//form.createContent(form1.content);
	}
	init();	
}


