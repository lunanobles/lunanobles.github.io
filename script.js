function project_filter(tag) {

    var items = document.querySelectorAll(`section#projects_search > a.project_card[data-tags~="`+tag+`"]`);
    var all_items = document.querySelectorAll(`section#projects_search > a.project_card`);
    var this_button = document.querySelector(`button[onclick~="project_filter('`+tag+`')"]`);
    var all_buttons = document.querySelectorAll(`div#project_buttons > button`);


    ////// Stylising Buttons //////
    all_buttons.forEach(button => {
        button.classList.toggle("project_button_active", false);
    })

    if (this_button) // If this button exists
    {
        this_button.classList.toggle("project_button_active"); // Stylise it
    } // else, don't


    ////// Stylising Items //////
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