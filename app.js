let head = document.head || document.getElementsByTagName('head')[0];
     
      let $btn = $('<div class="upscroller">↑ Inicio </div>');
			$(page.el).prepend($btn); 

      $btn.click(function (event) {
				event.stopPropagation();
				event.preventDefault();
				let pageContent = $('.page-content', page.el);
				pageContent.scrollTop(0, Math.round(pageContent.scrollTop() / 6));
			});

      $(".page-content", page.el).scroll(function (event) {
				let e = $(event.target).scrollTop();
				if (e > 300) $btn.addClass('show');
				else $btn.removeClass('show');
			});
            
