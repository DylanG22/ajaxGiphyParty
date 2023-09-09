const form = document.querySelector('#giphyForm');
const div = document.querySelector('#imgDiv');
const input = document.querySelector('#searchTerm');
const removeBtn = document.querySelector('#removeBtn');



async function getGif(search){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key:'dBkwiXiv06ez42GWy5infl4tjee6H6Hs',q:search,limit:1}});
    let url = res.data.data[0].images.original.url;  
    console.log(res);
    createImg(url);
}

function createImg(url){
    const img = document.createElement('img');
    img.setAttribute('src',url);
    div.append(img);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(input.value === ''){
        return
    }
    console.log(input.value)
    getGif(input.value);
})

removeBtn.addEventListener('click',function(){
    div.innerHTML = '';

})