// JavaScript Document
$("#tabs-left,#tabs-right").show();
!function( $ ){

  "use strict"

 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function ( element ) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      $this.trigger({
        type: 'show'
      , relatedTarget: previous
      })

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.is('.fade, .slide-left, .slide-right, .slide-up, .slide-down')

      function next() {
          
        $active
          .removeClass('active in')
          .find('> .dropdown-menu > .active')
          .removeClass('active in')

        element.addClass('active')

        if (transition) {
            element[0].offsetWidth // reflow for transition
            element.removeClass('out').addClass('in')
        } else {
          element.removeClass('fade slide-left slide-right slide-up slide-down')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next();

        var nextLoc = element.siblings().andSelf().index(element);
        var currLoc = $active.siblings().andSelf().index($active);
        
        if(nextLoc > currLoc){
            $active.removeClass('in').addClass('out');
            $active.next().removeClass('out in');
        }
        else
            $active.removeClass('out in');
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
	$('#btn-mob').click(function(){
		$('#projecttype').val('Mobile App');
	});
	
	$('#btn-web').click(function(){
		$('#projecttype').val('Website');
	});
  
	$("#btn-one").click(function(){
	  //alert("The paragraph one was clicked.");
	});  
		  
	$("#btn-two").click(function(){
		if($('#hname').val() == ''){
			$('#hname').tooltip('show');
		  return false;
	   }
	});  
        
        $("#btn-three").click(function(){
		if($('#hphone').val() == ''){
			$('#hphone').tooltip('show');
		  return false;
	   }
	});
		  
	$("#btn-four").click(function(){
		if($('#hemail').val() == ''){
		  $('#hemail').tooltip('show');
		  return false;
	   }
	});  
		  
	$("#btn-five").click(function(){
		if($('#project').val() == ''){
		  $('#project').tooltip('show');
		  return false;
	   }
	});  
		  
	$("#submit").click(function(){
		if($('#budget').val() == ''){
		  $('#budget').tooltip('show');
		  return false;
	   }
	});  
		  
/*	$("#btn-six").click(function(){
	  //alert("The paragraph six was clicked.");
	});  */
	  
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault() 
      $(this).tab('show')
    })
  })

}( window.jQuery );