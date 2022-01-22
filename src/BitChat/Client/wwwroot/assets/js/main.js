window.blazorCulture = {
    get: () => window.localStorage['BlazorCulture'],
    set: (value) => window.localStorage['BlazorCulture'] = value
};

function loadScript(url) {

    let myScript = document.createElement("script");
    myScript.src = url;
    document.body.appendChild(myScript);

}

/***************************************
 * Side Bar
 * ************************************/

function SidbarScripts() {

    loadScript('/assets/js/shared/off-canvas.js');
    loadScript('/assets/js/shared/misc.js');
    loadScript('/assets/js/shared/hoverable-collapse.js');
    //loadScript('/assets/js/demo_1/dashboard.js');
};

/***************************************
 * DatePicker
 * ************************************/
function includeDatePicker() {

    loadScript('/assets/vendors/datepicker/persian-date.min.js');
    loadScript('/assets/vendors/datepicker/persian-datepicker.js');

    $(document).ready(function () {
        setTimeout(() => {
            $(".datepicker").pDatepicker({
                initialValue: false,
                format: 'YYYY/MM/DD',
                responsive: true,
                onSelect: function (unixDate) {
                    var pdate = new persianDate(unixDate);
                    pdate.formatPersian = this.persianDigit;
                    var date = pdate.format('YYYY/MM/DD');
                    var element = this.model.input.elem;
                    $(element).focus();
                    DotNet.invokeMethodAsync("BitChat.Web", "SetInputDateValue", date);
                }
            });

        }, 1000);
    });

}


/***************************************
 * Include Rtl Layout
 * ************************************/
function includeCss() {

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "/assets/css/Site.css");
    document.getElementsByTagName("head")[0].appendChild(element);

    $('body').addClass('rtl');

}

function includeTree() {

    $(document).ready(function () {
        setTimeout(() => {

            var checks = document.querySelectorAll("input[type=checkbox]");

            for (var i = 0; i < checks.length; i++) {
                checks[i].addEventListener('change', function () {
                    if (this.checked) {
                        showChildrenChecks(this);
                    } else {
                        hideChildrenChecks(this)
                    }
                });
            }

            function showChildrenChecks(elm) {
                var pN = elm.parentNode;
                var childCheks = pN.children;

                for (var i = 0; i < childCheks.length; i++) {
                    if (hasClass(childCheks[i], 'child-check')) {
                        childCheks[i].classList.add("active");
                    }
                }

            }

            function hideChildrenChecks(elm) {
                var pN = elm.parentNode;
                var childCheks = pN.children;

                for (var i = 0; i < childCheks.length; i++) {
                    if (hasClass(childCheks[i], 'child-check')) {
                        childCheks[i].classList.remove("active");
                    }
                }

            }

            function hasClass(elem, className) {
                return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
            }

        }, 1000);
    });

}


/***************************************
 * Toast
 * ************************************/

showSuccessToast = function (text) {
    'use strict';
    resetToastPosition();
    $.toast({
        //heading: heading,
        text: "<p class='text-right text-light mt-3' style='font-family:iransans;line-height:2;direction:rtl'>" + text + "</p>",
        showHideTransition: 'slide',
        icon: 'success',
        loaderBg: '#eaeaea',
        position: 'top-left',
        hideAfter: 4000,
        allowToastClose: true,
    })
};

showDangerToast = function (text) {
    'use strict';
    resetToastPosition();
    $.toast({
        //heading: heading,
        text: "<p class='text-right text-light mt-3' style='font-family:iransans;line-height:2;direction:rtl'>" + text + "</p>",
        showHideTransition: 'slide',
        icon: 'error',
        loaderBg: '#eaeaea',
        position: 'top-left',
        hideAfter: 6000,
        allowToastClose: true,
    })
};


showInfoToast = function (text) {
    'use strict';
    resetToastPosition();
    $.toast({
        //heading: heading,
        text: "<p class='text-right text-light mt-3' style='font-family:iransans;line-height:2;direction:rtl'>" + text + "</p>",
        showHideTransition: 'slide',
        icon: 'info',
        loaderBg: '#eaeaea',
        position: 'top-left',
        hideAfter: 6000,
        allowToastClose: true,
    })
};

resetToastPosition = function () {
    $('.jq-toast-wrap').removeClass('bottom-left bottom-right top-left top-right mid-center'); // to remove previous position class
    $(".jq-toast-wrap").css({
        "top": "",
        "left": "",
        "bottom": "",
        "right": ""
    }); //to remove previous position style
};

/***************************************
 * Change Table Icon 
 * ************************************/

function ChangeIcon(id) {
    $("#I-" + id).toggleClass("mdi-plus mdi-minus");
}

/***************************************
 * Change Table Icon
 * ************************************/
function HideModal(modalId) {
    $('#' + modalId).modal('hide');
    $('.modal-backdrop').addClass('d-none');
}

function closeModal() {
    $('.modal').modal('hide');
    $('.modal-backdrop').addClass('d-none');
}

/*********************************************************
 *  File Upload
 * ******************************************************/
function FileUpload(defaultMessage, svg, replaceMessage, remove, error) {
    $(document).ready(function () {
        $('.dropify').dropify({
            messages: {
                'default': svg + "<br>" + defaultMessage,
                'replace': replaceMessage,
                'remove': remove,
                'error': error,
            },
            tpl: {
                wrap: '<div class="dropify-wrapper dropcss"></div>',
                loader: '<div class="dropify-loader dropcss"></div>',
                message: '<div class="dropify-message dropcss"><span class="" /> <p>{{ default }}</p></div>',
                preview: '<div class="dropify-preview dropcss"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
                filename: '<p class="dropify-filename dropcss"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
                clearButton: '<button type="button" class="dropify-clear dropcss">{{ remove }}</button>',
                errorLine: '<p class="dropify-error dropcss">{{ error }}</p>',
                errorsContainer: '<div class="dropify-errors-container dropcss"><ul></ul></div>'
            }
        });
    });
}


function apiNotification(title, body) {

    if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function (status) {  // status is "granted", if accepted by user
            var n = new Notification(title, {
                body: body,
                //icon: '/icon-512.png' // optional
            });
        });
    }

    //Notification.requestPermission(function (result) {
    //    if (result === 'granted') {
    //        navigator.serviceWorker.ready.then(function (registration) {
    //            registration.showNotification('Vibration Sample', {
    //                body: 'Buzz! Buzz!',
    //                //icon: '../images/touch/chrome-touch-icon-192x192.png',
    //                vibrate: [200, 100, 200, 100, 200, 100, 200],
    //                tag: 'vibration-sample'
    //            });
    //        });
    //    }
    //});

}


function IsBottomPage(dotNetHelper) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                dotNetHelper.invokeMethodAsync("CallLoadFunction", true);
            }
        });
    })
}


function CreateHtml(htmlString) {
    document.write(htmlString);
}

function SubmitForm(formId) {
    var vPostForm = document.getElementById(formId);
    vPostForm.submit()
}


function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
