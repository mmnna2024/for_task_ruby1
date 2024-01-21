let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status == 200) {
        data = request.response; // データを取得して変数に格納
        changeVideo(); // データが取得されたら動画を変更する関数を呼び出す
      }
    }
  };
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function changeVideo() {
  if (!data.length) {
    getData(); // データがまだ取得されていない場合は取得する
    return;
  }

  // data変数に格納されたデータを使って動画を切り替える処理
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? (number = 0) : number++;
}

window.onload = function () {
  button.addEventListener('click', changeVideo); // ボタンがクリックされた時に動画を変更する関数を呼び出す
};