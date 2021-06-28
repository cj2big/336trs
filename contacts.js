var week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
//document.getElementsByTagName("MAIN")[0].innerHTML = '<div id="card-data" class="row"></div>'
fetch("contacts.json")
  .then(response => response.json())
  .then(function(data) {
    var html = {};
    data.forEach(function(x, i, a) {
      let table;
      var tag = {
        tel: "",
        maps: "",
        hours: ""
      };
      if (x.tel == undefined || x.tel == "") {
        x.tel = "";
        x.tag = "";
      } else {
        x.tel = `<a class="waves-effect black waves-light btn" href="tel:${x.tel}">${x.tel}</a>`;
        tag.tel = "call";
      }
      if (x.maps == undefined || x.maps == "") {
        x.maps = "";
        tag.maps = "";
      } else {
        x.maps = `<a class="waves-effect black waves-light btn" href="${x.maps}" target="_blank">Directions</a>`;
        tag.maps = "maps";
      }
      if (x.desc == undefined) {
        x.desc = "";
      }
      if (x.cat == undefined) {
        x.cat = "";
      }
      if (x.hours == undefined) {
        x.hours = "";
        tag.hours = "";
        x.hoursHTML = "";
      } else {
        tag.hours = "hours";
        x.hoursHTML = `<table><thead><tr><th>Day</th><th>Times</th></tr></thead><tbody>`;
        week.forEach(function(day, i) {
          if (x.hours[i] == undefined) {
            x.hours[i] = "No Data";
          }
          x.hoursHTML += `
          <tr>
            <td>${day}</td>
            <td>${x.hours[i]}</td>
          <tr>
          `;
        });
        x.hoursHTML += `</tbody></table>`;
      }
      html.content = `
        
        <li>
          <div class="collapsible-header"><i class="material-icons">${x.cat}</i>
          <span class="searchable">${x.name}</span>
            <span class="badge">${tag.tel} ${tag.maps} ${tag.hours}</span>
            <i class="material-icons">expand_more</i>
          </div>
          <div class="collapsible-body">
            <div class="section">
            <span class="searchable">${x.tel}</span> ${x.maps}
            <div class="divider"></div>
              <div class="section searchable">${x.desc}</div>
              <div class="divider"></div>
              <span>${x.hoursHTML}</span>
            </div>
          </div>
        </li>
  `;
      document.getElementById("contacts-list").innerHTML += html.content;
    });
    M.AutoInit();
  });

function searchContacts() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search_contacts");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contacts-list");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("searchable");
    for (var j = 0; j < a.length; j++) {
      var b = a[j].innerText || a[j].textContent;
      if (b.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        j = a.length;
      } else {
        li[i].style.display = "none";
      }
    }
  }
}
