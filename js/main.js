

let itemsSlider = [
    {
        id : 1,
        },
    {
        id : 2,
        },
    {
        id : 3,
        },
    {
        id : 4,
        },
    {
        id : 5,
    
    },
    {
        id : 6,
    
    },
    {
        id : 7,
    
    },
    {
        id : 8,
    
    },
    {
        id : 9,
    
    },
    {
        id : 10,
    
    }
]


let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let count = 0
let number = 0;
let count2 = itemsSlider.length
let list = document.querySelector('.box__list')
let itemsList = document.querySelectorAll('.box__item');
let counter = 0


let arr = []
function addItems () {
    itemsSlider.forEach((item ) => {
        let li = document.createElement('li');
        li.className = 'box__item';
        li.innerHTML = `
            <div class="box__box">
            <p class="box__number">${item.id}</p>
        </div>
      `
        arr.push(item);
        list.appendChild(li)
    })
}addItems()


function workSlide() {

    nextBtn.addEventListener('click', () => {
        if (count2 - 2 >= number) {
          count += 250
          list.style.transform = `translateX(-${count}px)`
          number++
        }
        if (counter + 1 <=itemsSlider.length - 1) {
            counter++
        }
        itemsList.forEach((item, idx) => {
          if (counter == idx) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
      })
      
      prevBtn.addEventListener("click", () => {
        if (number > 0) {
          count -= 250
          list.style.transform = `translateX(-${count}px)`
          number--
        }
        if (counter > 0) {
          counter--
        }
        itemsList.forEach((item, idx) => {
          if (counter == idx && counter >= 0) {
           
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
      })
}
workSlide()

itemsList[4].classList.add('active');