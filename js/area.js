(function(window){

	//创建页面级对象
	var area = {
		
		//初始化
		init : function(){
			
			//mui初始化
			this.mui_init();
			
			//初始化点击事件
			this._click();
			
			//初始化页面链接
			this.href();
			
			
		},
		
		//DOM节点
		doc : {
			funBox : document.querySelector(".fun-box"),
			
			head : document.querySelector("header")
		},
		
		//点击事件
		_click : function(){
			var _this = this;
			var a= document.querySelectorAll(".fun-Clist a");
			
			mui('.fun-Clist').on('tap','a',function(index){
				
				for(var i=0; i<a.length; i++ ){
					a[i].className = "";	
				}			
				this.className = 'active';
				
			});
			
		},
		
		//页面链接
		href : function(){
							
			document.querySelector(".href_index") .addEventListener('tap',function(){
				
				mui.openWindow({
				    url:'../index.html'
				});
				
			}) 
			
		},
		
		
		//MUI 初始化
		mui_init : function(){
			mui('.mui-scroll-wrapper').scroll({
				 indicators: false
			});	
		}
	};
	
	//初始化调用
	area.init();

})(window)

