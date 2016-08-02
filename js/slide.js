$(function(){
	var slide = {
		i: 0,
		start : 0,
		current : 0,
		time : 2000,
		itemList : $('.slide-item'),
		ctrlList : $('.ctrl-item'),
		timeout : null,
		len : function(){
			return this.itemList.length;
		},
		init : function(){
			var $this = this;
			this.timeout = setTimeout(function(){
				$this.auto();
			});
			this.bind();
		},
		auto : function(){
			var $this = this;
			clearTimeout(this.timeout);
			this.animate(this.itemList.eq(this.current));
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

	slide.init();
});