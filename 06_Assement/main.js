const tableData = document.getElementById('tableData')

const logMovies = async () => {
    const response = await fetch("https://jsonplaceholder.org/users");
    const movies = await response.json();
    console.log(movies);
    let i = 0;
    for (i = 0; i < movies.length;i++) {
       const tableRow = document.createElement('tr');
       const item = movies[i];
       const childData = `<tr><td>${item.firstname} ${item.lastname}</td>
       <td>${item.email}</td>
       <td>${item.address.street}</td>
       <td>${item.birthDate}</td>
       <td>${item.company.name}</td>
       </tr>`;
       tableRow.innerHTML = childData;
       tableData.appendChild(tableRow)
      }
  };



  document.getElementById("clicky").addEventListener("click", () => {
    logMovies();
  });


const getItemNames = (items) => {
 return [`<li> ${items.firstname} ${items.lastname}</li>`];
}
const  getItemEmails = (items) => {
    return [`<li>${items.email}</li>`]
}
const getItemsAdress = (items) => {
    return [`<li>${items.address.street}</li>`]

}
const getItemDateOfBirth = (items) => {
    return [`<li>${items.birthDate}</li>`]
}
const getItemCompanyName = (items) => {
   return [`<li>${items.company.name}</li>`]
}