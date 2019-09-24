var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo-top'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'logo.json'
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
  $('.project-block').fadeTo(300, 0);

  function hideBlock() {$('.project-block').attr('style', 'display:none')};
  setTimeout(hideBlock, 1000);

  let displayList = [];
  for (i = 0; i < projects.length; i++) {
    let projNum = i + 1;
    if (projects[i].soft.includes(projTag)) {
      displayList.push('proj'+projNum);
    }
  };
  console.log(displayList);

  function appearProj() {
    console.log(displayList);
    $('#' + displayList.join(',#')).fadeTo(300, 1);
  };
    setTimeout(appearProj, 1001);
};

/*function sortLang(langTag) {
  $('#proj1,#proj2,#proj3,#proj4,#proj5,#proj6,#proj7').fadeTo(300, 0);

  function hideBlock() {$('.project-block').attr('style', 'display:none;')};
  setTimeout(hideBlock, 300);

  function appearLang() {
    for (i = 0; i < projects.length; i++) {
      let projNum = i + 1;
      if (projects[i].lang.includes(langTag)) {
        $(document.getElementById('proj' + projNum)).fadeTo(200, 1);
      };
    };
  };
  setTimeout(appearLang, 200);
};
*/
