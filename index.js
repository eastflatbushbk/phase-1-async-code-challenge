// code here

document.addEventListener("DOMContentLoaded", function() {
  const showsUrl = "http://localhost:3000/shows"
  
    fetch(showsUrl)
  .then(function(response){ return response.json() })
  .then(function(data){
      const list = document.querySelector('#list')
      data.forEach(show=>{
      const li = document.createElement('li')
      list.appendChild(li) 
      li.innerHTML = show.title
        li.onclick = () => {
        
          const queuedPanel = document.querySelector('#queued')
         
          const li = document.createElement('li')
          li.onclick = removeItem
          li.innerHTML = show.title
          queuedPanel.appendChild(li)
                  
        }
        function removeItem (e) {e.target.parentElement.removeChild(e.target) }

         const searchButton = document.querySelector('#search-button')
         const input = document.querySelector('#search')

         searchButton.addEventListener( 'click' , renderSearch ) 
         
         function renderSearch() {
            console.log('click')
            list.innerHTML = ''
            data.forEach(show=>{
              if (show.title.toLowerCase().includes(input.value.toLowerCase())){
              const li = document.createElement('li')
              list.appendChild(li) 
              li.innerHTML = show.title;
              li.onclick = () => {
                 const queuedPanel = document.querySelector('#queued')
                const li = document.createElement('li')
                li.onclick = removeItem
                li.innerHTML = show.title
                queuedPanel.appendChild(li)
                        
              }
              }
             
            })

         }

      })
  })
});