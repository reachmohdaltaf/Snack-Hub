








const content = document.querySelector('.content');

let page = 0;
const pageSize = 8;

const prev = document.getElementById('prev')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const next = document.getElementById('next')

const pages = [one, two, three, four];

const fetchData = () => {
    fetch("//dummyjson.com/recipes")
    .then(res => res.json())
    .then(showData);
}

const showData = (data) => {
    console.log(data);
    let newData = data.recipes.slice(pageSize*page, pageSize*(page+1))
    pushCards(newData);
}

const pushCards = (data) => {
    data.forEach(element => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('div'); 

        image.src = element.image;
        name.innerText = element.name; 

        card.classList.add('card');
        image.classList.add('image');
        
        card.append(image);
        card.append(name); 

        content.append(card);
    });
}

const runApp = () => {
    setActive();
    fetchData();
}

const setActive = () => {
    if(page == 0) {
        prev.style.visibility = 'hidden';
    }
    else {
        prev.style.visibility = 'visible';
    }
    if(page == 3) {
        next.style.visibility = 'hidden';
    }
    else {
        next.style.visibility = 'visible';
    }
    
    pages.forEach(item => {
        item.classList.remove('active')
    });
    
    
    pages[page].classList.add('active')
}
    
runApp();
    
pages.forEach(item => {
    item.addEventListener('click', (e) => {
        page = Number(e.target.innerText) - 1;
        content.innerHTML = '';
        runApp()
    })
});

prev.addEventListener('click', () => {
    page = page - 1;
    content.innerHTML = '';
    runApp()
})
next.addEventListener('click', () => {
    page = page + 1;
    content.innerHTML = '';
    runApp()
})























// const content = document.querySelector(".content")

// function fetchData(){
//     // Could be GET or POST/PUT/PATCH/DELETE
// fetch('//dummyjson.com/recipes')
// .then(res => res.json())
// .then(showData);

// /* { status: 'ok', method: 'GET' } */
// }


// function showData(data){
//       console.log(data)
//       pushCards(data)
// }

// function pushCards(data){
//     data?.recipes?.forEach(item => {
//         const card = document.createElement('div')
//         card.classList.add("card");
//         card.innerText = item.name;
//         content.append(card);
//     });
// }  

// fetchData();