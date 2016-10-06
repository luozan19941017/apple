$(function(){
    $('.search').on('click',function(){
        // this.closest('.header').addList('searching')
        $('.header').addClass('searching')
        $('.search').css({display:'none'})
        $('.bag').css({display:'none'})
        $('.guanbi').css({display:'block'})
    })
    $('.guanbi').on('click',function(){
       $('.header').removeClass('searching')
        $('.search').css({display:'block'})
        $('.bag').css({display:'block'})
        $('.guanbi').css({display:'none'})
    })



    var slides=$('.gallery-slide-wrapper a');
    var dots=$('.dot-nav .dot');
    var moving=false;
    moveTo=function(el,dir){
        moving=true;
        if(dir==='left'){
            slides.filter('.active').removeClass('active').addClass('right').delay(1000).queue(function(){
                $(this).removeClass('right').dequeue();
                moving=false;
            });
            // $(el).addClass('enter').addClass('active').delay(1000).queue(function(){
            //     $(this).removeClass('enter').dequeue();
            // });
            $(el).addClass('enter');
            $(el).get(0).offsetWidth;
            $(el).removeClass('enter').addClass('active');
        }else if(dir==='right'){

            slides.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function(){
                $(this).removeClass('leave').dequeue();
                moving=false;
            })
            $(el).addClass('right');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right').addClass('active');
        }
        dots.removeClass('active').eq(slides.index(el)).addClass('active');

    }
    moveRight=function(){
        if(moving){return;}
        var active=slides.filter('.active')
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,'right');
    }
    moveLeft=function(){
        if(moving){return;}
        var active=slides.filter('.active');
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,'left')
    }
    dots.on('click',function(){
        if(moving){return;}
        var d=slides.filter('.active').index()  //当前的下标
        var n=$(this).index(); //点击的下标
        var el=slides.eq(n)
        if(d==n){
            return;
        }
        if(d>n){
            moveTo(el,"left")
        }else{
            moveTo(el,"right")
        }
    })
    // setInterval(function(){
    //     moveRight()
    // },1000)

//banner 左右按钮
    $('.btn .left').on('click',function(){
        moveLeft()
    })
    $('.btn .right').on('click',function(){
        moveRight()
    })


//    底部开始
  $('.f-list .f-xiala').on('click',function(){
      // alert(0)
      $('.f-xiala ul').eq($(this).index()).toggleClass('active');
    // console.log($(this).index())
  })


//    底部结束
    $('.chahao').on('click',function(){
        // alert(0)
        $('.zuo').toggleClass('z-xuanzhuan');
        $('.you').toggleClass('y-xuanzhuan');
        $('.xiala').toggleClass('active')
    })
})