    
   
    
    
    window.addEventListener("load",()=>{
         const loader = document.getElementById('preloader');


        setTimeout(()=>{
          loader.classList.add('loaded');  
        },600);
        
    });
    
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const imgsideleft = document.querySelector('.containerImgForSides1');
    const imgsideright = document.querySelector('.containerImgForSides2');
    const slidesleft = document.querySelectorAll('.leftImages');
    const slidesright = document.querySelectorAll('.rightImages');


    function showSlide(index){

        slides.forEach(slide => slide.classList.remove('activePic'));
        slides[index].classList.add('activePic');

    }

    function changeSlideLeft(index){
        slidesleft.forEach(leftImage => leftImage.classList.remove('leftActive'));
        slidesleft[index].classList.add("leftActive");
    }

    function changeSlideRight(index){
        slidesright.forEach(rightImage => rightImage.classList.remove('rightActive'));
        slidesright[index].classList.add("rightActive");
    }

    let counterSlide = 0;

    next.addEventListener("click", ()=>{
        counterSlide++;

        if(counterSlide >= slides.length){
            counterSlide=0;
        }

        showSlide(counterSlide);
        changeSlideLeft(counterSlide);
        changeSlideRight(counterSlide);
    
    })

    prev.addEventListener("click", ()=>{
        counterSlide--;

        if(counterSlide < 0){
            counterSlide.length-1;
        }

        showSlide(counterSlide);
        changeSlideLeft(counterSlide);
        changeSlideRight(counterSlide);
    })
    
    

    function closePoemCard(cardNum){
        const poemCard = document.getElementById(cardNum);

        poemCard.style.display = 'none';
    }

    function showPoemCard(poemNum){
        const poemCard = document.getElementById(poemNum);

        poemCard.style.display = "block";
    }

    let counterPlay = 0;

    function playAudio(audioSelected, voiceInt){
        counterPlay++;
        const audio = document.getElementById(audioSelected);
        const voiceBtn = document.getElementById(voiceInt);
        if(counterPlay==1){
            audio.play();
                voiceBtn.classList.add("playing");

            audio.onended = function(){
                voiceBtn.classList.remove("playing");
            };
        }else{
            voiceBtn.classList.remove("playing");
            audio.pause();
            audio.currentTime = 0;
            counterPlay=0;
        } 
    }


    function filterItems(){
        const input = document.querySelector('.searchInput').value.toLowerCase();
        const resultsContainer = document.querySelector('.resultsContainer');
        const items = resultsContainer.querySelectorAll('.result-item');

        if(input){
            resultsContainer.style.display = 'flex';
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();

                    if(text.includes(input)){
                        item.style.display = 'flex';
                    }else{
                        item.style.display = 'none';
                    }
            });
        }else{
            resultsContainer.style.display = 'none';
        }

        items.forEach(item =>{
            item.addEventListener("click",()=>{
                resultsContainer.style.display = "none";
                document.querySelector('.searchInput').value = '';
            });
        });

    }

    function filterItemsMobile(){
        const input = document.getElementById('searchInputMobile').value.toLowerCase();
        const resultsContainer = document.getElementById('resultsContainerMobile');
        const items = resultsContainer.querySelectorAll('.result-itemMobile');

        if(input){
            resultsContainer.style.display = 'flex';
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();

                    if(text.includes(input)){
                        item.style.display = 'flex';
                    }else{
                        item.style.display = 'none';
                    }
            });
        }else{
            resultsContainer.style.display = 'none';
        }

        items.forEach(item =>{
            item.addEventListener("click",()=>{
                resultsContainer.style.display = "none";
                document.getElementById('searchInputMobile').value = '';
            });
        });
    }

    function submitEvent(event){
        event.preventDefault();

        const searchInput = document.querySelector('.searchInput');
        const query = searchInput.value.trim().toLowerCase();

        console.log(query);

        if(query){
            if(query == "home"){
                window.location.href = 'index.html';
            }else if( query == "about"){
                window.location.href = 'about.html';
            }else if( query == "achievements"){
                window.location.href = 'achievements.html';
            }else if( query == "profile" || query=="author's profile"){
                window.location.href = 'profile.html';
            }else if( query == "contact"){
                window.location.href = 'contact.html';
            }else if( query == "proditiophobia"){
                window.location.href = '#row1';
            }else if( query == "sister,me too"){
                window.location.href = '#row2';
            }else if( query == "lotus flower"){
                window.location.href = '#row3';
            }else if( query == "beleaguered in love"){
                window.location.href = '#row4';
            }else if( query == "one million stars: one million kilometers to connect us"){
                window.location.href = '#row5';
            }else if( query == "when the arduous life tries to kill you"){
                window.location.href = '#row6';
            }else if( query == "twenty years"){
                window.location.href = '#row7';
            }else if( query == "they will"){
                window.location.href = '#row8';
            }else if( query == "the unorthodox barbie"){
                window.location.href = '#row9';
            }else if( query == "dear human,"){
                window.location.href = '#row10';
            }else if( query == "dear little gian,"){
                window.location.href = '#row11';
            }else if( query == "art gallery"){
                window.location.href = '#rowart';
            }else{
                alert('Sorry, no matching content found for '+query);
            }
        }
    }

function submitMobileEvent(event){
        event.preventDefault();

        const searchInput = document.getElementById('searchInputMobile');
        const query = searchInput.value.trim().toLowerCase();

        console.log(query);

        if(query){
            if(query === "home"){
                window.location.href = 'index.html';
            }else{
                alert('Sorry, no matching content found for '+query);
            }
        }
    }


function showSideBar() {
    const closeIcon = document.querySelector('.closeIcon'); 
    const menuIcon = document.querySelector('.menuIcon');
    const menuContainer = document.querySelector('.mobileMenuContainer');

    menuContainer.style.display = 'block';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'flex';
}


function closeSideBar() {
    const closeIcon = document.querySelector('.closeIcon'); 
    const menuIcon = document.querySelector('.menuIcon');
    const menuContainer = document.querySelector('.mobileMenuContainer');

    menuContainer.style.display = 'none';
    menuIcon.style.display = 'flex';
    closeIcon.style.display = 'none';
}

const viewport = window.matchMedia("(max-width: 1300px)");
viewport.addEventListener('change',changeViewport);

changeViewport(viewport);

function changeViewport(mq){
    const closeIcon = document.querySelector('.closeIcon'); 
    const menuIcon = document.querySelector('.menuIcon');
    const menuContainer = document.querySelector('.mobileMenuContainer');

    if(mq.matches){
        menuContainer.style.display = 'none';
        menuIcon.style.display = 'flex';
        closeIcon.style.display = 'none';
    }else{
        menuContainer.style.display = 'none';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    }
}



function checkViewport() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const image = document.getElementById('myImage');

    if(!image){
        return;
    }

    // Change the image source based on viewport size
    if(viewportWidth<=320 && (viewportHeight >=911 && viewportHeight <1149)){
        image.src = 'Images/WelcomemobileS.jpg';
    }else if (viewportWidth<=320 && (viewportHeight < 911 && viewportHeight > 699)){
        image.src = 'Images/WelcomemobileS.jpg';
    }else if (viewportWidth <= 320 && (viewportHeight < 700 && viewportHeight > 549)) {
        image.src = 'Images/WelcomemobileL.jpeg';
    }else if (viewportWidth<=760 && (viewportHeight > 1200 && viewportHeight <=1400)){
        image.src = 'Images/WelcomemobileL.jpeg';
    }else if (viewportWidth <= 425 && (viewportHeight < 700 && viewportHeight > 549)) {
        image.src = 'Images/WelcomemobileL1.jpg';
    }else if (viewportWidth<=770 && viewportHeight > 1400){
        image.src = 'Images/WelcomemobileL.jpeg';
    }else if (viewportWidth<=425 &&(viewportHeight >=911 && viewportHeight <1149)){
        image.src = 'Images/WelcomemobileL.jpeg';
    }else if (viewportWidth<=425 && (viewportHeight < 911 && viewportHeight > 699)){
        image.src = 'Images/WelcomemobileL.jpeg';
    }else if (viewportWidth<=1050 && viewportHeight > 1400){
        image.src = 'Images/Welcometablet1.jpg';
    }else if (viewportWidth <= 627 && (viewportHeight >=911 && viewportHeight <1149)){
        image.src = 'Images/Welcometablet1.jpg';
    }else if (viewportWidth<=1150 && (viewportHeight > 1200 && viewportHeight <=1400)){
        image.src = 'Images/Welcometablet1.jpg';
    }else if (viewportWidth <= 590 && (viewportHeight < 700 && viewportHeight > 549)) {
        image.src = 'Images/Welcometablet.jpg';
    }else if (viewportWidth <= 768 && (viewportHeight >=911 && viewportHeight <1149)) {
        image.src = 'Images/Welcometablet.jpg'; 
    }else if (viewportWidth <= 768 && (viewportHeight < 911 && viewportHeight > 699)) {
        image.src = 'Images/Welcometablet.jpg';
    }else if (viewportWidth<=1265 && (viewportHeight > 1149 && viewportHeight < 1201)){
        image.src = 'Images/Welcometablet1.jpg';
    }else if (viewportWidth <= 1382 && (viewportHeight >=911 && viewportHeight <1149)) {
        image.src = 'Images/WelcomelaptopL.jpeg';
    }else if (viewportWidth <= 1300 && (viewportHeight < 911 && viewportHeight > 699)) {
        image.src = 'Images/WelcomelaptopL.jpeg'; 
    }else if (viewportWidth <= 970 && (viewportHeight < 700 && viewportHeight > 549)) {
        image.src = 'Images/WelcomelaptopL.jpeg'; 
    }else if (viewportWidth<=1440 && (viewportHeight > 1200 && viewportHeight <=1400)){
        image.src = 'Images/Welcomelaptop.jpeg';
    }else if (viewportWidth<=1968 && (viewportHeight > 1200 && viewportHeight <=1400)){
        image.src = 'Images/WelcomelaptopL.jpeg';
    }else if (viewportWidth<=1785 && (viewportHeight > 1149 && viewportHeight < 1201)){
        image.src = 'Images/WelcomelaptopL.jpeg';
    }else if (viewportWidth<=1440 && viewportHeight > 1400){
        image.src = 'Images/Welcomelaptop.jpeg';
    }else if (viewportWidth<=2250 && viewportHeight > 1400){
        image.src = 'Images/WelcomelaptopL.jpeg';
    }else if (viewportWidth <= 1407 && (viewportHeight >=911 && viewportHeight <1149)) {
        image.src = 'Images/Welcomelaptop.jpeg';
    } else {
        image.src = 'Images/welcomebannerupdated.jpg'; 
    }
}

    // Check viewport size on load and when resized
window.addEventListener('resize', checkViewport);
checkViewport(); // Initial check on load
