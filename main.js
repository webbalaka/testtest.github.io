function change1 (event) {
    if (event.type == 'mouseover') {
        card1.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        card1.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        card1.style.boxShadow = "";
    }
}

function change2 (event) {
    if (event.type == 'mouseover') {
        card2.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        card2.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        card2.style.boxShadow = "";
    }
}

function change3 (event) {
    if (event.type == 'mouseover') {
        card3.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        card3.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        card3.style.boxShadow = "";
    }
}

function cerchange1 (event) {
    if (event.type == 'mouseover') {
        cer1.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        cer1.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        cer1.style.boxShadow = "";
    }
}
function cerchange2 (event) {
    if (event.type == 'mouseover') {
        cer2.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        cer2.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        cer2.style.boxShadow = "";
    }
}
function cerchange3 (event) {
    if (event.type == 'mouseover') {
        cer3.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.25)";
        cer3.style.cursor = "pointer";
    }
    if (event.type == 'mouseout') {
        cer3.style.boxShadow = "";
    }
}


card1.onmouseover = card1.onmouseout = change1;
card2.onmouseover = card2.onmouseout = change2;
card3.onmouseover = card3.onmouseout = change3;
// cer1.onmouseover = cer1.onmouseout = cerchange1;
// cer2.onmouseover = cer2.onmouseout = cerchange2;
// cer3.onmouseover = cer3.onmouseout = cerchange3;