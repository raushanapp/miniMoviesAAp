


async function main() {

    try{
        let movie = document.getElementById('serachMovies').value

        let res = await fetch(`http://www.omdbapi.com/?apikey=71ce7a0a&s=${movie}`);

        let data =await res.json()
        // console.log('dta:',data)
        // let arr =data.Search

        // 
        return data.Search;
        // console.log('dta:',data)

    }
    catch(e) {
        console.log('error form search movies:',e)
    }

}


async function searchMovies(){

    let arr = await main();
    if (arr===undefined) {
        return false
    }

    appendData(arr)
    movieData(arr)
    console.log('data',arr)
}

// main()

let show = document.getElementById('show')
const appendData =(arr) =>{


    
    // console.log('aa:',arr)
    show.innerHTML = null
    show.style.display ='none';
    arr.forEach(({Title,Year}) =>{

        let div = document.createElement('div')

        let title = document.createElement('p')
        title.innerText = `Name - ${Title}`
        let year =document.createElement('p')
        year.innerText = `Year - ${Year}`

        div.append(title,year);
        show.append(div)
        show.style.display ='block';
    // show.innerHTML = null



    })
    // show.innerHTML = null


   
}
let dataShow = document.getElementById('showList')
const movieData =(arr) =>{

    if (arr===undefined) {
        return false
    }
    dataShow.innerHTML =null
    // console.log('arr:',arr)
    arr.forEach(({Title,Year,Poster})=>{
        let id = (Math.random()*10)
        let n = id.toFixed(1);

          // console.log(id)

          let div = document.createElement('div')
          let title = document.createElement('p')
          title.innerText = `Title - ${Title}`
          title.setAttribute('class', 'pTitle')
          let year = document.createElement('p')
          year.innerText = `Year - ${Year}`
          year.setAttribute('class', 'pTitle')

          let poster= document.createElement('img')
          poster.src = Poster
          poster.setAttribute('id',"staticImg")

          let id1= document.createElement('p')
          id1.innerText = `Rating - ${n}`
          id1.setAttribute('class', 'pTitle')


          div.append(poster,title,year,id1)
          dataShow.append(div)


     })

}



// function debounce 
let timerId;

function debounce(func,delay) {

    if (timerId){
        clearTimeout(timerId)
    }

  timerId=  setTimeout(function (){
       func()
    },delay)
}