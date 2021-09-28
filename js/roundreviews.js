
const person = [
    {
        id: 9,
        img: "img/man-with-headphones.png",
        name: "Dean Williams",
        description: "I often listen to music, and for me, first of all, it is important that the headphones sit comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price. The customer servise also works great, and these guys helped me with the choice.",
        date: "December 15,2020"
    },
    {
        id: 8,
        img: "img/girl-with-headphones.png",
        name: "Jessica Gordons",
        description: "I often listen to music, and for me, first of all, it is important that the headphones sit comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price. The customer servise also works great, and these guys helped me with the choice.",
        date: "March 28,2021"
    },
    {
        id: 7,
        img: "img/smiling-man.png",
        name: "Dean Williams",
        description: "I often listen to music, and for me, first of all, it is important that the headphones sit comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price. The customer servise also works great, and these guys helped me with the choice.",
        date: "May 29,2021"
    }
]
function renderPerson(person) {
    const person = document.querySelector('.person');
    for (const reviews of person) {
        person.innerHTML +=
        <div class="person1">
                <img src="${person.img}" id="person1" alt="man-with-headphones">
            </div>
            <div class="name1">
                <h3>"${person.name}"</h3>
            </div>
            <div class="text1">
                <p>"${person.description}"</p>
            </div>
            <div class="date1">
                <h4>"${person.date}"</h4>
            </div>
    }
}
