"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);

  document.querySelector('.carousel__item').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-1').style.display = 'block'
  })
  document.querySelector('.carousel__item').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-1').style.display = 'none'
  })
  document.querySelector('.carousel__item-2').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-2').style.display = 'block'
  })
  document.querySelector('.carousel__item-2').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-2').style.display = 'none'
  })
  document.querySelector('.carousel__item-3').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-3').style.display = 'block'
  })
  document.querySelector('.carousel__item-3').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-3').style.display = 'none'
  })
  document.querySelector('.carousel__item-4').addEventListener('mouseenter', (e)=>{
    document.querySelector('.description-4').style.display = 'block'
  })
  document.querySelector('.carousel__item-4').addEventListener('mouseleave', (e)=>{
    document.querySelector('.description-4').style.display = 'none'
  })
}

carousel();
