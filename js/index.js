
//创建页面级对象
(function(window){
	
	//创建页面级对象
	var index = {
		
		//初始化
		init : function(){			
			
			//轮播自定义事件
			this.slide();
			
		},
		
		//节点
		Doc : {
			lbOl : document.querySelector(".index-bannerOl")
		},
		
		//事件
		Event : function(){
			
		},
		
		//轮播自定义事件
		slide : function(){
			var _this = this;
			
			var gallery = mui('.mui-slider');
			
			/*gallery.slider({
				interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});*/
			
			
			
		}
		
		
	};
	
	//初始化调用
	index.init();
	
})(window);
