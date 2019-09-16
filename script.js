const projects = [{
  title: 'proj1',
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
  soft: ['Ai', 'Xd'],
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

function sort(projTag) {
  const listOfSoft = ['Ai', 'Ps', 'Ae', 'Pr', 'Xd']
  const listOfLang = ['html', 'css', 'js', 'vue']

  for(i = 0; i < projects.length; i++) {
    if (listOfSoft.includes(projTag)) {
      console.log('Display only ' + projTag);
    } else {
      console.log('Display only' + projTag);
    };
  };
};
