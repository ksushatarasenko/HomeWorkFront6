
//  1. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.


// let array = ['apple', 'banana', 'melon'];

// for(i=0; i<array.length; i++){
//     let paragraph =document.createElement('p');
//     paragraph.innerText =array[i];
//     paragraph.addEventListener("click", function(){ paragraph.innerText = '*************'});
//     document.body.append(paragraph);
// }





// 2) Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

// for(let i = 0; i< 10;i++){
//     let card = document.createElement('div');
//     document.body.append(card);
//     card.innerText = i;
// };

// let card = document.querySelectorAll('div');

// for(let i = 0; i< 10; i++){
//     card[i].addEventListener('click',function(){card[i].setAttribute('class','active')});
// };

// 3) 
// for(let i = 0; i< 10;i++){
//     let card = document.createElement('div');
//     document.body.append(card);
//     card.innerText = i;
// };

// let card = document.querySelectorAll('div');

// function f1(){   if(card[i].hasAttributes() == false){
//     card[i].setAttribute('class','active')
//     }else{card[i].removeAttribute('class','active')}};

// for(let i = 0; i< 10; i++){
//     card[i].addEventListener('click',
//         function(){
//         if(card[i].hasAttributes()==false)
//         {
//         card[i].setAttribute('class','active');
//         }
//         else{card[i].removeAttribute('class','active')};
//     });
// };


// 4)В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.


let arrPictures = [
    'https://kartinkof.club/uploads/posts/2022-07/thumbs/1659174092_2-kartinkof-club-p-krasivie-kartinki-dlya-dushi-i-nastroeniya-2.jpg', 
    'https://kartinkof.club/uploads/posts/2022-07/1659174095_4-kartinkof-club-p-krasivie-kartinki-dlya-dushi-i-nastroeniya-4.jpg',
    'https://kartinkof.club/uploads/posts/2022-07/1659174096_5-kartinkof-club-p-krasivie-kartinki-dlya-dushi-i-nastroeniya-5.jpg'

];

let divKopf = document.createElement('div');
divKopf.classList.add('divKopf')
divKopf.style.backgroundColor = 'cyan'
divKopf.style.height = '100px';

document.body.before(divKopf);

for (let i = 0; i < arrPictures.length; i++) {
  let img_head = document.createElement('img');
  img_head.setAttribute('src', arrPictures[i]);
  img_head.style.width = '90px';
  img_head.style.height = '90px';

  img_head.onclick = function() {
    let img_full = document.createElement('img');
    img_full.setAttribute('src', this.src);
    img_full.style.maxWidth = '100%';
    img_full.style.marginTop = '10px';
    divKopf.parentNode.appendChild(img_full);
  };

  divKopf.prepend(img_head);
}


