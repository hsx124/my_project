document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initHeroSlider();
    initBookingTabs();
    initVehicleSlider();
    initScrollEffects();
    initBackToTop();
    initLanguageSwitch();
    initCustomerService();
    initMobileNav();
    initLazyLoading();
    initTheme();
    initScrollAnimations();
    initDestinationsSlider();
});

// 轮播图功能
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 自动轮播
    setInterval(nextSlide, 5000);
}

// 预订表单标签切换
function initBookingTabs() {
    const tabs = document.querySelectorAll('.booking-tabs .tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// 车型展示滑块
function initVehicleSlider() {
    const slider = document.querySelector('.vehicles-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.vehicle-item');
    let currentIndex = 0;

    if (!slider || !prevBtn || !nextBtn) return;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
}

// 滚动效果
function initScrollEffects() {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        // 导航栏阴影效果
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // 返回顶部按钮显示/隐藏
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
}

// 返回顶部功能
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 添加翻译对象
const translations = {
    zh: {
        'home': '首页',
        'services': '服务',
        'vehicles': '车型',
        'about': '关于我们',
        'contact': '联系我们',
        'login': '登录',
        'register': '注册',
        'pickup': '单程接送',
        'charter': '包车服务',
        'airport': '接机服务',
        'pickup_point': '上车地点',
        'dropoff_point': '下车地点',
        'search': '搜索车型',
        'slogan': '安心出行，服务到家',
        'our_services': '我们的服务',
        'hot_recommend': '热门推荐',
        'service_photos': '服务实拍',
        'reviews_title': '用户评价',
        'reviews_subtitle': '来自全球用户的真实评价',
        'view_more_reviews': '查看更多评价',
        'footer_desc': '7x24小时专业接送服务',
        'contact_phone': '400-888-8888',
        'contact_email': 'service@example.com',
        'copyright': '© 2024 优质接送服务. 保留所有权利',
        'booking_steps': '预订步骤',
        'step1_title': '搜索路线',
        'step1_desc': '输入上下车地点和时间',
        'step2_title': '选择车型',
        'step2_desc': '根据需求选择合适车型',
        'step3_title': '确认预订',
        'step3_desc': '在线支付完成预订',
        'step4_title': '开始行程',
        'step4_desc': '准时接送，安心出行',
        'service1_title': '机场接送',
        'service1_desc': '专业机场接送服务，准时可靠，让您的旅程更加轻松',
        'service2_title': '商务用车',
        'service2_desc': '高端商务用车服务，专业司机团队，尽显商务风范',
        'service3_title': '旅游包车',
        'service3_desc': '舒适旅游包车服务，专业导游推荐，享受完美旅程',
        'service4_title': '婚礼用车',
        'service4_desc': '豪华婚礼用车服务，打造完美婚礼，留下美好回忆',
        'service5_title': '团队用车',
        'service5_desc': '专业团队用车服务，灵活调配，满足各类团队需求',
        'service6_title': '定制服务',
        'service6_desc': '个性化定制服务，根据您的需求，提供专属方案',
        'partners_title': '合作伙伴',
        'vehicles_title': '车型展示',
        'vehicle1_title': '豪华轿车',
        'vehicle1_desc': '舒适稳重，商务首选',
        'seats': '座位数',
        'luggage': '行李数',
        'price_from': '起价：',
        'book_now': '立即预订',
        'destinations_title': '人气目的地推荐',
        'dest_tokyo': '东京',
        'dest_hongkong': '香港',
        'dest_singapore': '新加坡',
        'dest_seoul': '首尔',
        'dest_bangkok': '曼谷',
        'dest_taipei': '台北',
        'travel_info_title': '旅游资讯',
        'view_more': '查看更多',
        'hot_tag': '热门推荐',
        'guide_tag': '攻略',
        'food_tag': '美食',
        'advantages_title': '服务优势',
        'advantage1_title': '安全保障',
        'advantage1_desc': '全程保险覆盖，车内实时监控，专业司机团队，确保您的出行安全',
        'advantage2_title': '专业司机',
        'advantage2_desc': '经验丰富，多语言交流，着装规范，服务贴心周到',
        'advantage3_title': '准时可靠',
        'advantage3_desc': 'GPS全程监控，提前到达，保证准时接送，从不延误',
        'advantage4_title': '24小时服务',
        'advantage4_desc': '全天候客服支持，紧急情况快速响应，让您无忧出行',
        'footer_about_title': '关于我们',
        'footer_about_company': '公司简介',
        'footer_about_terms': '服务条款',
        'footer_about_privacy': '隐私政策',
        'footer_about_news': '新闻资讯',
        'footer_support_title': '客户支持',
        'footer_support_faq': '常见问题',
        'footer_support_contact': '联系我们',
        'footer_support_feedback': '投诉建议',
        'footer_support_emergency': '紧急联系',
        'footer_business_title': '商务合作',
        'footer_business_join': '加盟合作',
        'footer_business_corporate': '企业用车',
        'footer_business_driver': '司机招募',
        'footer_business_inquiry': '商务咨询',
        'wechat_qr': '微信公众号',
        'app_qr': '下载APP',
        'service_photos_title': '服务实拍',
        'photo1_title': '商务接待',
        'photo2_title': '机场接送',
        'photo3_title': '豪华轿车',
        'photo4_title': '商务会议',
        'photo5_title': '旅游包车',
        'photo6_title': '专业司机',
        'promise_vehicle': '车辆保障',
        'promise_vehicle_desc': '全新车型，定期维护',
        'promise_insurance': '保险保障',
        'promise_insurance_desc': '全程保险，安心出行',
        'promise_quality': '品质保障',
        'promise_quality_desc': '专业认证，服务保障',
        'promise_price': '价格保障',
        'promise_price_desc': '透明定价，无隐藏费用'
    },
    en: {
        'home': 'Home',
        'services': 'Services',
        'vehicles': 'Vehicles',
        'about': 'About',
        'contact': 'Contact',
        'login': 'Login',
        'register': 'Register',
        'pickup': 'One-way Transfer',
        'charter': 'Charter',
        'airport': 'Airport Transfer',
        'pickup_point': 'Pick-up Location',
        'dropoff_point': 'Drop-off Location',
        'search': 'Search Vehicle',
        'slogan': 'Safe Travel, Service at Your Door',
        'our_services': 'Our Services',
        'hot_recommend': 'Hot Recommendations',
        'service_photos': 'Service Gallery',
        'reviews_title': 'Customer Reviews',
        'reviews_subtitle': 'Real reviews from our global customers',
        'view_more_reviews': 'View More Reviews',
        'footer_desc': '24/7 Professional Transfer Service',
        'contact_phone': '400-888-8888',
        'contact_email': 'service@example.com',
        'copyright': '© 2024 Premium Transfer Service. All rights reserved',
        'booking_steps': 'Booking Steps',
        'step1_title': 'Search Route',
        'step1_desc': 'Enter pick-up and drop-off locations',
        'step2_title': 'Select Vehicle',
        'step2_desc': 'Choose suitable vehicle',
        'step3_title': 'Confirm Booking',
        'step3_desc': 'Complete payment online',
        'step4_title': 'Start Journey',
        'step4_desc': 'Enjoy punctual and safe travel',
        'service1_title': 'Airport Transfer',
        'service1_desc': 'Professional airport transfer service, punctual and reliable',
        'service2_title': 'Business Service',
        'service2_desc': 'High-end business car service with professional drivers',
        'service3_title': 'Tour Charter',
        'service3_desc': 'Comfortable tour charter service with professional guides',
        'service4_title': 'Wedding Service',
        'service4_desc': 'Luxury wedding car service for your perfect wedding',
        'service5_title': 'Group Transfer',
        'service5_desc': 'Professional group transfer service, flexible arrangement',
        'service6_title': 'Custom Service',
        'service6_desc': 'Personalized custom service based on your needs',
        'partners_title': 'Partners',
        'vehicles_title': 'Our Vehicles',
        'vehicle1_title': 'Luxury Sedan',
        'vehicle1_desc': 'Comfortable and elegant, perfect for business',
        'seats': 'Seats',
        'luggage': 'Luggage',
        'price_from': 'From: ',
        'book_now': 'Book Now',
        'destinations_title': 'Popular Destinations',
        'dest_tokyo': 'Tokyo',
        'dest_hongkong': 'Hong Kong',
        'dest_singapore': 'Singapore',
        'dest_seoul': 'Seoul',
        'dest_bangkok': 'Bangkok',
        'dest_taipei': 'Taipei',
        'travel_info_title': 'Travel Information',
        'view_more': 'View More',
        'hot_tag': 'Hot',
        'guide_tag': 'Guide',
        'food_tag': 'Food',
        'advantages_title': 'Our Advantages',
        'advantage1_title': 'Safety Guarantee',
        'advantage1_desc': 'Full insurance coverage, real-time monitoring, professional drivers',
        'advantage2_title': 'Professional Drivers',
        'advantage2_desc': 'Experienced, multilingual, well-dressed, attentive service',
        'advantage3_title': 'Punctual & Reliable',
        'advantage3_desc': 'GPS monitoring, early arrival, guaranteed punctuality',
        'advantage4_title': '24/7 Service',
        'advantage4_desc': 'Round-the-clock customer support, quick response to emergencies',
        'footer_about_title': 'About Us',
        'footer_about_company': 'Company Profile',
        'footer_about_terms': 'Terms of Service',
        'footer_about_privacy': 'Privacy Policy',
        'footer_about_news': 'News',
        'footer_support_title': 'Customer Support',
        'footer_support_faq': 'FAQ',
        'footer_support_contact': 'Contact Us',
        'footer_support_feedback': 'Feedback',
        'footer_support_emergency': 'Emergency Contact',
        'footer_business_title': 'Business',
        'footer_business_join': 'Partnership',
        'footer_business_corporate': 'Corporate Service',
        'footer_business_driver': 'Driver Recruitment',
        'footer_business_inquiry': 'Business Inquiry',
        'wechat_qr': 'WeChat Official',
        'app_qr': 'Download APP',
        'service_photos_title': 'Service Gallery',
        'photo1_title': 'Business Reception',
        'photo2_title': 'Airport Transfer',
        'photo3_title': 'Luxury Sedan',
        'photo4_title': 'Business Meeting',
        'photo5_title': 'Tour Charter',
        'photo6_title': 'Professional Driver',
        'promise_vehicle': 'Vehicle Guarantee',
        'promise_vehicle_desc': 'New vehicles, regular maintenance',
        'promise_insurance': 'Insurance Coverage',
        'promise_insurance_desc': 'Full insurance, safe travel',
        'promise_quality': 'Quality Assurance',
        'promise_quality_desc': 'Professional certification, service guarantee',
        'promise_price': 'Price Guarantee',
        'promise_price_desc': 'Transparent pricing, no hidden fees'
    },
    ja: {
        'home': 'ホーム',
        'services': 'サービス',
        'vehicles': '車両',
        'about': '会社概要',
        'contact': 'お問い合わせ',
        'login': 'ログイン',
        'register': '新規登録',
        'pickup': '片道送迎',
        'charter': 'チャーター',
        'airport': '空港送迎',
        'pickup_point': '乗車地点',
        'dropoff_point': '降車地点',
        'search': '車両を検索',
        'slogan': '安心な移動、ドアツードアのサービス',
        'our_services': 'サービス内容',
        'hot_recommend': 'おすすめ',
        'service_photos': 'サービス写真',
        'reviews_title': 'お客様の声',
        'reviews_subtitle': '世界中のお客様からの評価',
        'view_more_reviews': 'レビューをもっと見る',
        'footer_desc': '24時間年中無休の専門送迎サービス',
        'contact_phone': '400-888-8888',
        'contact_email': 'service@example.com',
        'copyright': '© 2024 プレミアム送迎サービス. All rights reserved',
        'booking_steps': '予約手順',
        'step1_title': 'ルート検索',
        'step1_desc': '出発地と到着地を入力',
        'step2_title': '車両選択',
        'step2_desc': '要件に合った車両を選択',
        'step3_title': '予約確認',
        'step3_desc': 'オンライン決済で予約完了',
        'step4_title': '旅程開始',
        'step4_desc': '時刻通りの送迎、安心な旅行',
        'service1_title': '空港送迎',
        'service1_desc': 'プロフェッショナルな空港送迎サービス、時刻通りで信頼性が高い',
        'service2_title': 'ビジネスサービス',
        'service2_desc': 'プロフェッショナルなドライバーを持つビジネスカーのサービス',
        'service3_title': 'ツアーチャーター',
        'service3_desc': 'プロフェッショナルガイドとともに快適なツアーチャーターサービス',
        'service4_title': 'ウェディングサービス',
        'service4_desc': 'ウェディングに最適なレジャーワードサービス',
        'service5_title': 'グループ送迎',
        'service5_desc': 'プロフェッショナルなグループ送迎サービス、柔軟なアレンジ',
        'service6_title': 'カスタマイズサービス',
        'service6_desc': 'ニーズに基づくパーソナライズドサービス',
        'partners_title': 'パートナー',
        'vehicles_title': '車両展示',
        'vehicle1_title': 'レジャーセダン',
        'vehicle1_desc': '快適でエレガントなレジャーセダン',
        'seats': '座席数',
        'luggage': 'ラグジュアリー',
        'price_from': '価格：',
        'book_now': '今すぐ予約',
        'destinations_title': '人気の目的地',
        'dest_tokyo': '東京',
        'dest_hongkong': '香港',
        'dest_singapore': 'シンガポール',
        'dest_seoul': 'ソウル',
        'dest_bangkok': 'バンコク',
        'dest_taipei': '台北',
        'travel_info_title': '旅行情報',
        'view_more': 'もっと見る',
        'hot_tag': '人気',
        'guide_tag': 'ガイド',
        'food_tag': 'フード',
        'advantages_title': 'サービスの利点',
        'advantage1_title': '安全保障',
        'advantage1_desc': '全保険カバー、リアルタイムモニタリング、プロフェッショナルドライバー',
        'advantage2_title': 'プロフェッショナルドライバー',
        'advantage2_desc': '経験豊富なマルチランゲージ、ドレスコード、親切なサービス',
        'advantage3_title': '時刻通りで信頼性が高い',
        'advantage3_desc': 'GPSモニタリング、早到着、確実な送迎',
        'advantage4_title': '24時間サービス',
        'advantage4_desc': '24時間365日のカスタマーサポート、緊急時の迅速な対応',
        'footer_about_title': '会社概要',
        'footer_about_company': '会社概要',
        'footer_about_terms': '利用規約',
        'footer_about_privacy': 'プライバシーポリシー',
        'footer_about_news': 'ニュース',
        'footer_support_title': 'カスタマーサポート',
        'footer_support_faq': 'よくある質問',
        'footer_support_contact': 'お問い合わせ',
        'footer_support_feedback': 'フィードバック',
        'footer_support_emergency': '緊急連絡',
        'footer_business_title': 'ビジネス',
        'footer_business_join': 'パートナーシップ',
        'footer_business_corporate': 'コーポレートサービス',
        'footer_business_driver': 'ドライバー募集',
        'footer_business_inquiry': 'ビジネス問合せ',
        'wechat_qr': 'WeChat公式',
        'app_qr': 'アプリをダウンロード',
        'service_photos_title': 'サービス写真',
        'photo1_title': 'ビジネス送迎',
        'photo2_title': '空港送迎',
        'photo3_title': '高級セダン',
        'photo4_title': 'ビジネス会議',
        'photo5_title': '観光チャーター',
        'photo6_title': 'プロドライバー',
        'promise_vehicle': '車両保',
        'promise_vehicle_desc': '新車、定期メンテナンス',
        'promise_insurance': '保険保証',
        'promise_insurance_desc': '全行程保険付き、安心な移動',
        'promise_quality': '品質保証',
        'promise_quality_desc': 'プロフェッショナル認証、サービス保証',
        'promise_price': '料金保証',
        'promise_price_desc': '明確な料金、追加料金なし'
    }
};

// 添加翻译函数
function translatePage(lang) {
    // 翻译普通文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = translations[lang][key];
                element.style.opacity = '1';
            }, 200);
        }
    });

    // 翻译 placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
    
    // 保存用户语言偏好
    localStorage.setItem('preferred_language', lang);
}

// 修改语言切换初始化函数
function initLanguageSwitch() {
    const langSwitch = document.querySelector('.language-switch');
    const langCurrent = document.querySelector('.lang-current');
    const langOptions = document.querySelectorAll('.lang-dropdown .lang-option');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-options .lang-option');

    // 统一的语言切换处理函数
    function handleLanguageChange(lang, imgSrc, text) {
        // 更新PC端显示
        if (langCurrent) {
            const currentImg = langCurrent.querySelector('img');
            const currentText = langCurrent.querySelector('span');
            if (currentImg) currentImg.src = imgSrc;
            if (currentText) currentText.textContent = text;
        }

        // 更新PC端选中状态
        langOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.lang === lang) opt.classList.add('active');
        });

        // 更新移动端选中状态
        mobileLangOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.lang === lang) opt.classList.add('active');
        });

        // 关闭PC端下拉菜单
        langSwitch?.classList.remove('active');

        // 执行翻译
        translatePage(lang);
    }

    // PC端语言切换逻辑
    if (langCurrent) {
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitch.classList.toggle('active');
        });
    }

    // 点击其他地方关闭语言下拉菜单
    document.addEventListener('click', () => {
        langSwitch?.classList.remove('active');
    });

    // PC端语言选项点击事件
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.dataset.lang;
            const img = option.querySelector('img').src;
            const text = option.querySelector('span').textContent;
            handleLanguageChange(lang, img, text);
        });
    });

    // 移动端语言选项点击事件
    mobileLangOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            const img = option.querySelector('img').src;
            const text = option.querySelector('span').textContent;
            handleLanguageChange(lang, img, text);
        });
    });

    // 初始化当前语言显示
    const currentLang = localStorage.getItem('preferred_language') || 'zh';
    const currentOption = document.querySelector(`.lang-option[data-lang="${currentLang}"]`);
    if (currentOption) {
        const img = currentOption.querySelector('img').src;
        const text = currentOption.querySelector('span').textContent;
        handleLanguageChange(currentLang, img, text);
    }
}

// 在线客服功能
function initCustomerService() {
    const csButton = document.querySelector('.cs-button');
    
    csButton.addEventListener('click', () => {
        // 这里可以添加在线客服的具体实现
        console.log('打开在线客服窗口');
    });
}

// 表单验证
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// 预订表单提交
document.querySelector('.booking-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm(e.target)) {
        // 这里添加表单提交逻辑
        console.log('表单提交成功');
    }
});

// 移动导航菜单
function initMobileNav() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const pageOverlay = document.querySelector('.page-overlay');

    if (!mobileMenuBtn || !mobileNav || !mobileNavClose || !pageOverlay) {
        console.error('Mobile nav elements not found');
        return;
    }

    // 打开菜单
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileNav.classList.add('active');
        pageOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // 关闭菜单函数
    function closeMenu() {
        mobileNav.classList.remove('active');
        pageOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 点击关闭按钮
    mobileNavClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
    });

    // 点击遮罩层关闭
    pageOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
    });

    // 移动端导航项点击
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    // ESC 键关闭菜单
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

// 图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// 主题切换功能
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // 设置初始主题
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    
    // 主题切换事件
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// 更新主题图标
function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// 添加页面滚动动画
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(el => observer.observe(el));
}

// 目的地轮播功能
function initDestinationsSlider() {
    const sliderTrack = document.querySelector('.destinations-slider .slider-track');
    const prevButton = document.querySelector('.destinations-slider .slider-prev');
    const nextButton = document.querySelector('.destinations-slider .slider-next');
    const cards = document.querySelectorAll('.destinations-slider .destination-card');
    
    if (!sliderTrack || !prevButton || !nextButton || cards.length === 0) return;
    
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20; // 卡片宽度 + 间距
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    function slideNext() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateSlider();
        }
    }
    
    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    // 触摸事件处理
    sliderTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        sliderTrack.style.transition = 'none';
    });
    
    sliderTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const cardWidth = cards[0].offsetWidth + 20;
        const offset = -currentIndex * cardWidth + diff;
        sliderTrack.style.transform = `translateX(${offset}px)`;
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        isDragging = false;
        sliderTrack.style.transition = 'transform 0.3s ease';
        const currentX = e.changedTouches[0].clientX;
        const diff = currentX - startX;
        
        if (Math.abs(diff) > 50) { // 滑动距离超过50px时切换
            if (diff > 0) {
                slidePrev();
            } else {
                slideNext();
            }
        } else {
            updateSlider(); // 恢复原位
        }
    });
    
    // 按钮点击事件
    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);
    
    // 窗口大小改变时更新滑块位置
    window.addEventListener('resize', updateSlider);
    
    // 初始化
    updateSlider();
} 