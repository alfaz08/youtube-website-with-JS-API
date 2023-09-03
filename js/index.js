const handleCategory = async() =>{
  const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await res.json();
  const dataId = data.data;
  
  const tabContainer = document.getElementById('tab-container');
  loadVideoAll(1000)
  dataId.forEach(category => {
    
    // loadVideoAll(category.category_id);
     const div = document.createElement('div');
   
  
     div.innerHTML=`
     <a onclick="loadVideo(${category.category_id})" class="hover:bg-red-600 hover:text-white tab bg-gray-200">${category.category}</a>
     `
     tabContainer.appendChild(div)
  });
}

//new try
var array=[];
var finalArray =[]
const sortButton =async ()=>{
  
  
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList =`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2`
    cardContainer.innerHTML = "";
    // console.log(videoData);   
    globalData.forEach(id => {
      const data = id.others.views;
       
      // Character to replace
      const char_to_replace = 'K'
     // Character to replace it with
      const replacement_char = ''
      //Perform the replacement using the 'replace' method
      const newString = parseFloat(data.replace(char_to_replace, replacement_char))
     id.others.views =newString;
      finalArray=array.push(id);
  });
  var dataSort =[]
  console.log(globalData);
  dataSort =(globalData.sort((a,b)=>b.others.views-a.others.views));
  // console.log(dataSort);
  sortDataFinal(dataSort);

}

const sortDataFinal = (id) =>{
  console.log(id);
  
   
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList =`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2`
    cardContainer.innerHTML = "";
    // console.log(videoData);   
    id.forEach(id => {
      
     const div = document.createElement('div');
     div.innerHTML=`
     <div class="card bg-base-100 shadow-xl">
     <div class="relative">
     <figure>
     <img class='w-96 h-60 rounded-lg' src="${id.thumbnail}" />
     </figure>
       <div class="absolute inset-0 flex items-end justify-end ">
       <p class="text-white bg-black  rounded-md lg:text-xl"> ${handleTime(id.others.posted_date)}</p>
         
       </div>
    </div>
   <div class="flex justify-around mt-2">
   <div class="image ">
       <img class="rounded-full w-20 h-20" src="${id.authors[0].profile_picture}" alt="">
     </div>
     <div class=''>
       <h2 class="card-title">${id.title}</h2>
       <div class='flex  gap-2'>
         <p>${id.authors[0].profile_name}</p>
          <p>${id.authors[0].verified=== true? `<img class='mt-1 w-4 h-4 align-center item-center' src="./images/verified.png" alt="Verified">`:''}</p>
       </div>
     <p>${id.others.views}K views</p>
     </div>
   </div>
   </div>
     `
     cardContainer.appendChild(div)
  });
  }


//all video
const loadVideoAll = async (id) =>{
 
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data =await res.json();
    const videoData = data.data;
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList =`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2`
    cardContainer.innerHTML = "";
    // console.log(videoData);   
    videoData.forEach(id => {
      
     const div = document.createElement('div');
     div.innerHTML=`
     <div class="card bg-base-100 shadow-xl">
     <div class="relative">
     <figure>
     <img class='w-96 h-60 rounded-lg' src="${id.thumbnail}" />
     </figure>
       <div class="absolute inset-0 flex items-end justify-end ">
       <p class="text-white bg-black  rounded-md lg:text-xl"> ${handleTime(id.others.posted_date)}</p>
         
       </div>
    </div>
   <div class="flex justify-around mt-2">
   <div class="image ">
       <img class="rounded-full w-20 h-20" src="${id.authors[0].profile_picture}" alt="">
     </div>
     <div class=''>
       <h2 class="card-title">${id.title}</h2>
       <div class='flex  gap-2'>
         <p>${id.authors[0].profile_name} </p>
          <p>${id.authors[0].verified=== true? `<img class='mt-1 w-4 h-4 align-center item-center' src="./images/verified.png" alt="Verified">`:''}</p>
       </div>
     <p>${id.others.views} views</p>
     </div>
   </div>
   </div>
     `
     cardContainer.appendChild(div)
  });

 
}
var globalData;
//Categorize video
const loadVideo = async (id) =>{
  console.log(id);
  if(id===1005){
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList=`container mx-auto `
    cardContainer.innerHTML=""
    // console.log(videoData);   
    
     const div = document.createElement('div');
     div.innerHTML=`
    <div class="card w-96 mt-14 md:mt-14 lg:mt-40 mx-auto ">
  <figure><img src="./images/Icon.png" alt="Shoes" /></figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-center text-2xl">Oops!! Sorry, There is no<br> content here</h2>
   </div>
    </div>

     `
     cardContainer.appendChild(div)
  }
  
  else{
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data =await res.json();
    const videoData = data.data;
    globalData=videoData;
    console.log(globalData);
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList =`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2`
    cardContainer.innerHTML = "";
    // console.log(videoData);   
    videoData.forEach(id => {
      
     const div = document.createElement('div');
     div.innerHTML=`
     <div class="card bg-base-100 shadow-xl">
     <div class="relative">
     <figure>
     <img class='w-96 h-60 rounded-lg' src="${id.thumbnail}" />
     </figure>
       <div class="absolute inset-0 flex items-end justify-end ">
       <p class="text-white bg-black  rounded-md lg:text-xl"> ${handleTime(id.others.posted_date)}</p>
         
       </div>
    </div>
   <div class="flex justify-around mt-2">
   <div class="image ">
       <img class="rounded-full w-20 h-20" src="${id.authors[0].profile_picture}" alt="">
     </div>
     <div class=''>
       <h2 class="card-title">${id.title}</h2>
       <div class='flex  gap-2'>
         <p>${id.authors[0].profile_name}</p>
          <p>${id.authors[0].verified=== true? `<img class='mt-1 w-4 h-4 align-center item-center' src="./images/verified.png" alt="Verified">`:''}</p>
       </div>
     <p>${id.others.views} views</p>
     </div>
   </div>
   </div>
     `
     cardContainer.appendChild(div)
  });
  }
 
}





const handleTime=(id) =>{
  if(id===''){
    return '';
  }
  else{
    const hour =Math.floor(id/3600);
    
    
   const hour2 = parseInt(id%3600);
   
  const min =parseInt( hour2/60);
 
  const numberString = `${hour} hrs ${min} min ago`;
  return numberString
  
  
  }
}


/* <p class="text-white text-2xl font-bold"></p> */


handleCategory();
loadVideo(1000)


