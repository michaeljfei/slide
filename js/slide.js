$(function(){
	var slide = {
		start : 0,
		current : 0,
		time : 1000,
		itemList: $('.slide-item'),
		ctrlList : $('.ctrl-item'),
		timeout : null,
		
		len : function(){
			return this.itemList.length;
		},
		init : function(){
			this.changeItem();
			this.bind();
		},
		auto : function(func){
			clearTimeout(this.timeout);
			timeout = setTimeout(func.call(this),this.time);
		}
		,
		changeItem : function(){
			this.itemList.eq(this.current).addClass('slide-item-active');
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
		animate : function(){

		},
		bind : function(){
			var $this = this;
			this.ctrlList.click(function(){
				$this.removeCtrl();
				$this.removeItem();
				$(this).addClass('ctrl-active');
				$this.current = $this.ctrlList.index($(this));
				$this.changeItem();
			})
		}
	}
	slide.init();
});