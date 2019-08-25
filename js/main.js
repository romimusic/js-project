$(document).ready(function(){

    //slider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200,
      });

    //post
    var posts= [
        {
            title: 'prueba de título 1',
            date: 'publicado el ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },    
        {
            title: 'prueba de título 2',
            date: 'publicado el ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'prueba de título 3',
            date: 'publicado el ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'prueba de título 4',
            date:'publicado el ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'prueba de título 5',
            date: 'publicado el ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        }, 
    ]

    posts.forEach((item, index)=> {
        var post= `
            <article class="post">
            <h2>${item.title}</h2>
            <span class= "date"> ${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
            </article>
            `;

            $("#posts").append(post);
    })

    // Selector de tema
    
   var theme= $("#theme");
    $("#togreen").click(function(){
       theme.attr("href", "css/green.css")
    });

    $("#tored").click(function(){
        theme.attr("href", "css/red.css")
     });

     $("#toblue").click(function(){
        theme.attr("href", "css/blue.css")
     });

     //scroll automático

     $(".scroll").click(function(e){
         e.preventDefault();
        
         $('html, body').animate({
            scrollTop:0
        }, 1800);
     });

    // login falso
    $("#login form").submit(function(){
       var nombre = $("#form_name").val();
        localStorage.setItem("form_name", nombre);
    });

    var nombre2= localStorage.getItem("form_name");

    if(nombre2){
      var about= $(".about p");
      console.log("cdlm");
      about.html("<br> Bienvenido, " + nombre2 ); 
      about.append("<hr> <a href= '#' id= 'logout'> Cerrar Sesión </a>");
      $("#login").hide(); 
      $("#logout").click(function(){
          console.log("no puede ser");
        localStorage.clear();
        location.reload();
      });
    }
    
});