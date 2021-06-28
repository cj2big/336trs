let links = [
  {
    text: "Home",
    href: "#",
    html: ""
  },
  {
    text: "Contacts",
    href: "#contacts",
    data: "contacts.json",
    html: ""
  }
];
async function navLinks(id) {
  links.forEach(function(link) {
    document.getElementById(
      id
    ).innerHTML += `<li><a href="${link.href}">${link.text}</a></li>`;
    if (link.data == undefined) {
      return;
    }
    fetch(link.data);
  });
}

let placeholder = {
  image:
    "https://cdn.glitch.com/b432ae35-b9ab-4e9a-9e2c-213aeb800f9f%2Fredwolf.png?v=1624823135660"
};
/*
      <div class="col s12 m7 l5">
          <div class="card medium sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src="https://cdn.glitch.com/b432ae35-b9ab-4e9a-9e2c-213aeb800f9f%2Fredwolf.png?v=1624823135660"
              />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4"
                >Card Title<i class="material-icons right">more_vert</i>
              </span>
              <a class="activator">
                Click to show Hours of Operation
              </a>
            </div>
            <div class="card-action">
              <a href="#">Call Now</a>
              <a href="#">Get Directions</a>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"
                >Card Title<i class="material-icons right">close</i></span
              >
              <div>
                Here is some more information about this product that is only
                revealed once clicked on.
              </div>
            </div>
          </div>
        </div>
        
        
        
        
        
        <div class="col s12 m7 l5">
          <div class="card medium">
            <div class="card-image">
              <img
                src="https://cdn.glitch.com/b432ae35-b9ab-4e9a-9e2c-213aeb800f9f%2Fredwolf.png?v=1624823135660"
              />
            </div>

            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
*/
