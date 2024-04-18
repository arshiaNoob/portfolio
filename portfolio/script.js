function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('skils_link').addEventListener('click', () => {
  closeNav()
  window.scrollTo({
    top: 750,
    behavior: 'smooth'
  })
})

document.getElementById('prj_link').addEventListener('click', () => {
  closeNav()
  window.scrollTo({
    top: 1500,
    behavior: 'smooth'
  })
})

document.getElementById('about_link').addEventListener('click', () => {
  closeNav()
  window.scrollTo({
    top: 2150,
    behavior: 'smooth'
  })
})
