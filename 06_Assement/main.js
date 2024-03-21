const logMovies = async () => {
    const response = await fetch("https://jsonplaceholder.org/users");
    const movies = await response.json();
    console.log(movies);
    let i = 0;
    for (i = 0; i < movies.length;i++) {
        document.getElementById('name').innerHTML = movies.map(getItemNames);
        document.getElementById('Email').innerHTML = movies.map(getItemEmails);
        document.getElementById('address').innerHTML = movies.map(getItemsAdress);
        document.getElementById('dateOfBirth').innerHTML = movies.map(getItemDateOfBirth);
        document.getElementById('company').innerHTML = movies.map(getItemCompanyName);
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