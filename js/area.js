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
			
			head : document.querySelector("header"),
			
			funMenu : document.querySelector(".fun-menu"),
			
			funSearch : document.querySelector(".fun-search"),
			
			funSort : document.querySelectorAll(".fun-sort"),
			
			swiper : document.querySelector(".swiper"),
			
			funSub : document.querySelector(".fun-sub")
			
		},
		
		//侧滑栏显示
		swiperShow : function(){
			
			var offCanvasWrapper = mui('.swiper');			
			offCanvasWrapper.offCanvas('show');
			
		},
		
		//侧滑栏隐藏
		swiperHide : function(){
			
			var offCanvasWrapper = mui('.swiper');			
			offCanvasWrapper.offCanvas('close');
			
		},
		
		//点击事件
		_click : function(){
			var _this = this;
			var a= document.querySelectorAll(".fun-Clist a");
			
			//全部分类
			mui('.fun-Clist').on('tap','a',function(index){				
				for(var i=0; i<a.length; i++ ){
					a[i].className = "";	
				}			
				this.className = 'active';				
			});
			
			//菜单按钮绑定侧滑栏显示
			_this.doc.funMenu.addEventListener("tap" , _this.swiperShow );
			
			//fun-search绑定策划栏显示			
			_this.doc.funSearch.addEventListener("tap" , _this.swiperShow );
			
			//提交 重置 绑定hide隐藏
			_this.doc.funSub.addEventListener("tap" , _this.swiperHide );
			
			//排序按钮绑定事件
			var li = document.querySelectorAll(".fun-sort li");
			
			for(var i=0; i<li.length; i++){
				li[i].addEventListener("tap" , function(){
					
					var off = arguments.callee.off = !arguments.callee.off 
					
					if( off ){
						this.querySelector("i").className = "triangle-up";
					}else{						
						this.querySelector("i").className = "triangle-down";
					}
					
				})
			}			 						
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

