// 配置参数（替换为你的B站UID）
const BILI_UID = '替换为你的B站UID';
const API_URL = `https://api.bilibili.com/x/relation/stat?vmid=${BILI_UID}`;

// 获取粉丝数
async function getFansCount() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.code === 0) {
            return data.data.follower;
        }
        throw new Error(data.message || 'API请求失败');
    } catch (error) {
        console.error('获取数据失败:', error);
        return null;
    }
}

// 更新显示
async function updateCounter() {
    const countElement = document.getElementById('fansCount');
    const count = await getFansCount();

    if (count !== null) {
        countElement.textContent = count.toLocaleString();
        countElement.style.color = '#00ff00'; // 正常颜色
    } else {
        countElement.textContent = 'ERROR';
        countElement.style.color = '#ff0000'; // 错误颜色
    }

    // 添加数值更新动画
    countElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        countElement.style.transform = 'scale(1)';
    }, 200);
}

// 初始化
updateCounter();
// 每60秒更新一次（可根据需要调整）
setInterval(updateCounter, 60000);