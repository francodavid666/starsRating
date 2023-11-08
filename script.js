const stars = document.querySelectorAll('.stars i')
console.log(stars)

//Loop starts

stars.forEach((star,index1)=>{
        //Add event
        star.addEventListener('click',()=>{
            console.log(index1);
            //Loop  thouhg the starts NodeList again
            stars.forEach((star,index2)=>{
                console.log(index2)
                //Add the 'active' class to the clicked star and ny stars with a lower index
                //and remove the 'active' class from any stars with higher index

            index1 >=index2 ? star.classList.add('active'):star.classList.remove('active')
            })
        })
})