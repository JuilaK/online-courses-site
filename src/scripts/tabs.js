const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__content-item");

tabsBtn.forEach(onTabClick);

function onTabClick(btn) {
    btn.addEventListener("click", function() {
        let tabId = btn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!btn.classList.contains('active')){
            tabsBtn.forEach(function(btn) {
                btn.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            btn.classList.add('active');
            currentTab.classList.add('active');
        }
        
    });
}

document.querySelector('.tabs__nav-btn').click();