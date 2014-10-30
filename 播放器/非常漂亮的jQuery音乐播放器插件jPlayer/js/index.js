$(function(){
  var playlist = [{
      title:"最长的电影",
      artist:"周杰伦",
      mp3:"http://sc.111ttt.com/up/mp3/21567/82A1E2ED54A07B173CDEAFD38DF63C4F.mp3",
      poster: "http://www.sucaijiayuan.com/uploads/file/contents/2014/09/541438e7cd272.gif"
    },{
      title:"喜欢你",
      artist:"邓紫棋",
      mp3:"http://sc1.111ttt.com/2014/1/09/12/2121908298.mp3",
      poster: "images/yqB0erk.jpg"
    },{
      title:"泡沫",
	  artist:"男生版",
      mp3: "http://sc.111ttt.com/up/mp3/325955/BEBEB47B017439208D11F62558E9A9D1.mp3",
      poster: "http://www.sucaijiayuan.com/uploads/file/contents/2014/09/540847298c9e0.gif"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor:".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
	solution: 'html, flash',
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
/*
本代码由JS代码网收集并编辑整理;
尊重他人劳动成果;
转载请保留JS代码网链接 - www.js-css.cn
*/