function loadCategories(){
    // Fatech The Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
}

function displayCategories(categories){
    const categoyContainer= document.getElementById("categories_container")
    for(let cat of categories){
        const categoryDiv= document.createElement("div");
        categoryDiv.innerHTML=`
        <button id="btn-${cat.category_id}" onclick="loadCategoriesVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        categoyContainer.appendChild(categoryDiv);
    }
}
loadCategories();


function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
}


const loadCategoriesVideos = (id) => {

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);


    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickedButton= document.getElementById(`btn-${id}`)
        console.log(clickedButton)
        clickedButton.classList.add("active")
        displayVideos(data.category)
    });
}



const displayVideos=(videos)=> {
    const vedioContainer= document.getElementById("vedios_container");

    vedioContainer.innerHTML="";
    if(videos.length === 0){
        vedioContainer.innerHTML=`
        <div class="flex col-span-full flex-col py-20 w-full text-center justify-center items-center">
            <img src="assest/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `
        return;
    }

    videos.forEach(video=>{
        console.log(video);
        const vedioCard= document.createElement("div")
        vedioCard.innerHTML=`
                <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-[150px] rounded object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black rounded px-1 text-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                    <h2 class="font-semibold text-sm">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex items-center gap-3">${video.authors[0].profile_name} <img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-500">${video.others.views} Views</p>
                </div>
            </div>
        </div>
        `;
        vedioContainer.append(vedioCard)
    })
};

// loadVideos()


// Load Categories Wise Videos

