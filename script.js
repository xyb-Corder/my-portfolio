// script.js

// 确保在 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {

    console.log("徐英博的个人网站已加载。");

    // --- 1. 首页打字机效果 ---
    const typed = new Typed('#typed-subtitle', {
        strings: [
            '一名来自华中科技大学的软件工程学生。',
            '一名对科研充满热忱的开发者。',
            '一名乐观、踏实、自信的团队协作者。'
        ],
        typeSpeed: 50,  // 打字速度 (ms)
        backSpeed: 25,  // 退格速度 (ms)
        backDelay: 2000, // 打完后停留时间 (ms)
        startDelay: 500, // 开始前延迟 (ms)
        loop: true,     // 循环播放
        smartBackspace: true // 智能退格
    });


    // --- 2. 滚动触发的淡入动画 ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 当元素进入视图时，添加 'show' class
                entry.target.classList.add('show');
            } else {
                // 可选：当元素离开视图时移除 'show' class，使动画可重复
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // 元素可见 10% 时触发
    });

    // 选取所有带 'hidden' class 的元素进行观察
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- 3. 项目弹窗 (Modal) 逻辑 ---
    
    // 选取所有项目卡片
    const projectCards = document.querySelectorAll('.project-card');
    
    // 选取所有关闭按钮
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // 选取所有弹窗背景
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    // 为每个项目卡片添加点击事件
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.classList.add('modal-active');
            }
        });
    });

    // 为每个关闭按钮添加点击事件
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 找到最近的 .modal-overlay 父元素并关闭它
            button.closest('.modal-overlay').classList.remove('modal-active');
        });
    });

    // 点击弹窗背景区域关闭弹窗
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            // 确保点击的是背景 (overlay) 本身，而不是内容区域 (modal-content)
            if (event.target === overlay) {
                overlay.classList.remove('modal-active');
            }
        });
    });

});