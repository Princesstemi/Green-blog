// nav logic

// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
const navbar = document.querySelector("nav")

// add click event listener to it
menu_btn.addEventListener("click", function(){
       menu_btn.classList.toggle("close-menu") 
       navbar.classList.toggle("show-nav")
       
})


// logic to display the post form
const post_btn = document.querySelector(".post-btn")

// add click event listener to it
post_btn.addEventListener("click", function(){
        // target the post form and display it
        document.querySelector(".post-form").style.display = "flex"
})


// logic to close the post form
document.querySelector(".close-form").addEventListener("click", function(){
      // target the post form and close it
        document.querySelector(".post-form").style.display = "none"
})


// logic to upload and preview image

// target the file input
let image_url = ""
const file_input = document.querySelector("#uploaded_file")
file_input.addEventListener("change", function(){
          let selected_image = file_input.files[0]
        //   convert the selected image to object url
      image_url =   URL.createObjectURL(selected_image)

      document.querySelector(".image-preview").src = image_url
})

// add event listener of change to it when you click outside of the form
   window.addEventListener("click", function(event) {
    if (event.target !== post_btn && event.target !== post_btn){
      document.querySelector(".post-form").style.display = "none"
    }
   
  
   })
  
    
   
  