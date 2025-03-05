    //✨ 计数器功能实现
    let count = 0;
    const counterBtn = document.getElementById('counterBtn');
    const countDisplay = document.getElementById('countDisplay');

    counterBtn.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count;
    });