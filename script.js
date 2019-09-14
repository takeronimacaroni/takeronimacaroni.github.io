function sort(projTag) {
  console.log("selected " + projTag);
};


const buttonAi = document.getElementById('btnAi');
const buttonPs = document.getElementById('btnPs');
const buttonAe = document.getElementById('btnAe');
const buttonPr = document.getElementById('btnPr');
const buttonXd = document.getElementById('btnXd');


buttonAi.addEventListener('click', sort('Ai'));
buttonPs.addEventListener('clock', sort('Ps'));
buttonAe.addEventListener('clock', sort('Ae'));
buttonPr.addEventListener('clock', sort('Pr'));
buttonXd.addEventListener('clock', sort('Xd'));


projects = [{
  title: Sample_Project_1,
  soft: [Ai, Ps, Xd],
  lang: [html, css]
},{
  title: Sample_Project_2,
  soft: [Ae, Pr],
  lang: [html, css, js]
},{
  title: Sample_Project_3,
  soft: [Ai, Xd],
  lang:[js, vue]
},{
  title: Sample_Project_4,
  soft: [Ai, Xd],
  lang:[css]
},{
  title: Sample_Project_5,
  soft: [Ai, Xd],
  lang:[html]
},{
  title: Sample_Project_6,
  soft: [Ai, Xd],
  lang:[html]
},{
  title: Sample_Project_7,
  soft: [Ai, Xd],
  lang:[]
}]
