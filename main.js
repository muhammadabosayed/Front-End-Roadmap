const up = document.querySelector('.up')
const btn = document.querySelector('.btn')
const close = document.querySelector('.close')
const menu = document.querySelector('.menu')
const RandomVedio = document.querySelector('.randvedio')
const video = document.querySelector('.video')


btn.onclick = function () {
  menu.style.transform = 'translateY(0)'
  menu.style.transition = '.6s'
}
close.onclick = function () {
  menu.style.transform = 'translateY(-100vh)'
  menu.style.transition = '.6s'
}

window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.right = '20px'
    up.style.transition = '1s'
  } else {
    up.style.right = '-60px'
    up.style.transition = '1s'
  }
}

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
/********Random vedio***** */
let index = 0
RandomVedio.addEventListener("click", function () {

  let Randomvid = [
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/1s-WLmproNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `,
    ` <iframe width="560" height="315" src="https://www.youtube.com/embed/GztmDwaTW1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Of28NT3AkvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,  
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/uheOkfZgUf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/sw8aKmwbGh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/EB_9bmDrK0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/AFsSKbs4FnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `,
    `<iframe width="360" height="250" src="https://www.youtube.com/embed/lELwc6vQaAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  ]

  video.style.transition="1s"


  if(index==7)
  {
    index=0
  }else{
    index++
  }
  video.innerHTML= Randomvid[index]
})


