window.onload = function () {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startBtn = document.getElementById('start_btn');
    let titleH1 = document.getElementById('title');
    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;
    let start = true;

    startBtn.addEventListener('click', function () {
        titleH1.innerHTML = 'WHACK-A-MOLE! '
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();
        startBtn.classList.add('animate');
        setTimeout(() => { // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
            startBtn.classList.remove('animate');
            startBtn.style.display = 'none';
        }, 700);
    }

    function startGame() {
        start = true;
        score=0;
        randomPop()
        setTimeout(() => {
            start = false;
        }, gameTime)
    }

    function randomPop() {
        if (start) {
            index = Math.floor(Math.random() * 6 + 1);
            while (lastHole == index - 1) {
                index = Math.floor(Math.random() * 6 + 1);
            }
            holes[index - 1].classList.add("up");
            moles[index - 1].addEventListener('click', molesclick);
            var t2 = setTimeout(() => {
                holes[index - 1].classList.remove("up");
                lastHole = index - 1;
                randomPop();
            }, Math.floor(Math.random() * 1200 + 200));
        } else {
            window.clearTimeout(t2);
            titleH1.innerHTML = 'TIME UP！';
            startBtn.style.display = 'inline';
            startBtn.innerHTML = 'Replay！';
        }
    }

    function molesclick(){
        scoreBoard.innerHTML=score++;
        moles[index - 1].removeEventListener('click',molesclick);
        holes[index - 1].classList.remove("up");
    }
};
