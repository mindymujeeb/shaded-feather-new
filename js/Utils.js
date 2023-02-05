"use strict";

function carousel() {
  document.querySelector('.team-1').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-1').style.visibility = 'visible'
  })
  document.querySelector('.team-1').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-1').style.visibility = 'hidden'
  })
  document.querySelector('.team-2').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-2').style.visibility = 'visible'
  })
  document.querySelector('.team-2').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-2').style.visibility = 'hidden'
  })
  document.querySelector('.team-3').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-3').style.visibility = 'visible'
  })
  document.querySelector('.team-3').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-3').style.visibility = 'hidden'
  })
  document.querySelector('.team-4').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-4').style.visibility = 'visible'
  })
  document.querySelector('.team-4').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-4').style.visibility = 'hidden'
  })
  document.querySelector('.team-5').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-5').style.visibility = 'visible'
  })
  document.querySelector('.team-5').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-5').style.visibility = 'hidden'
  })
}

carousel();
