 $(document).ready(function(){
   playAi(aiContainer);
   playPs(psContainer);
   playAe(aeContainer);
   playPr(prContainer);
   playXd(xdContainer);
   playHtml(htmlContainer);
   playCss(cssContainer);
   playJs(jsContainer);
   playVue(vueContainer);
 });


var animation = bodymovin.loadAnimation({
  container: document.getElementById('logo-top'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/logo/logo.json'
});

var aiContainer = document.getElementById('AiIcon');
function playAi(aiContainer) {
 var aiAnimation = bodymovin.loadAnimation({
  container: document.getElementById('AiIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Ai/AiIcon.json'
  });
  aiContainer.addEventListener('mouseenter', function(){
    aiAnimation.goToAndPlay(1, true);
  });
};

var psContainer = document.getElementById('PsIcon');
function playPs(psContainer) {
 var psAnimation = bodymovin.loadAnimation({
  container: document.getElementById('PsIcon'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'iconExport/Ps/PsIcon.json'
  });
  psContainer.addEventListener('mouseenter', function(){
    psAnimation.goToAndPlay(1, true);
  });
};

var aeContainer = document.getElementById('AeIcon');
function playAe(aeContainer) {
 var aeAnimation = bodymovin.loadAnimation({
   container: document.getElementById('AeIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/Ae/AeIcon.json'
  });
  aeContainer.addEventListener('mouseenter', function(){
    aeAnimation.goToAndPlay(1, true);
  });
};

var prContainer = document.getElementById('PrIcon');
function playPr(prContainer) {
 var prAnimation = bodymovin.loadAnimation({
   container: document.getElementById('PrIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/Pr/PrIcon.json'
  });
  prContainer.addEventListener('mouseenter', function(){
    prAnimation.goToAndPlay(1, true);
  });
};

var xdContainer = document.getElementById('XdIcon');
function playXd(xdContainer) {
 var xdAnimation = bodymovin.loadAnimation({
   container: document.getElementById('XdIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/Xd/XdIcon.json'
  });
  xdContainer.addEventListener('mouseenter', function(){
    xdAnimation.goToAndPlay(1, true);
  });
};

var htmlContainer = document.getElementById('htmlIcon');
function playHtml(htmlContainer) {
 var htmlAnimation = bodymovin.loadAnimation({
   container: document.getElementById('htmlIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/html/html.json'
  });
  htmlContainer.addEventListener('mouseenter', function(){
    htmlAnimation.goToAndPlay(1, true);
  });
};

var cssContainer = document.getElementById('cssIcon');
function playCss(cssContainer) {
 var cssAnimation = bodymovin.loadAnimation({
   container: document.getElementById('cssIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/css/cssIcon.json'
  });
  cssContainer.addEventListener('mouseenter', function(){
    cssAnimation.goToAndPlay(1, true);
  });
};

var jsContainer = document.getElementById('jsIcon');
function playJs(jsContainer) {
 var jsAnimation = bodymovin.loadAnimation({
   container: document.getElementById('jsIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/Js/Js.json'
  });
  jsContainer.addEventListener('mouseenter', function(){
    jsAnimation.goToAndPlay(1, true);
  });
};

var vueContainer = document.getElementById('vueIcon');
function playVue(vueContainer) {
 var vueAnimation = bodymovin.loadAnimation({
   container: document.getElementById('vueIcon'), // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'iconExport/Vue/Vue.json'
  });
  vueContainer.addEventListener('mouseenter', function(){
    vueAnimation.goToAndPlay(1, true);
  });
};


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

/* comment comment */
