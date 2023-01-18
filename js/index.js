
const eventList = [
	{
	title:"Riash Annual Conference",
	description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quisquam, saepe cupiditate quam velit temporibus autem ab blanditiis. Veniam est molestiae dicta magni molestias unde voluptatum. Exercitationem est minima at, commodi exp,edita!",
	image:"event1.jpg",
	eventDate:"",
	},
	{
	title:"Birthday Celebration",
	description:"Non, explicabo tenetur dolores, assumenda, perspiciatis quisquam deleniti aperiam tempora nesciunt aut in doloribus rem. Voluptate aspernatur aliquid placeat maiores ducimus animi consequatur, doloremque eos illum qui magnam quas rerum ",
	image:"event2.jpg",
	eventDate:"",
	},
	{
	title:"Story tellers Show",
	description:"voluptatibus enim culpa harum ut fugiat sapiente non voluptatem vero minima quibusdam, temporibus nemo quos. Eos, ipsam. Reiciendis at commodi labore quasi, cupiditate pariatur quibusdam magni obcaecati voluptate perferendis sit iure ",
	image:"event3.jpeg",
	eventDate:"",
	},
	{
	title:"Cinema Pre-release programme",
	description:"molestias. Doloremque eligendi excepturi sint laudantium ratione? Alias voluptatibus, adipisci qui veritatis eveniet facere odit ratione eum voluptate quidem, quis est et iusto dolore natus rerum. Placeat odio non ex commodi accusamus amet ",
	image:"event4.jpg",
	eventDate:"",
	},
	{
	title:" 11th propelai Hackathon",
	description:"voluptatem. Ab distinctio praesentium architecto, saepe deserunt ad autem qui delectus dolores quibusdam, ut impedit unde esse obcaecati deleniti dignissimos officiis odio reiciendis iste nostrum cumque fuga soluta, magnam voluptates. Dicta ",
	image:"event5.jpg",
	eventDate:"",
	},
	{
	title:"Canon Photography Contest",
	description:"voluptatem. Ab distinctio praesentium architecto, saepe deserunt ad autem qui delectus dolores quibusdam, ut impedit unde esse obcaecati deleniti dignissimos officiis odio reiciendis iste nostrum cumque fuga soluta, magnam voluptates. Dicta ",
	image:"event6.jpg",
	eventDate:"",
	},
]

const eventSlideContainer = document.querySelector(".events .event-container .glide ul.glide__slides");
const scrollToItems = document.querySelectorAll('.scrollTo');
const scrollLocationItems = document.querySelectorAll('.scrollLocation');
const mainNav = document.querySelector(".landing .nav")





//-------Display Items
window.addEventListener("load", ()=> {
	loadEvents(eventList)
})




// display events 

const loadEvents = (events) => {
		const date = new Date().toISOString(); // "2019-09-18T13:49:12.775Z"
    	const [yyyy, mm, dd, h, i, s] = date.split(/T|:|-/);
	events.map((event) => {
		const rand = parseInt(Math.random()*10 + 1);

		const eventDate = `${yyyy}-${mm}-${dd - rand}`

		 eventSlideContainer.innerHTML += `<li class="glide__slide">
								<div class="img-container">
									<img src="./assets/images/${event.image}" width="600px" alt="${event.title} picture">
								</div>
								<div class="texts">
									<h2 class="title">
									${event.title}
									</h2>
									<h5 class="date">${eventDate}</h5>
									<p class="description">
										${event.description}
									</p>
									
								</div>
							</li>`
	})

}


//navigae/Scroll to destination on click

scrollToItems.forEach((item)=>{
	const ul = document.querySelector(".nav .nav-items")
	item.addEventListener("click", (e)=>{
		if(mainNav.classList.contains("shown")){
			mainNav.classList.remove("shown");
			ul.style.top = "-100vh"
			ul.style.opacity = "1"


		console.log("in")
		}
		console.log("out")

		const destination = e.target.dataset["scrollto"];
		
		scrollLocationItems.forEach((itm) => {
			if(destination === itm.dataset["scrolllocation"]){
				const top = itm.getBoundingClientRect().y;
				const presentY = window.scrollY;
				window.scrollTo({top:top + presentY, behavior: 'smooth' });
			}
		})

	} )
})




// google map
let map;

function initMap() {
	const myLatLng = { lat: 34.104052, lng: -118.243244};
  	map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13,

  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
  }

  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "RiverSide Cafe",
  });
}
window.initMap = initMap;





