
// We'll try to make sure all external links' targets are set to "_blank" 
// so they open in a new window
//
// All internal links are relative, all external links have defined URLs

// Grab all 'a' nodes with an href that starts with "http"
var extLinks = document.querySelectorAll('a[href^="http"]')

console.log(extLinks)

for (var i = 0; i < extLinks.length; i++){
    if(!extLinks[i].hasAttribute("target")){
        extLinks[i].setAttribute("target","_blank");
    }
}