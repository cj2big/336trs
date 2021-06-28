var week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var contactCards = "";
document.getElementsByTagName("MAIN")[0].innerHTML = '<div id="card-data" class="row"></div>'
fetch("contacts.json")
  .then(response => response.json())
  .then(function(data) {
    data.forEach(function(x, i, a) {
      var table;
      if (x.phone == undefined) {
        x.phone = "";
      } else {
        x.phone = `<a href="tel:${x.phone}">Call Now</a>`;
      }
      if (x.maps == undefined || x.maps == "") {
        x.maps = "";
      }else{
        x.maps = `<a target="_blank" href="${x.maps}">Get Directions</a>`
      }
      if (x.desc == undefined) {
        x.desc = "";
      }
      if (x.hours !== undefined) {
        var table = `<table><thead><tr><th>Day</th><th>Times</th></tr></thead><tbody>`;
        week.forEach(function(day, i) {
          if(x.hours[i] == undefined){
            x.hours[i] = "Unknown";
          }
          table += `
          <tr>
            <td>${day}</td>
            <td>${x.hours[i]}</td>
          <tr>
          `;
        });
        table += `</tbody></table>`;
      }
      if (x.img == undefined) {
        x.img =
          "https://cdn.glitch.com/b432ae35-b9ab-4e9a-9e2c-213aeb800f9f%2Fredwolf.png?v=1624823135660";
      }
      var opt = {
        phone: x.phone,
        hours: table,
        maps: x.maps,
        ver: []
      };
      opt.ver = [
        [
          "sticky-action",
          "waves-effect waves-block waves-light",
          'class="activator"',
          "activator grey-text text-darken-4",
          '<i class="material-icons right">more_vert</i>',
          '<a class="activator">Click to show Hours of Operation</a>',
          `<div class="card-reveal"><span class="card-title grey-text text-darken-4">${x.name}<i class="material-icons right">close</i></span><div>${x.desc}${opt.hours}</div>`
        ],
        ["", "", "", "", "", `<div>${x.desc}</div>`, ""]
      ];
      if (x.hours == undefined) {
        opt.ver = opt.ver[1];
      } else {
        opt.ver = opt.ver[0];
      }
      let y = `
        <div class="col s12 m6 l4">
          <div class="card medium ${opt.ver[0]}">
            <div class="card-image ${opt.ver[1]}">
              <img ${opt.ver[2]} src="${x.img}"/>
            </div>
            
            <div class="card-content">
              <span class="card-title ${opt.ver[3]}">${x.name}${
        opt.ver[4]
      }</span>
              ${opt.ver[5]}
            </div>
            <div class="card-action">
              ${opt.phone}
              ${opt.maps}
            </div>
            ${opt.ver[6]}
          </div>
        </div>
`;
      document.getElementById("card-data").innerHTML += y;
    });
    
  });
/*
      let y = {
        a: `
        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image">
              <img src=""/>
            </div>

            <div class="card-content">
              <span class="card-title">${x.name}</span>
              <div>
                ${x.desc}
              </div>
            </div>
            <div class="card-action">
              ${opt.phone}
              ${opt.maps}
            </div>
          </div>
        </div>
`,
        b: `
      <div class="col s12 m6 l4">
          <div class="card medium sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src=""/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4"
                >${x.name}<i class="material-icons right">more_vert</i>
              </span>
              <a class="activator">
                Click to show Hours of Operation
              </a>
            </div>
            <div class="card-action">
              ${opt.phone}
              ${opt.maps}
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"
                >${x.name}<i class="material-icons right">close</i></span
              >
              <div>
                ${x.desc}
              </div>
            </div>
          </div>
        </div>
        `*/
