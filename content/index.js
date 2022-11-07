fetch("https://api.github.com/users").then(response => response.json()).then(users => {
    if(users?.length){
        users?.forEach(user =>{
    
            document.querySelector('.row').innerHTML += `
            <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div  class="col-md-12 col-xl-4">
      
              <div class="card" style="border-radius: 15px;">
                <div class="card-body text-center">
                  <div class="mt-3" style="background-color: violet;">
                  <div class="mb-2" id="profile">
                  <img  src="${user.avatar_url}"/>  
                  </div>
                  
                </div>
                
                  <div class="mb-2" id="pro_name">
                  ${user.login}
                </div>
                <div class="text-muted mb-4" id="des">
                ${user.node_id}

                </div>
                  <p class="text-muted mb-4" id="bio"><span class="mx-2"></span> 
        
                  <div class="mb-4 pb-2">
                   
                  </div>
                  <button id="pro_btn" type="button" href"${user.html_url}" class="btn btn-primary btn-rounded btn-lg mb-5 rounded-pill" onclick="handleClick()">
                    View Profile
                  </button>
              </div>
      
            </div>
          </div>
        </div>
      </section>
            `;
        })
    } else {
        document.querySelector('.row').innerHTML = "<div class='alert alert-success'>Your API limit exceeded</div>"
    }

 })