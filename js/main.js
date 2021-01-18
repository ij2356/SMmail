 function setThumbnail(event){ //file 미리보기 코드 이미지 사이즈 수정 필요
    var reader = new FileReader();

     reader.onload = function(event){
          var img = document.createElement("img"); 
          img.setAttribute("src", event.target.result);
          document.querySelector("div#image_container").appendChild(img);
       }; 
       reader.readAsDataURL(event.target.files[0]); 
  }


  $("form input").eq(2).click(function(){

      alert("전송완료");
  });