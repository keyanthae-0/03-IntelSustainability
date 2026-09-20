/* =========================
   RTL / LANGUAGE DETECTION
========================= */

const bootstrapStylesheet = document.getElementById("bootstrap-css");

const bootstrapLTR =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

const bootstrapRTL =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";


const rtlLanguages = [
    "ar", // Arabic
    "fa", // Persian
    "he", // Hebrew
    "ur", // Urdu
    "ps", // Pashto
    "sd", // Sindhi
    "yi", // Yiddish
    "dv", // Divehi
    "ku"  // Kurdish
];


function updatePageDirection() {

    const currentLanguage =
        document.documentElement.lang
            .toLowerCase()
            .split("-")[0];


    const isRTL =
        rtlLanguages.includes(currentLanguage);


    if (isRTL) {

        document.documentElement.setAttribute("dir", "rtl");

        bootstrapStylesheet.href = bootstrapRTL;

    } else {

        document.documentElement.setAttribute("dir", "ltr");

        bootstrapStylesheet.href = bootstrapLTR;
    }
}


/* Run when page first loads */
updatePageDirection();


/* Watch for language changes */
const observer = new MutationObserver(updatePageDirection);

observer.observe(
    document.documentElement,
    {
        attributes: true,
        attributeFilter: ["lang"]
    }
);


/* =========================
   NEWSLETTER FORM
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const formStatus =
    document.getElementById("formStatus");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!newsletterForm.checkValidity()) {

            event.stopPropagation();

            newsletterForm.classList.add("was-validated");

            formStatus.textContent = "";

            return;
        }


        newsletterForm.classList.add("was-validated");


        formStatus.textContent =
            "Thanks! You successfully subscribed to sustainability updates.";


        newsletterForm.reset();

        newsletterForm.classList.remove("was-validated");
    }
);