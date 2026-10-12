
async function sendRequestByEmail(subject, details, messageElement) {
    if (messageElement) {
        messageElement.textContent = "Sending your request...";
    }

    try {
        const response = await fetch(
            "https://formsubmit.co/ajax/zunairak119@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...details,
                    _subject: subject,
                    _template: "table"
                })
            }
        );

        const result = await response.json();

        if (!response.ok || result.success !== "true") {
            throw new Error("Email submission failed");
        }

        if (messageElement) {
            messageElement.textContent =
                "Request submitted successfully!";
        }

        return true;

    } catch (error) {
        if (messageElement) {
            messageElement.textContent =
                "Request could not be sent. Please try again.";
        }

        return false;
    }
}


/* =====================================================

   AUREVIA MOTORS

   RESPONSIVE CAR WEBSITE JAVASCRIPT

===================================================== */





/* ================= NAVBAR ================= */



const navbar = document.getElementById("mainNavbar");



window.addEventListener("scroll", function () {



    if (!navbar) return;



    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }



});





/* ================= CAR DATA ================= */



const cars = {



    s1: {

        name: "Aurevia S1",

        type: "Executive Sedan",

        tag: "SEDAN",



        images: [

            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=95"

        ],



        price: "PKR 13,750,000",



        description:

        "The Aurevia S1 combines elegant design, refined comfort and responsive performance. It is designed for drivers who want a premium sedan for both city journeys and long drives.",



        power: "250 HP",

        transmission: "Automatic",

        fuel: "Petrol",

        seats: "5 Seats",



        specs: [

            "2.0L Turbo Engine",

            "250 HP",

            "Automatic Transmission",

            "Premium Interior"

        ]

    },





    gt: {

        name: "Aurevia GT",

        type: "Performance Coupe",

        tag: "SPORT",



        images: [

            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=95"

        ],



        price: "PKR 20,450,000",



        description:

        "The Aurevia GT is built for performance lovers. With a powerful engine, sporty design and advanced driving technology, it turns every road into an exciting experience.",



        power: "410 HP",

        transmission: "Automatic",

        fuel: "Petrol",

        seats: "4 Seats",



        specs: [

            "3.0L Performance Engine",

            "410 HP",

            "Sport Automatic",

            "Performance Braking"

        ]

    },





    lx: {

        name: "Aurevia LX",

        type: "Luxury SUV",

        tag: "SUV",



        images: [

            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2000&q=95"

        ],



        price: "PKR 17,250,000",



        description:

        "The Aurevia LX offers spacious comfort, powerful performance and modern technology. It is made for families and drivers who want luxury without compromising practicality.",



        power: "335 HP",

        transmission: "Automatic",

        fuel: "Petrol",

        seats: "5 Seats",



        specs: [

            "3.0L Turbo Engine",

            "335 HP",

            "Automatic Transmission",

            "Luxury Cabin"

        ]

    },





    e1: {

        name: "Aurevia E1",

        type: "Electric Performance",

        tag: "ELECTRIC",



        images: [

            "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=2000&q=95",

            "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=2000&q=95"

        ],



        price: "PKR 15,900,000",



        description:

        "The Aurevia E1 brings electric performance into a premium package. Enjoy instant acceleration, quiet driving and a modern technology-focused interior.",



        power: "350 HP",

        transmission: "Automatic",

        fuel: "Electric",

        seats: "5 Seats",



        specs: [

            "Long Range Battery",

            "350 HP",

            "Single-Speed Drive",

            "Fast Charging"

        ]

    }



};





/* ================= CURRENT CAR ================= */



let currentCar = null;





/* ================= CREATE GALLERY ================= */



function createCarGallery(car) {



    const mainImage =

        document.getElementById("detailCarImage");



    if (!mainImage) return;



    mainImage.src = car.images[0];



    mainImage.alt = car.name;



    let gallery =

        document.getElementById("detailGallery");



    /*

       If gallery doesn't already exist in HTML,

       JavaScript creates it automatically.

    */



    if (!gallery) {



        gallery = document.createElement("div");



        gallery.id = "detailGallery";



        gallery.className = "detail-gallery";



        mainImage.parentElement.appendChild(gallery);



    }



    gallery.innerHTML = "";



    car.images.forEach(function (image, index) {



        const thumb =

            document.createElement("div");



        thumb.className =

            "detail-gallery-thumb";



        if (index === 0) {

            thumb.classList.add("active");

        }



        thumb.innerHTML =

            `<img src="${image}" alt="${car.name} view ${index + 1}">`;



        thumb.addEventListener(

            "click",

            function () {



                mainImage.src = image;



                document

                    .querySelectorAll(".detail-gallery-thumb")

                    .forEach(function (item) {

                        item.classList.remove("active");

                    });



                thumb.classList.add("active");



            }

        );



        gallery.appendChild(thumb);



    });



}





/* ================= SHOW CAR DETAIL ================= */



function openCar(carId) {



    const car = cars[carId];



    if (!car) return;



    currentCar = carId;



    const mainWebsite =

        document.getElementById("mainWebsite");



    const footer =

        document.querySelector("footer");



    const detailPage =

        document.getElementById("carDetailPage");



    if (mainWebsite) {

        mainWebsite.style.display = "none";

    }



    if (footer) {

        footer.style.display = "none";

    }



    if (detailPage) {

        detailPage.classList.add("active");

    }





    const detailImage =

        document.getElementById("detailCarImage");



    if (detailImage) {

        detailImage.src = car.images[0];

        detailImage.alt = car.name;

    }





    const elements = {



        detailCarTag: car.tag,

        detailCarType: car.type,

        detailCarName: car.name,

        detailCarDescription: car.description,

        detailCarPrice: car.price,

        detailPower: car.power,

        detailTransmission: car.transmission,

        detailFuel: car.fuel,

        detailSeats: car.seats



    };





    Object.keys(elements).forEach(function (id) {



        const element =

            document.getElementById(id);



        if (element) {

            element.textContent =

                elements[id];

        }



    });





    /* Gallery */



    createCarGallery(car);





    /* Specifications */



    const specs =

        document.getElementById("detailSpecs");



    if (specs) {



        specs.innerHTML = "";



        car.specs.forEach(function (spec) {



            const div =

                document.createElement("div");



            div.innerHTML =

                `<i class="bi bi-check2-circle"></i> ${spec}`;



            specs.appendChild(div);



        });



    }





    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });





    history.pushState(

        {},

        "",

        "#" + carId

    );



}





/* ================= BACK TO HOME ================= */



function showHome() {



    const mainWebsite =

        document.getElementById("mainWebsite");



    const footer =

        document.querySelector("footer");



    const detailPage =

        document.getElementById("carDetailPage");





    if (mainWebsite) {

        mainWebsite.style.display = "block";

    }



    if (footer) {

        footer.style.display = "block";

    }



    if (detailPage) {

        detailPage.classList.remove("active");

    }



    currentCar = null;



    history.pushState(

        {},

        "",

        "#home"

    );



    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });



}





/* ================= TEST DRIVE ================= */



function bookCurrentCar() {



    if (!currentCar) return;



    const car =

        cars[currentCar];



    const bookingCar =

        document.getElementById("bookingCar");



    if (bookingCar) {

        bookingCar.textContent =

            car.name;

    }



    const bookingMessage =

        document.getElementById("bookingMessage");



    if (bookingMessage) {

        bookingMessage.textContent = "";

    }





    const modalElement =

        document.getElementById("bookingModal");



    if (!modalElement) return;



    const modal =

        new bootstrap.Modal(modalElement);



    modal.show();



}

/* ================= EMAIL SUBMISSION ================= */

async function sendAureviaEmail(subject, body, messageElement) {
    if (messageElement) {
        messageElement.textContent = "Sending your request...";
    }

    try {
        const response = await fetch(
            "https://formsubmit.co/ajax/zunairak119@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: subject,
                    _template: "table",
                    Website: "Aurevia Motors",
                    Request: body
                })
            }
        );

        const result = await response.json();

        if (!response.ok || result.success !== "true") {
            throw new Error("Email request failed");
        }

        if (messageElement) {
            messageElement.textContent =
                "Your request has been submitted successfully!";
        }

        return true;

    } catch (error) {
        console.error("Email error:", error);

        if (messageElement) {
            messageElement.textContent =
                "Could not send your request. Please try again.";
        }

        return false;
    }
}



/* ================= BOOKING FORM ================= */



const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("bookingName").value.trim();
        const email = document.getElementById("bookingEmail").value.trim();
        const phone = document.getElementById("bookingPhone").value.trim();
        const date = document.getElementById("bookingDate").value;
        const plan = document.getElementById("bookingPlan").value;
        const car = document.getElementById("bookingCar").textContent.trim();

        const bookingMessage = document.getElementById("bookingMessage");

        const body = `
New Test Drive Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Car: ${car}
Date: ${date}
Ownership Plan: ${plan || "Not selected"}

Please contact the customer to confirm the appointment.
`;

        await sendAureviaEmail(
            "Aurevia Test Drive Request - " + car,
            body,
            bookingMessage
        );
    });
}




/* ================= PLAN MODAL ================= */



function openPlan(plan) {



    const planName =

        document.getElementById("planName");



    if (planName) {

        planName.textContent = plan;

    }





    const planMessage =

        document.getElementById("planMessage");



    if (planMessage) {

        planMessage.textContent = "";

    }





    const planCar =

        document.getElementById("planCar");





    /*

       Automatically add currently selected car.

    */



    if (planCar) {



        if (currentCar && cars[currentCar]) {



            planCar.value =

                cars[currentCar].name;



        } else {



            planCar.value = "";



        }



    }





    const modalElement =

        document.getElementById("planModal");



    if (!modalElement) return;





    const modal =

        new bootstrap.Modal(modalElement);



    modal.show();



}





/* ================= PLAN FORM ================= */



const planForm = document.getElementById("planForm");

if (planForm) {
    planForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("planCustomerName").value.trim();
        const email = document.getElementById("planCustomerEmail").value.trim();
        const phone = document.getElementById("planCustomerPhone").value.trim();
        const car = document.getElementById("planCar").value.trim();
        const plan = document.getElementById("planName").textContent.trim();

        const planMessage = document.getElementById("planMessage");

        const body = `
New Ownership Plan Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Selected Plan: ${plan}
Preferred Car: ${car || "Not specified"}

Please contact the customer for more details.
`;

        await sendAureviaEmail(
            "Aurevia Ownership Plan Request - " + plan,
            body,
            planMessage
        );
    });
}

/* ================= REVIEWS ================= */



let currentTestimonial = 0;



const testimonials =

    document.querySelectorAll(".testimonial");



const dots =

    document.querySelectorAll(".dot");





function showTestimonial(index) {



    if (!testimonials.length) return;



    testimonials.forEach(function (item) {



        item.classList.remove("active");



    });





    dots.forEach(function (dot) {



        dot.classList.remove("active");



    });





    if (index >= testimonials.length) {

        index = 0;

    }



    if (index < 0) {

        index = testimonials.length - 1;

    }





    testimonials[index]

        .classList.add("active");





    if (dots[index]) {

        dots[index]

            .classList.add("active");

    }





    currentTestimonial = index;



}





/* NEXT / PREVIOUS */



function changeTestimonial(direction) {



    if (!testimonials.length) return;



    currentTestimonial += direction;





    if (

        currentTestimonial >=

        testimonials.length

    ) {



        currentTestimonial = 0;



    }





    if (currentTestimonial < 0) {



        currentTestimonial =

            testimonials.length - 1;



    }





    showTestimonial(

        currentTestimonial

    );



}





/* DOT CLICK */



function goToTestimonial(index) {



    showTestimonial(index);



}





/*

   AUTOMATIC MOVING REVIEWS



   Every 4 seconds review changes.

*/



if (testimonials.length) {



    showTestimonial(0);



    setInterval(function () {



        changeTestimonial(1);



    }, 4000);



}





/* ================= VIEW ALL REVIEWS ================= */



function showAllReviews() {



    const reviews =

        document.getElementById("allReviews");



    if (!reviews) return;





    reviews.classList.toggle("show");





    const button =

        document.querySelector(".view-reviews-btn");





    if (!button) return;





    if (reviews.classList.contains("show")) {



        button.innerHTML =

            'Hide Reviews <i class="bi bi-arrow-up"></i>';



    } else {



        button.innerHTML =

            'View All Reviews <i class="bi bi-arrow-right"></i>';



    }



}





/* ================= FAQ ================= */



const faqQuestions =

    document.querySelectorAll(".faq-question");





faqQuestions.forEach(function (question) {



    question.addEventListener(

        "click",

        function () {



            const item =

                this.parentElement;



            const answer =

                item.querySelector(".faq-answer");





            document

                .querySelectorAll(".faq-item")

                .forEach(function (other) {



                    if (other !== item) {



                        other.classList

                            .remove("open");



                        const otherAnswer =

                            other.querySelector(

                                ".faq-answer"

                            );



                        if (otherAnswer) {

                            otherAnswer.style.maxHeight =

                                null;

                        }



                    }



                });





            item.classList.toggle("open");





            if (item.classList.contains("open")) {



                answer.style.maxHeight =

                    answer.scrollHeight + "px";



            } else {



                answer.style.maxHeight =

                    null;



            }



        }

    );



});





/* ================= CONTACT FORM ================= */



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const car = document.getElementById("carChoice").value;
        const plan = document.getElementById("selectedPlan").value;
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        const body = `
New Contact Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Car: ${car || "Not selected"}
Plan: ${plan || "Not selected"}
Message: ${message || "No message provided"}
`;

        await sendAureviaEmail(
            "Aurevia Motors Contact Request",
            body,
            formMessage
        );
    });
}


/* ================= NAVBAR ACTIVE LINK ================= */



function updateActiveNav() {



    const sections =

        document.querySelectorAll(

            "main section[id]"

        );



    const navLinks =

        document.querySelectorAll(

            ".nav-link"

        );





    let current = "";





    sections.forEach(function (section) {



        const top =

            section.offsetTop - 150;





        if (

            window.scrollY >= top &&

            window.scrollY <

            top + section.offsetHeight

        ) {



            current =

                section.getAttribute("id");



        }



    });





    navLinks.forEach(function (link) {



        link.classList.remove("active");





        if (

            link.getAttribute("href") ===

            "#" + current

        ) {



            link.classList.add("active");



        }



    });



}





window.addEventListener(

    "scroll",

    updateActiveNav

);





/* ================= MOBILE NAV ================= */



const navLinks =

    document.querySelectorAll(".nav-link");





navLinks.forEach(function (link) {



    link.addEventListener(

        "click",

        function () {



            const menu =

                document.getElementById(

                    "navbarMenu"

                );





            if (

                menu &&

                menu.classList.contains("show")

            ) {



                const collapse =

                    bootstrap.Collapse

                        .getInstance(menu);





                if (collapse) {

                    collapse.hide();

                }



            }



        }

    );



});





/* ================= SCROLL ANIMATION ================= */



const revealElements =

    document.querySelectorAll(

        ".car-card, .feature-box, .price-card, .full-review"

    );





const observer =

    new IntersectionObserver(

        function (entries) {



            entries.forEach(function (entry) {



                if (entry.isIntersecting) {



                    entry.target.style.opacity =

                        "1";



                    entry.target.style.transform =

                        "translateY(0)";



                    observer.unobserve(

                        entry.target

                    );



                }



            });



        },

        {

            threshold: .12

        }

    );





revealElements.forEach(function (element) {



    element.style.opacity = "0";



    element.style.transform =

        "translateY(25px)";



    element.style.transition =

        "opacity .7s ease, transform .7s ease";



    observer.observe(element);



});





/* ================= BOOKING MODAL RESET ================= */



const bookingModal =

    document.getElementById("bookingModal");





if (bookingModal) {



    bookingModal.addEventListener(

        "hidden.bs.modal",

        function () {



            const form =

                document.getElementById(

                    "bookingForm"

                );



            if (form) {

                form.reset();

            }



        }

    );



}





/* ================= INITIAL URL CHECK ================= */



window.addEventListener(

    "load",

    function () {



        const hash =

            window.location.hash.replace("#", "");





        if (cars[hash]) {



            openCar(hash);



        }



    }

);





/* ================= BROWSER BACK BUTTON ================= */



window.addEventListener(

    "popstate",

    function () {



        const hash =

            window.location.hash.replace("#", "");





        if (cars[hash]) {



            openCar(hash);



        } else {



            showHome();



        }



    }

);





/* =====================================================

   SOCIAL LINKS

===================================================== */



function updateSocialLinks() {



    const github =

        document.querySelector(

            'a[href*="github"]'

        );



    const linkedin =

        document.querySelector(

            'a[href*="linkedin"]'

        );



    const whatsapp =

        document.querySelector(

            'a[href*="wa.me"]'

        );





    if (github) {



        github.href =

            "https://github.com/Zunairakhan-cloud";



        github.target = "_blank";



    }





    if (linkedin) {



        linkedin.href =

            "https://www.linkedin.com/in/khanzunaira";



        linkedin.target = "_blank";



    }





    if (whatsapp) {



        whatsapp.href =

            "https://wa.me/923112486605";



        whatsapp.target = "_blank";



    }



}





updateSocialLinks();

/* =====================================================
   AUREVIA 2.0 — ADVANCED INTERACTIONS
   1) Compare Cars  2) Favourites  3) EMI Calculator
   ===================================================== */

const upgradedCars = {
  s1:{name:"Aurevia S1",type:"Executive Sedan",price:13750000,power:"250 HP",fuel:"Petrol",seats:"5 Seats",feature:"Quiet Cabin Comfort",featureText:"Aurevia S1 focuses on a calm premium cabin, making daily city driving and long journeys feel smooth and comfortable.",icon:"bi bi-soundwave",images:[
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2400&q=95"]},
  gt:{name:"Aurevia GT",type:"Performance Coupe",price:20450000,power:"410 HP",fuel:"Petrol",seats:"4 Seats",feature:"Performance Drive Mode",featureText:"A dedicated performance setup gives the GT a sharper driving character for people who want a more exciting drive.",icon:"bi bi-speedometer2",images:[
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2400&q=95"]},
  lx:{name:"Aurevia LX",type:"Luxury SUV",price:17250000,power:"335 HP",fuel:"Petrol",seats:"5 Seats",feature:"Flexible Family Space",featureText:"The LX combines a roomy cabin with practical SUV space, giving passengers more comfort without losing its premium feel.",icon:"bi bi-arrows-angle-expand",images:[
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2400&q=95"]},
  e1:{name:"Aurevia E1",type:"Electric Performance",price:15900000,power:"350 HP",fuel:"Electric",seats:"5 Seats",feature:"Fast-Charging EV System",featureText:"The E1 is designed around quiet electric performance and quick charging for a more modern daily driving experience.",icon:"bi bi-lightning-charge",images:[
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=2400&q=95",
    "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=2400&q=95"]}
};

let compareList=JSON.parse(localStorage.getItem('aureviaCompare')||'[]');
let favorites=JSON.parse(localStorage.getItem('aureviaFavorites')||'[]');

function money(n){return new Intl.NumberFormat('en-PK',{style:'currency',currency:'PKR',maximumFractionDigits:0}).format(n);}
function saveState(){localStorage.setItem('aureviaCompare',JSON.stringify(compareList));localStorage.setItem('aureviaFavorites',JSON.stringify(favorites));updateSmartCounts();}
function updateSmartCounts(){const c=document.getElementById('compareCount'),f=document.getElementById('favoriteCount');if(c)c.textContent=compareList.length;if(f)f.textContent=favorites.length;}

function addSmartButtons(){
  document.querySelectorAll('.car-card').forEach((card,i)=>{
    const ids=['s1','gt','lx','e1']; const id=ids[i]; if(!id)return;
    if(card.querySelector('.smart-card-actions'))return;
    const box=document.createElement('div');box.className='smart-card-actions';
    box.innerHTML=`<button type="button" class="mini-action" data-smart="compare"><i class="bi bi-columns-gap"></i> Compare</button><button type="button" class="mini-action" data-smart="fav"><i class="bi bi-heart"></i> Save</button>`;
    card.querySelector('.car-info')?.appendChild(box);
    box.querySelector('[data-smart="compare"]').onclick=()=>toggleCompare(id);
    box.querySelector('[data-smart="fav"]').onclick=()=>toggleFavorite(id);
  });
}
function toggleCompare(id){
  if(compareList.includes(id)) compareList=compareList.filter(x=>x!==id);
  else {if(compareList.length>=3){alert('You can compare up to 3 cars.');return;} compareList.push(id);}
  saveState();renderSmartPanel('compare');
}
function toggleFavorite(id){
  if(favorites.includes(id)) favorites=favorites.filter(x=>x!==id); else favorites.push(id);
  saveState();renderSmartPanel('favorites');
}
function panel(title,html){const p=document.getElementById('smartGaragePanel');if(!p)return;p.innerHTML=`<div class="smart-card"><h3>${title}</h3>${html}</div>`;p.classList.add('show');p.scrollIntoView({behavior:'smooth',block:'center'});}
function renderSmartPanel(mode){
  const p=document.getElementById('smartGaragePanel');if(!p)return;
  if(mode==='favorites'){
    const list=favorites.map(id=>upgradedCars[id]).filter(Boolean);
    panel('My Favourite Cars',list.length?`<div class="smart-grid">${list.map(c=>`<div class="smart-card"><h3>${c.name}</h3><p>${c.type}</p><div class="mini-price">${money(c.price)}</div><button onclick="openCar('${Object.keys(upgradedCars).find(k=>upgradedCars[k]===c)}')">View Details →</button></div>`).join('')}</div>`:'<p>No saved cars yet. Tap Save on any car to add it here.</p>');
  } else {
    const list=compareList.map(id=>upgradedCars[id]).filter(Boolean);
    if(!list.length){panel('Compare Cars','<p>Select two or three cars from the collection to compare their main specifications.</p>');return;}
    panel('Compare Cars',`<div class="compare-table"><table><tr><th>Specification</th>${list.map(c=>`<th>${c.name}</th>`).join('')}</tr><tr><td>Type</td>${list.map(c=>`<td>${c.type}</td>`).join('')}</tr><tr><td>Price</td>${list.map(c=>`<td>${money(c.price)}</td>`).join('')}</tr><tr><td>Power</td>${list.map(c=>`<td>${c.power}</td>`).join('')}</tr><tr><td>Powertrain</td>${list.map(c=>`<td>${c.fuel}</td>`).join('')}</tr><tr><td>Seats</td>${list.map(c=>`<td>${c.seats}</td>`).join('')}</tr><tr><td>Unique Feature</td>${list.map(c=>`<td>${c.feature}</td>`).join('')}</tr></table></div>`);
  }
}
function openEMI(){panel('EMI Calculator',`<p>Enter a car price, down payment, annual rate and loan period.</p><input class="smart-input" id="emiPrice" type="number" value="13750000" placeholder="Car price (PKR)"><input class="smart-input" id="emiDown" type="number" value="2750000" placeholder="Down payment (PKR)"><input class="smart-input" id="emiRate" type="number" value="12" step="0.1" placeholder="Annual interest %"><input class="smart-input" id="emiYears" type="number" value="5" min="1" max="10" placeholder="Years"><button class="main-btn" style="border:0;padding:12px 20px" onclick="calculateEMI()">Calculate Monthly EMI</button><div id="emiResult" class="emi-result">Your monthly estimate will appear here.</div>`);}
function calculateEMI(){const p=+document.getElementById('emiPrice').value||0,d=+document.getElementById('emiDown').value||0,r=(+document.getElementById('emiRate').value||0)/1200,n=(+document.getElementById('emiYears').value||1)*12,L=Math.max(p-d,0);const emi=r?L*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):L/n;document.getElementById('emiResult').innerHTML=`Estimated monthly EMI: <strong>${money(emi)}</strong><br><small>Loan amount: ${money(L)} · ${n} months</small>`;}

// Replace existing detail gallery with a labelled, car-specific gallery.
function createUpgradedGallery(id){
 const car=upgradedCars[id]; const img=document.getElementById('detailCarImage'); if(!car||!img)return;
 img.src=car.images[0];
 let g=document.getElementById('detailGallery');if(!g){g=document.createElement('div');g.id='detailGallery';g.className='detail-gallery';img.parentElement.appendChild(g)}
 const labels=['Front View','Back View','Engine / Mechanical Detail','Unique Feature'];
 g.innerHTML=car.images.map((src,i)=>`<button class="detail-gallery-thumb ${i===0?'active':''}" type="button" aria-label="${labels[i]}"><img src="${src}" alt="${car.name} ${labels[i]}"></button>`).join('');
 g.querySelectorAll('.detail-gallery-thumb').forEach((b,i)=>b.onclick=()=>{img.src=car.images[i];g.querySelectorAll('.detail-gallery-thumb').forEach(x=>x.classList.remove('active'));b.classList.add('active');});
 const f=document.getElementById('detailUniqueFeature');if(f)f.innerHTML=`<div class="detail-feature-icon"><i class="${car.icon}"></i></div><h3>${car.feature}</h3><p>${car.featureText}</p>`;
}

// Hook into the existing openCar without breaking the original function.
const originalOpenCar=window.openCar;
window.openCar=function(id){if(typeof originalOpenCar==='function')originalOpenCar(id);setTimeout(()=>createUpgradedGallery(id),30);};

function initAdvancedAurevia(){
 addSmartButtons();updateSmartCounts();
 document.getElementById('compareOpenBtn')?.addEventListener('click',()=>renderSmartPanel('compare'));
 document.getElementById('favoritesOpenBtn')?.addEventListener('click',()=>renderSmartPanel('favorites'));
 document.getElementById('emiOpenBtn')?.addEventListener('click',openEMI);
 // Make FAQ feel like a dropdown, not a plus accordion.
 document.querySelectorAll('.faq-question i').forEach(i=>{i.classList.remove('bi-plus');i.classList.add('bi-chevron-down');});
 // Smooth card image loading and consistent alt text.
 document.querySelectorAll('.car-card img').forEach(img=>img.loading='lazy');
}
window.addEventListener('load',()=>setTimeout(initAdvancedAurevia,80));
