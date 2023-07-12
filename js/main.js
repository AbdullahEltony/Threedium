
const sections = document.querySelectorAll('section')
const hideElement1 = document.querySelector('.mian-banner .hide-1')
const hideElement2 = document.querySelector('.main-banner .hide-1')
const learnMoreBtns = document.querySelectorAll('.learnMore')
const sectionDetails = document.querySelectorAll('.section-details')


function showElement(el){
    $(el).css({
        opacity:1,
        transform:'none'
    })
}
showElement(hideElement1)
showElement(hideElement2)

//header minue in responsive
function show_minue(e) {
    $('.minue').toggle()
    $(e).css({
        backgroundColor:'#f2f2f2',
        border:'none'
    })
}

function movTop() {
    document.documentElement.scrollTop = 0;
}
// toggle section details 
learnMoreBtns.forEach((btn,i)=>{
    btn.addEventListener('click',function(){
       let container = this.closest('.container');
       $(sectionDetails[i]).toggle();
       $(container).toggleClass('swideget')
    })
   
})

window.onscroll = function() {
    if(scrollY >= 300) {    // make header fixed
        $('header').css({
            position:'fixed',
            zIndex:'98',
            width:'100%',
        })
    }else {
        $('header').css({
            position:'relative',
        })
    }
    if(scrollY >= 400) {
        $('#movTop').show()
    }else{
        $('#movTop').hide()
    }

    // start fade in animation 
    sections.forEach(section=>{
        const sectionId= section.getAttribute('id')
        if(scrollY >=section.offsetTop - $(section).innerHeight()){
            const targetElement1 = `#${sectionId} .hide-1`
           showElement(targetElement1);
        }
        // if(scrollY >=section.offsetTop - $(section).innerHeight() - 200) {
        //     const targetElement2 = `#${sectionId} .hide-2`
        //     $(targetElement2).css({
        //         opacity:1,
        //         transform:'none'
        //     })
        // }
    })
}


/* ========= slider cards ======== */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
    }
})
