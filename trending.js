

async function trendingMovies() {

    try{

        let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key= bb118f734eaed1d11bd558e6d7cbebc3 &media_type=movie&time_window=day`);
        let trendinData = await res.json()
        console.log('arr:',trendinData)

    }
    catch (e){
        console.log('error form trending fuction:',e)
    }

}

trendingMovies()