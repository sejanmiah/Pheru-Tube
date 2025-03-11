function loadCategories(){
    // Fatech The Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
}
// {
//     "category_id": "1001",
//     "category": "Music"
// }
function displayCategories(categories){
    const categoyContainer= document.getElementById("categories_container")
    for(let cat of categories){
        const categoryDiv= document.createElement("div");
        categoryDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        categoyContainer.appendChild(categoryDiv);
    }
}
loadCategories();

// Load Vides From API


// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
}


const displayVideos=(videos)=> {
    const vedioContainer= document.getElementById("vedios_container");
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

loadVideos()