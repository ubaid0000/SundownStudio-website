const imgFrame = document.querySelector(".img-frame");
const elemContainer = document.querySelector(".elem-container");
const featureElem = document.querySelectorAll(".feature-elem");
const firstH1 = document.querySelector(".h1-1");
const firstH2 = document.querySelector(".h1-2");
const firstH3 = document.querySelector(".h1-3");
const page4Img = document.querySelector(".page4-img");
const para = document.querySelector(".para");
const menuBtn = document.querySelector("nav h2");
const fullScr = document.querySelector(".full-scr");
const navImg = document.querySelector("nav img");
const loader = document.querySelector(".loader");


const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});


featureElem.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        let image = elem.getAttribute("data-img");
        imgFrame.style.backgroundImage = `url(${image})`
    })
})

elemContainer.addEventListener("mouseenter", () => {
    imgFrame.style.display = "block"
})

elemContainer.addEventListener("mouseleave", () => {
    imgFrame.style.display = "none"
})

function colorReset() {
    document.querySelectorAll(".h1").forEach((headings) => {
        headings.style.color = "#504A45";
        headings.style.borderLeft = "4px solid #504A45"
    })
}

firstH1.addEventListener("click", () => {
    colorReset();
    firstH1.style.color = "white";
    firstH1.style.borderLeft = "4px solid orangered"
    page4Img.src = "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio numquam obcaecati eos, voluptatem corrupti sequi porro quas sed mollitia harum tempora cum, modi, libero adipisci suscipit temporibus? Hic rerum consequatur eum ipsum eaque, in eos deserunt voluptatem ullam ratione inventore ipsa, id quisquam modi."
})

firstH2.addEventListener("click", () => {
    colorReset();
    firstH2.style.color = "white";
    firstH2.style.borderLeft = "4px solid orangered"
    page4Img.src = "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut dignissimos dicta doloremque labore incidunt. Asperiores, facere. Tempore reiciendis est suscipit quos ea nulla doloribus repudiandae veritatis voluptatem vel ut, minima nobis provident? Magni aut sint sequi eaque obcaecati placeat neque perferendis iure, atque numquam."
})

firstH3.addEventListener("click", () => {
    colorReset();
    firstH3.style.color = "white";
    firstH3.style.borderLeft = "4px solid orangered"
    page4Img.src = "https://images.unsplash.com/photo-1435164205788-305635a36ec2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    para.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quis quos saepe pariatur odio ipsum, velit est ut autem incidunt laborum maiores, totam quod! Ad libero explicabo pariatur optio illum repellat adipisci numquam? Illo sequi veritatis quis porro laborum quaerat perspiciatis eligendi provident perferendis voluptatum, quae esse repellat!"

})
let flag = 0;

menuBtn.addEventListener("click", () => {
    if (flag == 0) {
        fullScr.style.top = 0;
        navImg.style.opacity = 0;
        flag = 1;

    }else{
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
    }
})

setTimeout(()=>{
    loader.style.top = "-100%";
}, 3500);