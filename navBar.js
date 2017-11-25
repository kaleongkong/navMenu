window.onload = function(){
  Array.from(document.getElementsByClassName('navBarContainer')).forEach(function(navBarContainer){
    Array.from(navBarContainer.getElementsByClassName('navItem')).forEach(function(navItem){
      navItem.addEventListener('mouseenter', function(e){
        handleHover(e.target)
      });
      navItem.addEventListener('mouseleave', function(e){
        resetFont(e.target)
      });
    });
  });
};

function handleHover(target) {
  resetFont(target);
  target.style.color = 'whitesmoke';
  target.style.textShadow = "1px 1px grey";
}

function resetFont(target){
  var container = findAncestor (target, 'navBar');
  Array.from(container.getElementsByClassName('navItem')).forEach(function(navItem){
    target.style.color = 'black';
    target.style.textShadow = "";
  });
}

function findAncestor (el, cls) {
  if (el.classList.contains(cls)) {
    return el;
  }
  while ((el = el.parentElement) && !(el.classList.contains(cls)));
  return el;
}