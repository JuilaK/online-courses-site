const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown__menu");
const dropdownBtn = document.querySelector(".dropdown__toggle-wrapper");
const dropdownTitle = document.querySelector(".dropdown__toggle .dropdown__option-title");
const dropdownOptions = dropdownMenu.querySelectorAll(".dropdown__option");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__content-item");

dropdownOptions.forEach(onOptionClick);

function onOptionClick(option) {
    option.addEventListener("click", function() {
        let tabId = option.getAttribute("data-tab");

        if (!option.classList.contains('active')){
            tabsBtn.forEach(function(btn) {
                if (btn.getAttribute("data-tab") == tabId) {
                    btn.click();
                }
            });

            dropdownOptions.forEach(function(option) {
                option.classList.remove('active');
            });
            option.classList.add('active');
            dropdownBtn.innerHTML = option.innerHTML;
        }
    });
}

document.querySelector('.dropdown__option').click();

dropdown.addEventListener("click",()=>{
    dropdown.classList.toggle('show');
});