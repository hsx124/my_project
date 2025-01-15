// 全局状态管理
const state = {
    theme: localStorage.getItem('theme') || 'light',
    sidebarCollapsed: false,
    currentPage: 'dashboard'
};

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSidebar();
    initPageNavigation();
    initCharts();
    initNotifications();
    initSearch();
});

// 主题初始化和切换
function initTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    
    // 设置初始主题
    html.setAttribute('data-bs-theme', state.theme);
    updateThemeIcon();
    
    // 主题切换事件
    themeToggle?.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    });
}

// 更新主题图标
function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// 侧边栏初始化
function initSidebar() {
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebarCollapse?.addEventListener('click', () => {
        state.sidebarCollapsed = !state.sidebarCollapsed;
        sidebar?.classList.toggle('active');
        content?.classList.toggle('active');
    });
}

// 页面导航初始化
function initPageNavigation() {
    const menuItems = document.querySelectorAll('[data-page]');
    const pageContent = document.getElementById('page-content');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            
            // 更新当前页面
            state.currentPage = page;
            loadPage(page);

            // 更新活动菜单项
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            e.currentTarget.parentElement.classList.add('active');
        });
    });

    // 加载初始页面
    loadPage(state.currentPage);
}

// 图表初始化
function initCharts() {
    if (state.currentPage === 'dashboard') {
        initRevenueChart();
        initServicesChart();
    }
}

// 收入趋势图表
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            datasets: [{
                label: '收入',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#2563eb',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// 服务分布图表
function initServicesChart() {
    const ctx = document.getElementById('servicesPieChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['接机服务', '包车服务', '单程接送'],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: ['#2563eb', '#16a34a', '#eab308']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// 搜索功能初始化
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    searchInput?.addEventListener('input', (e) => {
        // 实现搜索逻辑
        console.log('搜索:', e.target.value);
    });
}

// 通知功能初始化
function initNotifications() {
    const notificationDropdown = document.querySelector('.dropdown-menu');
    if (notificationDropdown) {
        notificationDropdown.innerHTML = `
            <h6 class="dropdown-header">通知中心</h6>
            <a class="dropdown-item" href="#">
                <div class="d-flex align-items-center gap-2">
                    <i class="fas fa-envelope text-primary"></i>
                    <div>
                        <p class="mb-0">新订单通知</p>
                        <small class="text-muted">5分钟前</small>
                    </div>
                </div>
            </a>
            <!-- 更多通知项 -->
        `;
    }
}

// 加载页面内容
function loadPage(page) {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    // 添加页面切换动画
    pageContent.classList.add('animate__animated', 'animate__fadeIn');
    pageContent.innerHTML = getPageContent(page);
    
    // 初始化新页面的功能
    if (page === 'dashboard') {
        initCharts();
    }
}

// 获取页面内容
function getPageContent(page) {
    // ... 原有的页面内容代码 ...
} 