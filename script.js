if (document.documentElement.clientWidth < 320) {
    alert("WARNING! This page was not developed with this screen size in mind, page layout will be distorted or even unusable.\nPlease view the page on a larger device.")
    document.body.innerHTML = `<p style="text-align: center;">&#9888; Please view this page on a larger device. &#9888;</br>Try reloading the page...<br/>Width: `+document.documentElement.clientWidth+`px</p>`
}

function project_filter(tag) {

    var items = document.querySelectorAll(`section#projects_search > a.project_card[data-tags~="`+tag+`"]`);
    var all_items = document.querySelectorAll(`section#projects_search > a.project_card`);
    var this_button = document.querySelector(`button[onclick~="project_filter('`+tag+`')"]`);
    var all_buttons = document.querySelectorAll(`div#project_buttons > button`);


    /// Stylising Buttons ///
    all_buttons.forEach(button => {
        button.classList.toggle("project_button_active", false);
    })

    if (this_button) // If this button exists
    {
        this_button.classList.toggle("project_button_active"); // Stylise it
    } // else, don't


    /// Stylising Items ///
    all_items.forEach(item => {
        item.classList.toggle("content_shown", false);
    })

    if (tag) // If tag is provided
    {
        // Show relevent items
        items.forEach(item => {
            item.classList.toggle("content_shown");
        })
    }
    else // If tag is not provided
    {
        // Show all items
        all_items.forEach(item => {
            item.classList.toggle("content_shown");
        });
    }
}

function viewProfile(who) {
    var profile_deleduck = document.querySelector("aside.profile_deleduck");
    var profile_celene = document.querySelector("aside.profile_celene");
    var profile_irl = document.querySelector("aside.profile_irl");

    if (who == "DeLeDuck") {
        profile_deleduck.style.display = "block";
        profile_celene.style.display = "none";
        profile_irl.style.display = "none";
    }
    else if (who == "Celene") {
        profile_deleduck.style.display = "none";
        profile_celene.style.display = "block";
        profile_irl.style.display = "none";
    }
    else if (who == "IRL") {
        profile_deleduck.style.display = "none";
        profile_celene.style.display = "none";
        profile_irl.style.display = "block";
    }
}


let isOpen = [false, false, false, false, false, false];

function navDropDown(section) {
    let section_num = -1;

    switch (section) {
        case "home":
            section_num = 0;
            break;
        case "projects":
            section_num = 1;
            break;
        case "skills":
            section_num = 2;
            break;
        case "aboutme":
            section_num = 3;
            break;
        case "contacts":
            section_num = 4;
            break;
        case "resume":
            section_num = 5;
            break;
    }

    var dropdown = document.querySelector(`html > body > nav div#nav_${section} span.dropdown_icon > span`);
    var subcontent = document.querySelectorAll(`html > body > nav div > div#nav_${section} + div.dropdown_content`);

    if (!isOpen[section_num]) 
    {
        dropdown.innerText = "keyboard_arrow_down";
        subcontent.forEach(item => {
            item.style.display = "flex";
        });
        isOpen[section_num] = true;
    }
    else 
    {
        dropdown.innerText = "keyboard_arrow_up";
        subcontent.forEach(item => {
            item.style.display = "none";
        });
        isOpen[section_num] = false;
    }
}