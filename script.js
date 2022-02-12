"use strict";

const img = document.querySelector(".row");
// Ececute when img is clocked
img.addEventListener("click", function (e) {
  // Get the expanded image
  const expandImg = document.getElementById("expandedImg");
  // Get the image text
  const imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = e.target.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = e.target.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";

  // Align footer at bottom
  document.getElementById("m_page2").style.padding = "0 0 20px 0";
});

// Ececute when closebtn is clicked
document.querySelector(".closebtn").addEventListener("click", function () {
  // Hide the expanded image (shown by above eventListener)
  document.querySelector(".closebtn").parentElement.style.display = "none";
});
