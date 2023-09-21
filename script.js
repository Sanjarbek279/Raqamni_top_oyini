'use strict';

document.querySelector('.uzb').addEventListener('click', () => {
  document.querySelector('.again').textContent = 'Qayta';
  document.querySelector('h1').textContent = 'Raqamimni toping';
  document.querySelector('.message').textContent = 'Raqam qidira boshlang...';
  document.querySelector('.label-score').textContent = '😜 Hisob: 32';
  document.querySelector('.label-highscore').textContent =
    '👍️️️️️️ Yuqori hisob: 50';
  document.querySelector('.check').textContent = 'Tekshirish';
});

document.querySelector('.turk').addEventListener('click', () => {
  document.querySelector('.again').textContent = 'Yene';
  document.querySelector('h1').textContent = 'Numberimi ol';
  document.querySelector('.message').textContent = 'Numberimi ol';
  document.querySelector('.label-score').textContent = '😜 Hesap: 32';
  document.querySelector('.label-highscore').textContent =
    '👍️️️️️️ Yüksek hesap: 50';
  document.querySelector('.check').textContent = 'Kontrol etmek';
});

/// Guess My Number!

/// 1) Kompyuter sin oylasin
/// 2) Biz son kiritamizda solishtiramiz;
/// Too hight
/// Too low
/// Correct number!
/// No Number!
/// 3) Qayuta oynash
/// 4) Yaxshi natijani saqlab ketamiz.

//   let compyuterNumber = Math.trunc(Math.random()*20)+1;

//   document.querySelector('.number').textContent = compyuterNumber;

//   document.querySelector('.check').addEventListener('click' , () => );//

let compuyternewnamber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let lenguage = 'turk';

let TurkToUzb = {
  '❗️Numara yok': '❗️Raqam kiritilmadi',
  '📉 Çok yüksek': ' 📉  Katta son',
  '📈 Cok düşük': '📈  Kichik Son',
  '✅ Doğru numara': "✅ To'g'ri Raqam",
  '❌ Oyunu kaybettin!': "❌ O'yinni yutqazdingiz !",
  'Tahmin etmeye başla...': 'Topishni boshlang..',
};

function showMessage(massage) {
  if (lenguage == 'uzb') {
    document.querySelector('.message').textContent = TurkToUzb[massage];
  } else {
    document.querySelector('.message').textContent = massage;
  }
}
///   ? -- uchun tek shirish uchun sonni beramiz

// document.querySelector('.number').textContent = compuyternewnamber;
function Retur(valu) {
    //  foydalanuvchi kiritilgan son
    let guessNumber = Number(document.querySelector('.guess').value);
  
    if (score > 1) {
      if (!guessNumber) {
        showMessage('❗️Numara yok');
        // document.querySelector('.message').textContent = '❗️Numara yok';
      } else if (guessNumber !== compuyternewnamber) {
        showMessage(
          guessNumber > compuyternewnamber ? '📉 Çok yüksek' : '📈 Cok düşük'
        );
  
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        showMessage('✅ Doğru numara');
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
  
        highScore = score > highScore ? score : highScore;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      showMessage('❌ Oyunu kaybettin!');
  
      document.querySelector('.score').textContent = 0;
    }
  }
document.querySelector('.check').addEventListener('click', () => {
  //  foydalanuvchi kiritilgan son
  let guessNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNumber) {
      showMessage('❗️Numara yok');
      // document.querySelector('.message').textContent = '❗️Numara yok';
    } else if (guessNumber !== compuyternewnamber) {
      showMessage(
        guessNumber > compuyternewnamber ? '📉 Çok yüksek' : '📈 Cok düşük'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('✅ Doğru numara');
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';

      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    showMessage('❌ Oyunu kaybettin!');

    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  let compuyternewnamber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.guess').value = '';
  showMessage('Tahmin etmeye başla...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
document.querySelector('.uzb').addEventListener('click', () => {
  lenguage = 'uzb';
  document.querySelector('.again').textContent = 'Qayta';
  document.querySelector('.between').textContent = '1 dan 20 gacha';
  document.querySelector('h1').textContent = "O'ylangan sonni toping";
  document.querySelector('.check').textContent = 'Tekshir';
  document.querySelector('.message').textContent = 'Topishni boshlang';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Yuqori ball: <span class="highscore">0</span>';
});

document.querySelector('.turk').addEventListener('click', function () {
  lenguage = 'turk';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '1 ile 20 arasında';
  document.querySelector('h1').textContent = 'Numaramı Tahmin Et!';
  document.querySelector('.check').textContent = 'Kontrol etmek!';
  document.querySelector('.message').textContent = 'Tahmin etmeye başla..';
  document.querySelector('.label-score').innerHTML =
    '💯 Gol: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Yüksek skor: <span class="highscore">0</span>';
});

// overlay.addEventListener('click' , Retur);

document.addEventListener('keydown' , e => {
  // console.log(e);
  if(e.key === 'Enter') Retur();
})