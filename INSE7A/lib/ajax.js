function AjaxResponder(method, URL, callback)
{
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open(method, URL, true);
    ajaxObj.onreadystatechange = function()
        {   if (ajaxObj.status == 200)
                if (ajaxObj.readyState == 4)
                    callback(ajaxObj.responseText);
        };
    ajaxObj.send(null);
};