// Motivational Quotes
const quotes = [
    "Believe in yourself. You can achieve anything!",
    "Success begins with a single step.",
    "Your only limit is you.",
    "Stay positive. Better days are coming.",
    "Dream big. Work hard. Stay focused.",
    "Push yourself — no one else will.",
    "Small progress is still progress.",
    "Every day is a new opportunity.",
    "You are stronger than you think.",
    "Never give up on your dreams!"
];

// Image URLs
const images = [
    "https://cdn.pixabay.com/photo/2016/11/29/12/54/sunrise-1867273_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/07/00/47/milky-way-2602735_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/21/12/16/beach-1846006_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountains-2031539_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/27/14/56/sunset-2177327_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/01/17/21/15/landscape-3938813_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/16/14/43/road-5837316_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/13/08/01/lake-4762288_1280.jpg"
];


document.getElementById("showBtn").onclick = function () {
    document.getElementById("popup").style.display = "block";

    // random quote
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").innerText = randomQuote;

    // random image
    let randomImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("motImg").src = randomImg;
};

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("popup").style.display = "none";
};

// close popup when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
};
