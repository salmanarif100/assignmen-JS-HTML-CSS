
//my banner script code here...
     
var currentBanner = 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg';
  
function changeBanner() {
  var banner = document.querySelector('.banner');
  if (currentBanner == 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg') {
    banner.style.backgroundImage = "url('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg')";
    currentBanner = 'https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg';
  } else {
    banner.style.backgroundImage = "url('https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg')";
    currentBanner = 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg';
  }
}
//My Api's feching here...
fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json();
    // console.log(res);
}).then((myData)=>{
    // feched data check on console...
    console.log(myData);
    let myTable="";
    myData.map((items)=>{
        myTable+=`
        <tr>
          <td>${items.title}</td>
          <td>${items.description}</td>
          <td>${items.price}</td>
          <td><img src="${items.image}" /></td>
        </tr>`;
    });
    document.getElementById("tBody").innerHTML=myTable;
}).catch((error)=>{
    console.log(error);
})


// .then (data => {
//     console.log(data);
//     data.forEach(element => {
//         const markup = `<tr>
//         <td>${element.title}</td>
//         <td>${element.price}</td>
//         <td>${element.description}</td>
//         <tr>`;
//         document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     });
// })
// .catch(error => console.log(error));