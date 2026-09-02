
// first we are add class footer-column in all h3 parent div
// we are add in for all h3 class footer-icon and add  element  <span class="footer-toggle">+</span>
// then add in ul element class  <ul class="footer-links">


// $title => store the click footer heading jQuery object
            // this variable contains jQuery object
        
        // this => refer to the specific element that the user clicked
                // it does not all heading
        // this is the normal DOM element we convert to jQuery object $(this)
            
        // Eg:-
            // <h3 class="footer-title">Account</h3>
            // <h3 class="footer-title">Service</h3>;
                // user click Account
            // this => <h3 class="footer-title">Account</h3>;
                //  only acces HTML element
            // $(this) => select only "Account"
        
        // thats we can control the correct dropdown instead of all dropdowns.
        
        
        // const $arrow = $title.find(".footer-arrow");
        // the .footer-arrow is inside .footer-title
                    // $title.find(".footer-arrow")
            // is find .footer-arrow inside the clicked heading.

                // $title
                //   ↓
                // <h3>
                //     Apple Wallet
                //     <span class="footer-arrow">V</span>
                // </h3>

                // .find(".footer-arrow")
                //   ↓
                // <span class="footer-arrow">V</span>
        // then we are store  const $arrow 

        // Why don't we use $(".footer-arrow")?
            // that selects all arrows.
        // we need the arrow only one clicked heading


        // const $links = $title.next(".footer-links");
        // $title.next()
            // get the next  the select element
                // <h3>Apple Wallet</h3>
                    //<ul>...</ul> then
                // $("h3").next()

            // Why .next(".footer-links")?
                // Get the next sibling(bro or sis element), but only if it has the class footer-links.

// Example with Apple Wallet
        // <h3 class="footer-title">
        //     Apple Wallet
        //     <span class="footer-arrow">v</span>
        // </h3>

        // <ul class="footer-links">
        //     <li>Wallet</li>
        //     <li>Apple Card</li>
        //     <li>Apple Pay</li>
        //     <li>Apple Cash</li>
        // </ul>


// When User clicks:
    // Apple Wallet
// Then:
    // $title
        //is: => // Apple Wallet heading

        // $title.find(".footer-arrow")
        // is: V
        // Then:

        // $title.next(".footer-links")
        // is:

        // Wallet
        // Apple Card
        // Apple Pay
        // Apple Cash
        // That's exactly the relationship we need.
        // open/ close link
        // $links.slideToggle(300);

        // 300 milliseconds = 0.3 seconds
        // 
    
    
    

$(function (){
    // select all h3 .footer-title
    // .on("click",  function (){})
        //  When footer h3 heading is clicked run function
    $(".footer-title").on("click", function () {

        if ($(window).width() > 768){
            return;
        }
        const title = $(this);
        const icon = title.find(".footer-arrow");
        const links = title.next(".footer-links");
        links.slideToggle(300);
        

        if (icon.text() === "x"){
            icon.text("+");
        }else{
            icon.text("x");
        }

        
    });
});






// $(window).on("resize", function () {
//   if ($(window).width() > 768) {
//     $(".footer-links").show();

//     $(".footer-arrow").text("+");
//   }
// });