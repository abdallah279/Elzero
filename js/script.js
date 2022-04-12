let gallayImg = document.querySelectorAll('.gallary-img .image img');

gallayImg.forEach(img =>{

    img.addEventListener('click',()=>{

        // Create Overlay Element
        let popupOverlay = document.createElement('div');

        // Add Class To Overlay
        popupOverlay.className = 'popUp-overlay';

        // Append Overlay Elemenet In Body
        document.body.appendChild(popupOverlay);

        // Create Popup-Box
        let popUp = document.createElement('div');

        // Add Class To popUpBox
        popUp.className = 'pop-up';

        // Append The PopupBox In Body
        document.body.appendChild(popUp);

        // Create Img
        let popupImg = document.createElement('img');

        // Add Class To popUpImg
        popupImg.className = 'popUp-img';

        // Set Image Source
        popupImg.src = img.src;

         // Add Image To PopupBox
        popUp.appendChild(popupImg);

        // create CloseButton
        let closeButton = document.createElement('div');

        // Add Class To Button
        closeButton.className = 'close-btn';

        // Append The CloseButton In PopupBox
        popUp.appendChild(closeButton);

    });
});

document.addEventListener('click' , (e)=>{

    if(e.target.classList == 'close-btn' || e.target.classList == 'popUp-overlay'){

        document.querySelector('.pop-up').remove();
        document.querySelector('.popUp-overlay').remove();
    };
});
