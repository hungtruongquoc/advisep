(function() {
    var homePage = document.querySelector('#home-page'), studentList = document.querySelector('#student-list');
    if(typeof studentList !== 'undefined' && studentList !== null) studentList.Active = 1;
    homePage.AppTitle = "IU Advise";
    homePage.selected = 0;

    homePage.addEventListener('dom-change', function(){
        console.log(document.querySelector('paper-menu'));
    });
})();
