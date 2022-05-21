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
            title: 'Article 1',
            date: 'Published ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },    
        {
            title: 'Article 2',
            date: 'Published ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'Article 3',
            date: 'Published ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'Article 4',
            date:'Published ' + moment().format("DD/MM/ YY"),
            content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magni quam, debitis tenetur adipisci temporibus ab labore sit excepturi quas, voluptatibus blanditiis vitae repellat illum dolore perspiciatis possimus. Architecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, similique veniam iusto doloribus harum dicta nobis beatae aperiam, quas quae fugit atque. Ea sapiente fugiat inventore deleniti quae quaerat.',
        },
        {
            title: 'Article 5',
            date: 'Published ' + moment().format("DD/MM/ YY"),
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

    //Theme Selector
    
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

     //automatic scroll

     $(".scroll").click(function(e){
         e.preventDefault();
        
         $('html, body').animate({
            scrollTop:0
        }, 1800);
     });

    // login falso
    $("#login form").submit(function(){
       var name = $("#form_name").val();
        localStorage.setItem("form_name", name);
    });

    var name2= localStorage.getItem("form_name");

    if(name2){
      var about= $(".about p");
      about.html("<br> Welcome, " + name2 ); 
      about.append("<hr> <a href= '#' id= 'logout'> Log Out </a>");
      $("#login").hide(); 
      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }
    
});