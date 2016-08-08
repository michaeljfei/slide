$(function(){
	var slide = {
		start : 0,
		current : 0,
		time : 5000,
		itemList : $('.slide-item'),
		ctrlList : $('.ctrl-item'),
		timeout : null,

		//获取轮播图片的数量
		len : function(){
			return this.itemList.length;
		},
		//初始化函数
		init : function(obj){
			//判断是否设置自定义属性
			if(obj !== null){
				for(i in obj){
					this[i] = obj[i];
				}
			}
			//缓存this指向，方便setTimeout函数调用时this指向正确
			var $this = this;
			this.timeout = setTimeout(function(){
				//立即执行一个自动动画
				$this.current = $this.start;
				$this.auto();
			});
			//调用事件绑定函数
			this.bind();
		},
		auto : function(){
			var $this = this;
			clearTimeout(this.timeout);
			this.animate(this.current);
			console.log(this.current);
			this.current = (this.current + 1) % this.len();
			this.timeout = setTimeout(function(){
				$this.auto();
			},this.time);
		},
		changeItem : function(current){
			this.itemList.eq(current).addClass('slide-item-active');
		},
		changeCtrl : function(current){
			this.ctrlList.eq(current).addClass('ctrl-active');
		},
		removeItem : function(){
			this.itemList.each(function(){
				$(this).removeClass('slide-item-active');
			});
		},
		removeCtrl : function(){
			this.ctrlList.each(function(){
					$(this).removeClass('ctrl-active');
				});
		},
		animate : function(current){
			this.removeCtrl();
			this.removeItem();
			this.changeCtrl(current);
			this.changeItem(current);
		},
		bind : function(){
			var $this = this;
			this.ctrlList.click(function(){
				$this.current = $this.ctrlList.index($(this));
				$this.animate($this.current);
			})
		}
	}

	slide.init({
		start : 3,
		time : 3000
	});
});