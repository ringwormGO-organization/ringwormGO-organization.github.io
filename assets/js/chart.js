function CalculatePercentage(num) {
    const number_of_repos = 33;

    return (num / number_of_repos) * 100;
}

var languages = new Map();

languages.set("C", [CalculatePercentage(5), "#555555"]);
languages.set("C#", [CalculatePercentage(2), "#178600"]);
languages.set("C++", [CalculatePercentage(10), "#f34b7d"]);
languages.set("CMake", [CalculatePercentage(1), "#DA3434"]);
languages.set("HTML", [CalculatePercentage(2), "#E34C26"]);
languages.set("Inno Setup", [CalculatePercentage(1), "#264B99"]);
languages.set("Javascript", [CalculatePercentage(1), "#F1E05A"]);
languages.set("Lua", [CalculatePercentage(2), "#000080"]);
languages.set("PHP", [CalculatePercentage(1), "#4F5D95"]);
languages.set("Python", [CalculatePercentage(4), "#3572a5"]);
languages.set("Rust", [CalculatePercentage(1), "#DEA584"]);
languages.set("VB.NET", [CalculatePercentage(1), "#945db7"]);
languages.set("Without language", [CalculatePercentage(2), "gray"]);

const mapArray = Array.from(languages);
mapArray.sort((a, b) => b[1][0] - a[1][0]);
const sortedMap = new Map(mapArray);

const firstStrings = Array.from(sortedMap.entries()).map(
    ([key, _value]) => key
);
const numbers = Array.from(sortedMap.entries()).map(
    ([_key, value]) => value[0]
);
const secondStrings = Array.from(sortedMap.entries()).map(
    ([_key, value]) => value[1]
);

let numbers_two = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    numbers_two.push((Math.round(element * 100) / 100).toString() + "%");
}

/*
 * Thanks for ChatGPT for this part
 * Get a reference to the canvas element
 */
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

/*
 * Thanks for ChatGPT for this part
 * Create a new pie chart using Chart.js
 */
const chart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: firstStrings,
        datasets: [
            {
                data: numbers,
                backgroundColor: secondStrings,
            },
        ],
    },
    options: {
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return (
                        data.labels[tooltipItems.index] +
                        " : " +
                        (
                            Math.round(
                                data.datasets[tooltipItems.datasetIndex].data[
                                tooltipItems.index
                                ] * 100
                            ) / 100
                        ).toString() +
                        " %"
                    );
                },
            },
        },
    },
});
