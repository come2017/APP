
//创建页面级对象
(function(window){
	
	//创建页面级对象
	var index = {
		
		//初始化
		init : function(){			
			
			//轮播自定义事件
			this.slide();
			
			//初始化scroll事件
			this._scroll( window );
			
		},
		
		//节点
		Doc : {
			lbOl : document.querySelector(".index-bannerOl"),
			
			nav : document.querySelector(".index-Grid"),
			
			special : document.querySelector(".index-Special")
		},
		
		/*scroll事件*/
		_scroll : function(window){
			var _this = this;
			
			var top = _this.Doc.nav.offsetTop;
			
			
			
			window.onscroll = function( ev ){
				
				var t = document.documentElement.scrollTop || document.body.scrollTop;
				
				if( t >= top ){
					_this.Doc.nav.className = "index-Grid index-Gfixed";
					_this.Doc.special.className = "index-Special index-Sfixed";
				}else{
					_this.Doc.nav.className = "index-Grid";
					_this.Doc.special.className = "index-Special";
				}
				
				
				
				
			};
			
		},
		
		//轮播自定义事件
		slide : function(){
			var _this = this;
			
			var gallery = mui('.mui-slider');
			
			gallery.slider({
				interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});
			
			
			
		}
		
		
	};
	
	//初始化调用
	index.init();
	
})(window);
