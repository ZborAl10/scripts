var elems = document.getElementsByClassName("q_container");
    for(var i = 0; i < elems.length; i++)
        if (elems[i].style.display == "block" || elems[i].style.display != "block" && elems[i].style.display != "none")
        {
        var main = elems[i].id;
        var x = main.replace(/^.{4}/, '');
        var right = $(document.getElementById(main).getElementsByClassName("answ_normal right")).attr("data-id");
        alert(right);
    }