(function(window){

	//创建页面级对象
	var area = {
		
		//初始化
		init : function(){
			
			//初始化点击事件
			this._click();
			
		},
		
		index : 0 , 
		
		//点击事件
		_click : function(){
			var _this = this;
			var a= document.querySelectorAll(".fun-Clist a");
			
			for(var i=0; i<a.length; i++ ){
				a[i].index = i;
				a[i].onclick = function(){
					
					a[_this.index].className = "";
					this.className = "active";
					_this.index = this.index;
					
				}
				
			}
			
		}
	};
	
	//初始化调用
	area.init();

})(window)

