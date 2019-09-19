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
  soft: ['Ai', 'Xd'],
  lang:['html']
},{
  title: 'proj6',
  soft: ['Ai', 'Xd'],
  lang:['html']
},{
  title: 'proj7',
  soft: ['Ai', 'Xd'],
  lang:[]
}]

function sortProj(projTag) {
  for (i = 0; i < projects.length; i++) {
    const projNum = i + 1;
    const thisBlock = document.getElementById('proj' + projNum);
    thisBlock.setAttribute('style', 'display:none;');
    if (projects[i].soft.includes(projTag)) {
      thisBlock.setAttribute('style', 'display:block;');
    };
  };
};

function sortLang(langTag) {
    for (i = 0; i < projects.length; i++) {
      const projNum = i + 1;
      const thisBlock = document.getElementById('proj' + projNum);
      thisBlock.setAttribute('style', 'display:none;');
      if (projects[i].lang.includes(langTag)) {
        thisBlock.setAttribute('style', 'display:block;');
      };
    };
  };

/*
  function sortProj(projTag) {
    const listOfSoft = ['Ai', 'Ps', 'Ae', 'Pr', 'Xd']
    const listOfLang = ['html', 'css', 'js', 'vue']
    const result = []
    const projBlock = document.querySelectorAll('.project-block');

    for(i = 0; i < projects.length; i++) {
      const projNum = i + 1;

      if (listOfSoft.includes(projTag)) {
        if (projects[i].soft.includes(projTag)) {
          result.push(projects[i].title);
        }} else {
        if (projects[i].lang.includes(projTag)) {
          result.push(projects[i].title);
        }
      };
    };

    $(funtion(result) {

    })

    console.log(result);
  };
*/
