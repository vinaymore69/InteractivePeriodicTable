const periodicElements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin",
    "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
    "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium",
    "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium",
    "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium",
    "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium",
    "Tennessine", "Oganesson"
];

const periodicElementInitials = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];
const periodicElementWeights = [
    "1.008 amu", "4.0026 amu", "6.94 amu", "9.0122 amu", "10.81 amu", "12.011 amu", 
    "14.007 amu", "15.999 amu", "18.998 amu", "20.180 amu", "22.990 amu", "24.305 amu", 
    "26.982 amu", "28.085 amu", "30.974 amu", "32.06 amu", "35.45 amu", "39.948 amu", 
    "39.098 amu", "40.078 amu", "44.956 amu", "47.867 amu", "50.942 amu", "51.996 amu", 
    "54.938 amu", "55.845 amu", "58.933 amu", "58.693 amu", "63.546 amu", "65.38 amu", 
    "69.723 amu", "72.63 amu", "74.922 amu", "78.971 amu", "79.904 amu", "83.798 amu", 
    "85.468 amu", "87.62 amu", "88.906 amu", "91.224 amu", "92.906 amu", "95.95 amu", 
    "98 amu", "101.07 amu", "102.91 amu", "106.42 amu", "107.87 amu", "112.41 amu", 
    "114.82 amu", "118.71 amu", "121.76 amu", "127.6 amu", "126.9 amu", "131.29 amu", 
    "132.91 amu", "137.33 amu", "138.91 amu", "140.12 amu", "140.91 amu", "144.24 amu", 
    "145 amu", "150.36 amu", "151.96 amu", "157.25 amu", "158.93 amu", "162.5 amu", 
    "164.93 amu", "167.26 amu", "168.93 amu", "173.05 amu", "174.97 amu", "178.49 amu", 
    "180.95 amu", "183.84 amu", "186.21 amu", "190.23 amu", "192.22 amu", "195.08 amu", 
    "196.97 amu", "200.59 amu", "204.38 amu", "207.2 amu", "208.98 amu", "209 amu", 
    "210 amu", "222 amu", "223 amu", "226 amu", "227 amu", "232.04 amu", "231.04 amu", 
    "238.03 amu", "237 amu", "244 amu", "243 amu", "247 amu", "247 amu", "251 amu", 
    "252 amu", "257 amu", "258 amu", "259 amu", "262 amu", "267 amu", "270 amu", 
    "271 amu", "270 amu", "277 amu", "276 amu", "281 amu", "282 amu", "285 amu", 
    "286 amu", "289 amu", "290 amu", "293 amu", "294 amu", "294 amu"
];


const electronConfigurations = [
    "1",                             // Hydrogen (1)
    "2",                             // Helium (2)
    "2-1",                         // Lithium (3)
    "2-2",                         // Beryllium (4)
    "2-3",                         // Boron (5)
    "2-4",                         // Carbon (6)
    "2-5",                         // Nitrogen (7)
    "2-6",                         // Oxygen (8)
    "2-7",                         // Fluorine (9)
    "2-8",                         // Neon (10)
    "2-8-1",                     // Sodium (11)
    "2-8-2",                     // Magnesium (12)
    "2-8-3",                     // Aluminium (13)
    "2-8-4",                     // Silicon (14)
    "2-8-5",                     // Phosphorus (15)
    "2-8-6",                     // Sulfur (16)
    "2-8-7",                     // Chlorine (17)
    "2-8-8",                     // Argon (18)
    "2-8-8-1",                 // Potassium (19)
    "2-8-8-2",                 // Calcium (20)
    "2-8-9-2",                 // Scandium (21)
    "2-8-10-2",                // Titanium (22)
    "2-8-11-2",                // Vanadium (23)
    "2-8-12-2",                // Chromium (24)
    "2-8-13-2",                // Manganese (25)
    "2-8-14-2",                // Iron (26)
    "2-8-15-2",                // Cobalt (27)
    "2-8-16-2",                // Nickel (28)
    "2-8-17-2",                // Copper (29)
    "2-8-18-2",                // Zinc (30)
    "2-8-18-3",                // Gallium (31)
    "2-8-18-4",                // Germanium (32)
    "2-8-18-5",                // Arsenic (33)
    "2-8-18-6",                // Selenium (34)
    "2-8-18-7",                // Bromine (35)
    "2-8-18-8",                // Krypton (36)
    "2-8-18-8-1",            // Rubidium (37)
    "2-8-18-8-2",            // Strontium (38)
    "2-8-18-9-2",            // Yttrium (39)
    "2-8-18-10-2",           // Zirconium (40)
    "2-8-18-11-2",           // Niobium (41)
    "2-8-18-12-2",           // Molybdenum (42)
    "2-8-18-13-2",           // Technetium (43)
    "2-8-18-14-2",           // Ruthenium (44)
    "2-8-18-15-2",           // Rhodium (45)
    "2-8-18-16-2",           // Palladium (46)
    "2-8-18-17-2",           // Silver (47)
    "2-8-18-18-2",           // Cadmium (48)
    "2-8-18-18-3",           // Indium (49)
    "2-8-18-18-4",           // Tin (50)
    "2-8-18-18-5",           // Antimony (51)
    "2-8-18-18-6",           // Tellurium (52)
    "2-8-18-18-7",           // Iodine (53)
    "2-8-18-18-8",           // Xenon (54)
    "2-8-18-18-8-1",       // Caesium (55)
    "2-8-18-18-8-2",       // Barium (56)
    "2-8-18-18-9-2",       // Lanthanum (57)
    "2-8-18-18-10-2",      // Cerium (58)
    "2-8-18-18-11-2",      // Praseodymium (59)
    "2-8-18-18-12-2",      // Neodymium (60)
    "2-8-18-18-13-2",      // Promethium (61)
    "2-8-18-18-14-2",      // Samarium (62)
    "2-8-18-18-15-2",      // Europium (63)
    "2-8-18-18-16-2",      // Gadolinium (64)
    "2-8-18-18-17-2",      // Terbium (65)
    "2-8-18-18-18-2",      // Dysprosium (66)
    "2-8-18-18-19-2",      // Holmium (67)
    "2-8-18-18-20-2",      // Erbium (68)
    "2-8-18-18-21-2",      // Thulium (69)
    "2-8-18-18-22-2",      // Ytterbium (70)
    "2-8-18-18-23-2",      // Lutetium (71)
    "2-8-18-18-24-2",      // Hafnium (72)
    "2-8-18-18-25-2",      // Tantalum (73)
    "2-8-18-18-26-2",      // Tungsten (74)
    "2-8-18-18-27-2",      // Rhenium (75)
    "2-8-18-18-28-2",      // Osmium (76)
    "2-8-18-18-29-2",      // Iridium (77)
    "2-8-18-18-30-2",      // Platinum (78)
    "2-8-18-18-31-2",      // Gold (79)
    "2-8-18-18-32-2",      // Mercury (80)
    "2-8-18-18-32-3",      // Thallium (81)
    "2-8-18-18-32-4",      // Lead (82)
    "2-8-18-18-32-5",      // Bismuth (83)
    "2-8-18-18-32-6",      // Polonium (84)
    "2-8-18-18-32-7",      // Astatine (85)
    "2-8-18-18-32-8",      // Radon (86)
    "2-8-18-32-18-8-1",  // Francium (87)
    "2-8-18-32-18-8-2",  // Radium (88)
    "2-8-18-32-18-9-2",  // Actinium (89)
    "2-8-18-32-18-10-2", // Thorium (90)
    "2-8-18-32-18-11-2", // Protactinium (91)
    "2-8-18-32-18-12-2", // Uranium (92)
    "2-8-18-32-18-13-2", // Neptunium (93)
    "2-8-18-32-18-14-2", // Plutonium (94)
    "2-8-18-32-18-15-2", // Americium (95)
    "2-8-18-32-18-16-2", // Curium (96)
    "2-8-18-32-18-17-2", // Berkelium (97)
    "2-8-18-32-18-18-2", // Californium (98)
    "2-8-18-32-18-19-2", // Einsteinium (99)
    "2-8-18-32-18-20-2", // Fermium (100)
    "2-8-18-32-18-21-2", // Mendelevium (101)
    "2-8-18-32-18-22-2", // Nobelium (102)
    "2-8-18-32-18-23-2", // Lawrencium (103)
    "2-8-18-32-18-24-2", // Rutherfordium (104)
    "2-8-18-32-18-25-2", // Dubnium (105)
    "2-8-18-32-18-26-2", // Seaborgium (106)
    "2-8-18-32-18-27-2", // Bohrium (107)
    "2-8-18-32-18-28-2", // Hassium (108)
    "2-8-18-32-18-29-2", // Meitnerium (109)
    "2-8-18-32-18-30-2", // Darmstadtium (110)
    "2-8-18-32-18-31-2", // Roentgenium (111)
    "2-8-18-32-18-32-2", // Copernicium (112)
    "2-8-18-32-18-32-3", // Nihonium (113)
    "2-8-18-32-18-32-4", // Flerovium (114)
    "2-8-18-32-18-32-5", // Moscovium (115)
    "2-8-18-32-18-32-6", // Livermorium (116)
    "2-8-18-32-18-32-7", // Tennessine (117)
    "2-8-18-32-18-32-8"  // Oganesson (118)
];


const valencyArray = [
    1, // Hydrogen
    0, // Helium
    1, // Lithium
    2, // Beryllium
    3, // Boron
    4, // Carbon
    3, // Nitrogen
    2, // Oxygen
    1, // Fluorine
    0, // Neon
    1, // Sodium
    2, // Magnesium
    3, // Aluminum
    4, // Silicon
    3, // Phosphorus
    2, // Sulfur
    1, // Chlorine
    0, // Argon
    1, // Potassium
    2, // Calcium
    3, // Scandium (common oxidation state is +3)
    4, // Titanium
    5, // Vanadium
    6, // Chromium (can have valency 2, 3, 6, but 6 is common)
    7, // Manganese (common oxidation state is +7)
    2, // Iron (common valency +2 and +3, we'll go with +2)
    3, // Cobalt
    2, // Nickel
    1, // Copper (common oxidation state is +1)
    2, // Zinc
    3, // Gallium
    4, // Germanium
    3, // Arsenic
    2, // Selenium
    1, // Bromine
    0, // Krypton
    1, // Rubidium
    2, // Strontium
    3, // Yttrium
    4, // Zirconium
    5, // Niobium
    6, // Molybdenum
    7, // Technetium
    8, // Ruthenium (multiple valencies, most common is +8)
    3, // Rhodium
    4, // Palladium
    1, // Silver
    2, // Cadmium
    3, // Indium
    4, // Tin
    3, // Antimony
    2, // Tellurium
    1, // Iodine
    0, // Xenon
    1, // Cesium
    2, // Barium
    3, // Lanthanum
    4, // Cerium (can vary, but we'll use +4)
    3, // Praseodymium
    3, // Neodymium
    3, // Promethium
    3, // Samarium
    3, // Europium
    3, // Gadolinium
    3, // Terbium
    3, // Dysprosium
    3, // Holmium
    3, // Erbium
    3, // Thulium
    2, // Ytterbium
    3, // Lutetium
    4, // Hafnium
    5, // Tantalum
    6, // Tungsten
    7, // Rhenium
    8, // Osmium
    3, // Iridium
    4, // Platinum
    1, // Gold (common oxidation state is +1)
    2, // Mercury
    3, // Thallium
    4, // Lead
    5, // Bismuth
    2, // Polonium
    1, // Astatine
    0, // Radon
    1, // Francium
    2, // Radium
    3, // Actinium
    4, // Thorium
    5, // Protactinium
    6, // Uranium
    5, // Neptunium
    6, // Plutonium
    7, // Americium
    6, // Curium
    3, // Berkelium
    3, // Californium
    3, // Einsteinium
    3, // Fermium
    3, // Mendelevium
    3, // Nobelium
    3, // Lawrencium
    4, // Rutherfordium
    5, // Dubnium
    6, // Seaborgium
    7, // Bohrium
    7, // Hassium
    7, // Meitnerium
    8, // Darmstadtium (assumed, similar to Platinum)
    8, // Roentgenium (assumed)
    8, // Copernicium (assumed)
    3, // Nihonium (assumed)
    4, // Flerovium (assumed)
    5, // Moscovium (assumed)
    6, // Livermorium (assumed)
    7, // Tennessine (assumed)
    8  // Oganesson (assumed)
];





const boxes = document.querySelectorAll('.box');

// Add event listeners to each box
boxes.forEach(box => {
    box.addEventListener('mouseover', function () {
        const elementId = parseInt(this.id) - 1; // Get the index (id starts from 1, arrays start from 0)

        // Update the content of the main element display
        document.getElementById('element-no').textContent = this.id;
        document.getElementById('element-initials').textContent = periodicElementInitials[elementId];
        document.getElementById('element-name').textContent = periodicElements[elementId];
        document.getElementById('element-weight').textContent = periodicElementWeights[elementId];
        document.getElementById('electrons').textContent= electronConfigurations[elementId];
        document.getElementById('valency-no').textContent= valencyArray[elementId];
    });
    
    
    
    
});

function addTiltAttributes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.setAttribute('data-tilt', '');
        box.setAttribute('data-tilt-max', '80');
        box.setAttribute('data-tilt-speed', '900');
        box.setAttribute('data-tilt-perspective', '1000');
    });
}

addTiltAttributes();

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 20,
    speed: 700,
    perspective: 900
});



var hoverBoxes = document.getElementsByClassName("box"); // Remove the dot

// Loop through each box and add the event listener
for (var i = 0; i < hoverBoxes.length; i++) {
    hoverBoxes[i].addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)"; // Use quotes around scale
    });

    hoverBoxes[i].addEventListener("mouseout", function() {
        this.style.transform = "scale(1)"; // Reset to original scale on mouse out
    });
}



const metalsDiv = document.querySelector('.metals');
const metalloidsDiv = document.querySelector('.metalloids');
const nonMetalsDiv = document.querySelector('.nonmetals');

// Select specific groups for Metals hover
const reactiveNonMetals = document.querySelector('.reactive-nonmetals');
const nobelGases = document.querySelector('.nobel-gases');

// Select specific groups for Non-Metals hover
const metalsGroups = document.querySelectorAll('.alkali-metals, .alkaline-earth-metals, .lanthanoids, .actinoids, .transition-metals, .post-transition-metals');

// Metals hover effect (affects metalloids, reactive-nonmetals, and nobel-gases)
metalsDiv.addEventListener('mouseenter', () => {
    metalloidsDiv.classList.add('transparent');
    reactiveNonMetals.classList.add('transparent');
    nobelGases.classList.add('transparent');
});

metalsDiv.addEventListener('mouseleave', () => {
    metalloidsDiv.classList.remove('transparent');
    reactiveNonMetals.classList.remove('transparent');
    nobelGases.classList.remove('transparent');
});

// Metalloids hover effect (only self-colored, all else transparent)
metalloidsDiv.addEventListener('mouseenter', () => {
    metalsDiv.classList.add('transparent');
    reactiveNonMetals.classList.add('transparent');
    nobelGases.classList.add('transparent');
    metalsGroups.forEach(group => group.classList.add('transparent'));
});

metalloidsDiv.addEventListener('mouseleave', () => {
    metalsDiv.classList.remove('transparent');
    reactiveNonMetals.classList.remove('transparent');
    nobelGases.classList.remove('transparent');
    metalsGroups.forEach(group => group.classList.remove('transparent'));
});

// Non-Metals hover effect (affects alkali-metals, alkaline-earth-metals, lanthanoids, actinoids, transition-metals, post-transition-metals, but not metalloids)
nonMetalsDiv.addEventListener('mouseenter', () => {
    metalsGroups.forEach(group => group.classList.add('transparent'));
    // Ensure metalloids are also transparent on hover
    metalloidsDiv.classList.add('transparent');
});

nonMetalsDiv.addEventListener('mouseleave', () => {
    metalsGroups.forEach(group => group.classList.remove('transparent'));
    // Make sure metalloids return to normal on mouse leave
    metalloidsDiv.classList.remove('transparent');
});






// Alkali metals
const alkaliMetals = [3, 11, 19, 37, 55, 87];


alkaliMetals.forEach(num => {
    const box = document.getElementById(num);
    if (box) {
        box.style.backgroundColor = "#9a630a"; // Set background color
    }
});


// Define the arrays for each category with their corresponding colors
const alkalineEarthMetals = [4, 12, 20, 38, 56, 88]; // Color: #b9b901
const lanthanides = [`57a`, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]; // Color: #543913
const actinides = [`89a`, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]; // Color: #7c1e5b
const transitionMetals = [
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    72, 73, 74, 75, 76, 77, 78, 79, 80,
    104, 105, 106, 107, 108,
]; // Color: #891809
const postTransitionMetals = [13, 31, 49, 50, 81, 82, 83]; // Color: royalblue
const metalloids = [5, 14, 32, 33, 51, 52, 84]; // Color: rgb(26, 161, 118)
const reactiveNon_Metals = [1, 6, 7, 8, 15, 16, 34, 9, 17, 35, 53, 85]; // Color: #17773e
const nobleGases = [2, 10, 18, 36, 54, 86]; // Color: #55187b




// Function to set background color based on category
function setElementColors(categoryArray, color) {
    categoryArray.forEach(num => {
        const box = document.getElementById(num);
        if (box) {
            box.style.backgroundColor = color; // Set the background color
        }
    });
}

// Apply colors for each category

setElementColors(alkalineEarthMetals, "#CC7178");
setElementColors(lanthanides, "#543913");
setElementColors(actinides, "#6D2E46");
setElementColors(transitionMetals, "crimson");
setElementColors(postTransitionMetals, "royalblue");
setElementColors(metalloids, "rgb(26, 161, 118)");
setElementColors(reactiveNon_Metals, "#17773e");
setElementColors(nobleGases, "#55187b");



// Store original colors
const originalColors = {};

// Function to change background color of all boxes except the specified group
function changeOtherBoxesColor(groupArray, isHovering) {
    const boxes = document.querySelectorAll('.box'); // Select all boxes
    boxes.forEach(box => {
        const id = parseInt(box.id); // Convert ID to number
        if (!groupArray.includes(id)) { // Check if ID is not in the current group
            if (isHovering) {
                // Store original color if hovering
                originalColors[id] = box.style.backgroundColor || ''; // Save current color
                box.style.backgroundColor = 'transparent'; // Set to transparent on hover
            } else {
                // Revert to original color
                box.style.backgroundColor = originalColors[id] || ''; // Reset to original color
            }
        }
    });
}

// Add event listeners for each group of elements
document.querySelector('.alkali-metals').addEventListener('mouseover', () => changeOtherBoxesColor(alkaliMetals, true));
document.querySelector('.alkali-metals').addEventListener('mouseout', () => changeOtherBoxesColor(alkaliMetals, false));

document.querySelector('.alkaline-earth-metals').addEventListener('mouseover', () => changeOtherBoxesColor(alkalineEarthMetals, true));
document.querySelector('.alkaline-earth-metals').addEventListener('mouseout', () => changeOtherBoxesColor(alkalineEarthMetals, false));

document.querySelector('.lanthanoids').addEventListener('mouseover', () => changeOtherBoxesColor(lanthanides, true));
document.querySelector('.lanthanoids').addEventListener('mouseout', () => changeOtherBoxesColor(lanthanides, false));

document.querySelector('.actinoids').addEventListener('mouseover', () => changeOtherBoxesColor(actinides, true));
document.querySelector('.actinoids').addEventListener('mouseout', () => changeOtherBoxesColor(actinides, false));

document.querySelector('.transition-metals').addEventListener('mouseover', () => changeOtherBoxesColor(transitionMetals, true));
document.querySelector('.transition-metals').addEventListener('mouseout', () => changeOtherBoxesColor(transitionMetals, false));

document.querySelector('.post-transition-metals').addEventListener('mouseover', () => changeOtherBoxesColor(postTransitionMetals, true));
document.querySelector('.post-transition-metals').addEventListener('mouseout', () => changeOtherBoxesColor(postTransitionMetals, false));

document.querySelector('.metalloids').addEventListener('mouseover', () => changeOtherBoxesColor(metalloids, true));
document.querySelector('.metalloids').addEventListener('mouseout', () => changeOtherBoxesColor(metalloids, false));

document.querySelector('.reactive-nonmetals').addEventListener('mouseover', () => changeOtherBoxesColor(reactiveNon_Metals, true));
document.querySelector('.reactive-nonmetals').addEventListener('mouseout', () => changeOtherBoxesColor(reactiveNon_Metals, false));

document.querySelector('.nobel-gases').addEventListener('mouseover', () => changeOtherBoxesColor(nobleGases, true));
document.querySelector('.nobel-gases').addEventListener('mouseout', () => changeOtherBoxesColor(nobleGases, false));

// Event listeners for Metals div
document.querySelector('.metals').addEventListener('mouseover', () => {
    changeBoxesColor(metalloids, true); // Change metalloids to transparent
    changeBoxesColor(reactiveNon_Metals, true); // Change reactive non-metals to transparent
    changeBoxesColor(nobleGases, true); // Change noble gases to transparent
});

document.querySelector('.metals').addEventListener('mouseout', () => {
    changeBoxesColor(metalloids, false); // Revert metalloids
    changeBoxesColor(reactiveNon_Metals, false); // Revert reactive non-metals
    changeBoxesColor(nobleGases, false); // Revert noble gases
});

document.querySelector('.nonmetals').addEventListener('mouseover', () => {
    changeBoxesColor(alkaliMetals, true); // Change metalloids to transparent
    changeBoxesColor(alkalineEarthMetals, true); // Change reactive non-metals to transparent
    changeBoxesColor(lanthanides, true); // Change noble gases to transparent
    changeBoxesColor(actinides, true); // Change noble gases to transparent
    changeBoxesColor(transitionMetals, true); // Change noble gases to transparent
    changeBoxesColor(postTransitionMetals, true); // Change noble gases to transparent
    changeBoxesColor(metalloids, true); // Change noble gases to transparent
});

document.querySelector('.nonmetals').addEventListener('mouseout', () => {
    changeBoxesColor(alkaliMetals, false); // Change metalloids to transparent
    changeBoxesColor(alkalineEarthMetals, false); // Change reactive non-metals to transparent
    changeBoxesColor(lanthanides, false); // Change noble gases to transparent
    changeBoxesColor(actinides, false); // Change noble gases to transparent
    changeBoxesColor(transitionMetals, false); // Change noble gases to transparent
    changeBoxesColor(postTransitionMetals, false); // Change noble gases to transparent
    changeBoxesColor(metalloids, false); // Change noble gases to transparent
});

// Function to change background color of specified IDs
function changeBoxesColor(ids, transparent) {
    ids.forEach(id => {
        const box = document.getElementById(id);
        if (box) {
            box.style.backgroundColor = transparent ? 'transparent' : originalColors[id] || ''; // Reset to original color
        }
    });
}



// Select all div elements by class names with new variable names
const alkaliDiv = document.querySelector('.alkali-metals');
const alkalineEarthDiv = document.querySelector('.alkaline-earth-metals');
const lanthanoidsDiv = document.querySelector('.lanthanoids');
const actinoidsDiv = document.querySelector('.actinoids');
const transitionMetalsDiv = document.querySelector('.transition-metals');
const postTransitionDiv = document.querySelector('.post-transition-metals');
const reactiveNonmetalsDiv = document.querySelector('.reactive-nonmetals');
const nobleGasesDiv = document.querySelector('.nobel-gases');
const metalloids_Div = document.querySelector('.metalloids');


// Create an array of all the divs using new variable names
const allElementDivs = [
    alkaliDiv,
    alkalineEarthDiv,
    lanthanoidsDiv,
    actinoidsDiv,
    transitionMetalsDiv,
    postTransitionDiv,
    reactiveNonmetalsDiv,
    nobleGasesDiv,
    metalloids_Div
];

// Add mouseover and mouseout event listeners to each div
allElementDivs.forEach(elementDiv => {
    elementDiv.addEventListener('mouseover', () => {
        allElementDivs.forEach(otherElementDiv => {
            if (otherElementDiv !== elementDiv) {
                otherElementDiv.classList.add('transparent'); // Add transparent class to others
            }
        });
    });

    elementDiv.addEventListener('mouseout', () => {
        allElementDivs.forEach(otherElementDiv => {
            otherElementDiv.classList.remove('transparent'); // Remove transparent class
        });
    });
});





// intro 


document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("heading");

    function wrapCharactersWithSpans(element) {
        element.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                const wrappedText = text.replace(/./g, "<span>$&</span>");
                const spanWrapper = document.createElement('span');
                spanWrapper.innerHTML = wrappedText;
                node.replaceWith(spanWrapper);
            } else {
                wrapCharactersWithSpans(node);
            }
        });
    }

    wrapCharactersWithSpans(heading);
    const chars = heading.querySelectorAll("span span");

    gsap.from(chars, {
        opacity: 0,
        y: 50,
        stagger: 0.10,
        ease: "power2.out",
        duration: 3
    });
});



// Set the initial zoom to 100%
document.body.style.zoom = "100%";

// Prevent zooming using Ctrl + scroll wheel
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent zooming using Ctrl + keys (+, -, 0)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});



// const sBlockElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// const pBlockElements = [13, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const fBlockElements = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116];
// const dBlockElements = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86];
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("toggleColor1").addEventListener("change", function() {
//         const sElements = document.getElementsByClassName("s-block");
//         const group1Elements = document.getElementsByClassName("group1");
//         const group2Elements = document.getElementsByClassName("group2");
        
//         const newColor = this.checked ? "#515250" : ""; // Change to royalblue if checked, else reset

//         for (let i = 0; i < sElements.length; i++) {
//             sElements[i].style.backgroundColor = newColor;
//         }

//         for (let i = 0; i < group1Elements.length; i++) {
//             group1Elements[i].style.backgroundColor = newColor;
//         }

//         for (let i = 0; i < group2Elements.length; i++) {
//             group2Elements[i].style.backgroundColor = newColor;
//         }
//     }); 
    
    
    
//     document.getElementById("toggleColor2").addEventListener("change", function() {
//         const sElements = document.getElementsByClassName("d-block");
//         const group1Elements = document.getElementsByClassName("group3");
//         const group2Elements = document.getElementsByClassName("group4");
//         const group3Elements = document.getElementsByClassName("group5");
//         const group4Elements = document.getElementsByClassName("group6");
//         const group5Elements = document.getElementsByClassName("group7");
//         const group6Elements = document.getElementsByClassName("group8");
//         const group7Elements = document.getElementsByClassName("group9");
//         const group8Elements = document.getElementsByClassName("group10");
//         const group9Elements = document.getElementsByClassName("group11");
//         const group10Elements = document.getElementsByClassName("group12");
        
//         const newColor = this.checked ? "#515250" : ""; // Change to royalblue if checked, else reset

//         for (let i = 0; i < sElements.length; i++) {
//             sElements[i].style.backgroundColor = newColor;
//         }

//         for (let i = 0; i < group1Elements.length; i++) {
//             group1Elements[i].style.backgroundColor = newColor;
//         }

//         for (let i = 0; i < group2Elements.length; i++) {
//             group2Elements[i].style.backgroundColor = newColor;
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle color changes
    function setBackgroundColor(toggleId, classes) {
        document.getElementById(toggleId).addEventListener("change", function() {
            const newColor = this.checked ? "#515250" : ""; // Change color if checked, else reset
            console.log(`Toggle ${toggleId} changed. New color: ${newColor}`);

            classes.forEach(className => {
                const elements = document.getElementsByClassName(className);
                console.log(`Elements found for ${className}:`, elements.length); // Debugging statement
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.backgroundColor = newColor;
                }
            });
        });
    }

    // Set colors for toggleColor1
    setBackgroundColor("toggleColor1", ["s-block", "group1", "group2"]);

    // Set colors for toggleColor2
    setBackgroundColor("toggleColor2", [
        "d-block", 
        "group3", 
        "group4", 
        "group5", 
        "group6", 
        "group7", 
        "group8", 
        "group9", 
        "group10", 
        "group11", 
        "group12"
    ]);
    setBackgroundColor("toggleColor3", [
        "p-block", 
        "group13", 
        "group14", 
        "group15", 
        "group16", 
        "group17", 
        "group18", 
        
    ]);
    setBackgroundColor("toggleColor4", [
        "f-block", 
        "group19", 
        "group20"
        
    ]);
});



// Function to speak the given text
function speak(text) {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        console.log('Your browser does not support text-to-speech.');
    }
}

// Add event listeners to each `.box` div
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Get the `id` attribute and convert it to an integer
        let id = parseInt(box.id);
        
        // Fetch the element from the periodicElements array using `id - 1`
        let element = periodicElements[id - 1];

        // Speak the element name
        speak(element);
    });
});
