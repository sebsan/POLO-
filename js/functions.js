
  function toStrk(clss){
    let toStrk = $('.page').find(clss)
    let data = toStrk.attr('data-font')
    
    toStrk.each(function(ind){
      let txt = $(this).text().toUpperCase().split('')
      let clssId =  $(this)
      clssId.html('')
      txt.forEach(function(u){
        let v = u.charCodeAt() 
        $('<div/>', {
          class: 'cadratin',
          'data-dec': v,
          'id': data + '_' + ind + '_' + v
        }).appendTo(clssId).load('svg/'+ v + '.svg')
      })
    })
    setTimeout(function(){
      resizerCadra(clss)
    }, 800)
  } // End toStrk


function check( type ){
  let clss = $('header #' + type);
  console.log(clss)
  $('.page .'+type  ).toggle();
}

function resizerCadra(clsst){
  let cadras = $(clsst + ' .cadratin')
  console.log(cadras)
  cadras.each(function(i){
    let w = $(this).find('svg').attr('width') 
    let h = $(this).find('svg').attr('height') 
    $(this).find('svg').attr({
      width: 'auto',
      heigth: '200px'
    })
    $(this).attr({
      style: 'width: auto; height: 100px'
    })
    $(this).find('svg').attr({
      style: 'width: auto; height: 100'
    })
  })
}

