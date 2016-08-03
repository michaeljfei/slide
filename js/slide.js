$(function(){
	var slide = {
		start : 0,
		current : 0,
		time : 5000,
		itemList : $('.slide-item'),
		ctrlList : $('.ctrl-item'),
		timeout : null,
		len : function(){
			return this.itemList.length;
		},
		init : function(obj){
			if(obj !== null){
				for(i in obj){
					this[i] = obj[i];
				}
			}
			var $this = this;
			this.timeout = setTimeout(function(){
				$this.auto();
			});
			this.bind();
		},
		auto : function(){
			var $this = this;
			clearTimeout(this.timeout);
			this.animate(this.itemList.eq(this.start));
			this.current = (this.current + 1) % this.len();
			this.timeout = setTimeout(function(){
				$this.auto();
			},this.time);
		},
		changeItem : function(){
			this.itemList.eq(this.current).addClass('slide-item-active');
		},
		changeCtrl : function(){
			this.ctrlList.eq(this.current).addClass('ctrl-active');
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
			this.removeCtrl();
			this.removeItem();
			this.changeCtrl();
			this.changeItem();
		},
		bind : function(){
			var $this = this;
			this.ctrlList.click(function(){
				$this.current = $this.ctrlList.index($(this));
				$this.animate($(this));
			})
		}
	}

	slide.init({
		start : 1,
		time : 2000
	});
});