// $(document).ready(function(){
//   $('.project-block').each(function() {$(this).attr('id', 'shown');});
// });

var playAi = document.getElementById('AiIcon');

var animation = bodymovin.loadAnimation({
  container: document.getElementById('logo-top'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/logo/logo.json'
});

 var aiAnimation = bodymovin.loadAnimation({
  container: document.getElementById('AiIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Ai/AiIcon.json'
});

var psAnimation = bodymovin.loadAnimation({
  container: document.getElementById('PsIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Ps/PsIcon.json'
});

var aeAnimation = bodymovin.loadAnimation({
  container: document.getElementById('AeIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Ae/AeIcon.json'
});

var prAnimation = bodymovin.loadAnimation({
  container: document.getElementById('PrIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Pr/PrIcon.json'
});

var xdAnimation = bodymovin.loadAnimation({
  container: document.getElementById('XdIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Xd/XdIcon.json'
});


const projects = [{
  title: 'proj1',
  thmb: 'icons/p300x300.png',
  soft: ['Ai', 'Ps', 'Xd'],
  lang: ['html', 'css']
},{
  title: 'proj2',
  soft: ['Ae', 'Pr'],
  lang: ['html', 'css', 'js']
},{
  title: 'proj3',
  soft: ['Ai', 'Xd'],
  lang:['js', 'vue']
},{
  title: 'proj4',
  soft: ['Ai', 'Ps', 'Xd'],
  lang:['css']
},{
  title: 'proj5',
  soft: ['Ai', 'Ps'],
  lang:['html']
},{
  title: 'proj6',
  soft: ['Ps'],
  lang:['html']
},{
  title: 'proj7',
  soft: ['Ae', 'Xd'],
  lang:[]
}]

function sortProj(projTag) {
  let displayList = [];
  let shownItems = document.querySelectorAll('.shown');

  function hideBlock() {$(shownItems).attr('style', 'display:none').removeClass("shown").addClass("hidden")};

  let hiddenItems = document.querySelectorAll('#hidden');

  function sortThru() {
    for (i = 0; i < projects.length; i++) {
      let projNum = i + 1;
      if (projects[i].soft.includes(projTag)) {
        displayList.push('proj'+projNum);
      }
    }
  };

  // display array
  function appearProj() {
    $('#' + displayList.join(',#')).fadeTo(200, 1).removeClass("hidden").addClass("shown");
    console.log(displayList);
  };

  $(shownItems).fadeTo(200, 0);
  setTimeout(hideBlock, 200);
  setTimeout(sortThru, 200);
  setTimeout(appearProj, 400);

};

function sortLang(langTag) {
  let displayList = [];
  let shownItems = document.querySelectorAll('.shown');

  function hideBlock() {$(shownItems).attr('style', 'display:none').removeClass("shown").addClass("hidden")};

  let hiddenItems = document.querySelectorAll('#hidden');

  function sortThru() {
    for (i = 0; i < projects.length; i++) {
      let projNum = i + 1;
      if (projects[i].lang.includes(langTag)) {
        displayList.push('proj'+projNum);
      }
    }
  };

  // display array
  function appearProj() {
    $('#' + displayList.join(',#')).fadeTo(200, 1).removeClass("hidden").addClass("shown");
    console.log(displayList);
  };

  $(shownItems).fadeTo(200, 0);
  setTimeout(hideBlock, 200);
  setTimeout(sortThru, 200);
  setTimeout(appearProj, 400);

};
