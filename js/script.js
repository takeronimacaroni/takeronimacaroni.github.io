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
  soft: ['Ai', 'Xd'],
  lang:[]
}]

function sortProj(projTag) {
  for (i = 0; i < projects.length; i++) {
    let projNum = i + 1;
    let thisBlock = document.getElementById('proj' + projNum);
    $(document.getElementById('proj' + projNum)).fadeTo(400, 0);
    thisBlock.setAttribute('style', 'display:none;');
    if (projects[i].soft.includes(projTag)) {
    $(document.getElementById('proj' + projNum)).fadeTo(400, 1);
      thisBlock.setAttribute('style', 'display:block;');
    };
  };
};

function sortLang(langTag) {
    for (i = 0; i < projects.length; i++) {
      let projNum = i + 1;
      let thisBlock = document.getElementById('proj' + projNum);
      thisBlock.setAttribute('style', 'display:none;');
      if (projects[i].lang.includes(langTag)) {
        thisBlock.setAttribute('style', 'display:block;');
      };
    };
  };
