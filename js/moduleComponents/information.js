export const informationRockets = async (country, description) => {
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "../../storage/img/icons/mech.svg");
    first__div.append(img);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = country;
    let small = document.createElement("small");
    small.textContent = description;
    last__div.append(h3, small);
    description__container.append(first__div, last__div);

    let main__aside__left = document.querySelector("#main__aside__left");
    main__aside__left.append(description__container)
}

export const informationLaunchCostRocket = async (cost__per__launch) => {
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "../../storage/img/icons/mech.svg");
    first__div.append(img);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "The estimated cost per rocket launch";
    let small = document.createElement("small");
    let money = new Intl.NumberFormat("cop").format(cost__per__launch)
    small.textContent = `$ ${money}`;
    last__div.append(h3, small);
    description__container.append(first__div, last__div);

    let main__aside__left = document.querySelector("#main__aside__left");
    main__aside__left.append(description__container)
}

export const informationFirstFlightRocket = async (first__flight) => {
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "../../storage/img/icons/mech.svg");
    first__div.append(img);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "The date of the first flight of the rocket";
    let small = document.createElement("small");
    small.textContent = first__flight;
    last__div.append(h3, small);
    description__container.append(first__div, last__div);

    let main__aside__left = document.querySelector("#main__aside__left");
    main__aside__left.append(description__container)
}

export const informationWebRocket = async (wikipedia) => {
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "../../storage/img/icons/mech.svg");
    first__div.append(img);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "Read more about the rocket";
    let a = document.createElement("a");
    a.setAttribute("href", wikipedia);
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia";
    last__div.append(h3, a);
    description__container.append(first__div, last__div);

    let main__aside__left = document.querySelector("#main__aside__left");
    main__aside__left.append(description__container)
}