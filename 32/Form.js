function Form(){
	this.cfg = {
		fatherId: "father",
		formId:   "default",
		formClass: "default",
	}
}

Form.prototype = {
	createForm: function(cfg){
		cfg = extend({},this.cfg,cfg); //覆盖默认值
		//console.log("createForm");
		var form = document.createElement("form");
		form.id = cfg.formId;
		addClass(form,cfg.formClass)
		document.getElementById(cfg.fatherId).appendChild(form);

		this.addContent(cfg,form);
	},

	addContent: function(cfg,form){	
		console.log(cfg,"addContent");
		var content = cfg.content;
		console.log(content);
		//console.log(cfg.contents.row1s);
		for(var row in content){
			var newrow = document.createElement("div");
			newrow.id = "row_"+row;
			form.appendChild(newrow);
			type = content[row].type;
			switch(type){
				case "input":
					console.log("addInput");
					this.addInput(content[row],newrow);
					break;
				case "select":
					console.log("addSelect");
					break;
				default:
			};
		}

	},

	addInput: function(cfg,row){
		var input = document.createElement("input");
		row.appendChild(input);
		console.log(cfg);
	},
}

