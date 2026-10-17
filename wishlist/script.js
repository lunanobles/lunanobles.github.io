//MARK: ULTRA SMALL SCREENS
if (document.documentElement.clientWidth < 200) {
    alert("WARNING! This page was not developed with this screen size in mind, page layout will be distorted or even unusable.\nPlease view the page on a larger device.")
    document.body.innerHTML = `<p style="text-align: center;">&#9888; Please view this page on a larger device. &#9888;</br>Try reloading the page...<br/>Width: `+document.documentElement.clientWidth+`px</p>`
}

//MARK: SPECIAL CODE
    const code_input_element = document.getElementById("special_code_input");
    var code_input = ""; 
    const code_message_element = document.getElementById("special_code_message");

    show_cards("Public");

    //MARK:  + Code Input
    code_input_element.addEventListener("change", function (e) {
        code_input = this.value;

        switch (code_input) {
            case "1111":
                show_cards("Friends & Family")
                code_message_element.innerText = "Friends & Family";
                break;
            case "1505":
                show_cards("Personal Family");
                code_message_element.innerText = "Personal Family";
                break;
            default:
                show_cards("Public")
                code_message_element.innerText = "(Invalid Code)";
                break;
        } 
    });


    //MARK: + show_cards()
    function show_cards(section) {

        const cards_all              = document.querySelectorAll("*.card");
        const cards_public           = document.querySelectorAll("*.card.public, *.card[data-special-visibility~='public']");
        const cards_friendsandfamily = document.querySelectorAll("*.card.friendsandfamily, *.card[data-special-visibility~='friendsandfamily']");
        const cards_personalfamily   = document.querySelectorAll("*.card.personalfamily, *.card[data-special-visibility~='personalfamily']");

        switch (section) {
            case "Friends & Family":
                cards_all.forEach(card => {card.style.display = "none"});
                cards_friendsandfamily.forEach(card => {card.style.display = "block"});
                break;
            case "Personal Family":
                cards_all.forEach(card => {card.style.display = "none"});
                cards_personalfamily.forEach(card => {card.style.display = "block"});
                break;
            default:
                cards_all.forEach(card => {card.style.display = "none"});
                cards_public.forEach(card => {card.style.display = "block"});
                break;
        }
    }