function disparo() {
  // const html = document.documentElement
  const html = document.querySelector("body")
  html.classList.toggle("light")

  const profilepic = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    profilepic.setAttribute("src", "./avatar-light.png")
  } else {
    profilepic.setAttribute("src", "./avatar-dark.png")
  }

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}
}
