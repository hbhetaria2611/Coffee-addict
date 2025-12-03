// Coffee Recipe Database
const coffeeRecipes = [
    {
        name: "Classic Espresso",
        description: "Pure, bold espresso shot - the foundation of all great coffee drinks",
        ingredients: [],
        instructions: [
            "Grind 18-20g of fresh coffee beans",
            "Tamp evenly with proper pressure",
            "Extract for 25-30 seconds",
            "Aim for 36-40ml of espresso"
        ]
    },
    {
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and milk foam for a balanced classic",
        ingredients: ["whole-milk"],
        instructions: [
            "Pull a double shot of espresso into a cup",
            "Steam milk to 150°F creating microfoam",
            "Pour equal parts steamed milk and foam over espresso",
            "Dust with cocoa powder if desired"
        ]
    },
    {
        name: "Latte",
        description: "Smooth and creamy with more milk than a cappuccino",
        ingredients: ["whole-milk"],
        instructions: [
            "Pull a double shot of espresso",
            "Steam milk to create silky microfoam",
            "Pour steamed milk over espresso (1:3 ratio)",
            "Top with a thin layer of foam"
        ]
    },
    {
        name: "Flat White",
        description: "Velvety microfoam with a strong espresso flavor",
        ingredients: ["whole-milk"],
        instructions: [
            "Pull a double ristretto shot",
            "Steam milk to create velvety microfoam (no large bubbles)",
            "Pour milk with a thin foam layer over espresso",
            "Perfect for latte art"
        ]
    },
    {
        name: "Macchiato",
        description: "Espresso 'marked' with a dollop of foamed milk",
        ingredients: ["whole-milk"],
        instructions: [
            "Pull a single or double espresso shot",
            "Steam a small amount of milk",
            "Add just a dollop of foam on top",
            "Serve immediately"
        ]
    },
    {
        name: "Vanilla Latte",
        description: "Classic latte sweetened with vanilla syrup",
        ingredients: ["whole-milk", "vanilla-syrup"],
        instructions: [
            "Add 1-2 pumps of vanilla syrup to cup",
            "Pull double espresso shot over syrup",
            "Steam milk to create microfoam",
            "Pour steamed milk over espresso and syrup",
            "Stir gently to combine"
        ]
    },
    {
        name: "Caramel Macchiato",
        description: "Sweet caramel and vanilla topped with espresso marks",
        ingredients: ["whole-milk", "vanilla-syrup", "caramel-sauce"],
        instructions: [
            "Add vanilla syrup to cup",
            "Steam milk and pour over syrup",
            "Pour espresso shots on top",
            "Drizzle with caramel sauce",
            "Do not stir to maintain layers"
        ]
    },
    {
        name: "Mocha",
        description: "Coffee meets chocolate in this indulgent drink",
        ingredients: ["whole-milk", "chocolate-syrup"],
        instructions: [
            "Add 2 pumps chocolate syrup to cup",
            "Pull double espresso shot",
            "Stir espresso with chocolate syrup",
            "Steam milk and pour over chocolate espresso",
            "Top with whipped cream if available"
        ]
    },
    {
        name: "White Mocha",
        description: "Creamy white chocolate mocha for a sweeter treat",
        ingredients: ["whole-milk", "white-chocolate-syrup"],
        instructions: [
            "Add white chocolate syrup to cup",
            "Pull double espresso and mix with syrup",
            "Steam milk to create microfoam",
            "Pour steamed milk over espresso mixture",
            "Top with whipped cream"
        ]
    },
    {
        name: "Hazelnut Latte",
        description: "Nutty and aromatic latte with hazelnut flavor",
        ingredients: ["whole-milk", "hazelnut-syrup"],
        instructions: [
            "Add hazelnut syrup to cup",
            "Pull double espresso shot",
            "Steam milk to create microfoam",
            "Pour milk over espresso and syrup",
            "Stir gently"
        ]
    },
    {
        name: "Iced Latte",
        description: "Refreshing cold version of the classic latte",
        ingredients: ["whole-milk", "ice"],
        instructions: [
            "Fill glass with ice",
            "Pull double espresso shot",
            "Pour cold milk over ice",
            "Add espresso shots",
            "Stir gently"
        ]
    },
    {
        name: "Iced Vanilla Latte",
        description: "Cool, sweet, and caffeinated perfection",
        ingredients: ["whole-milk", "vanilla-syrup", "ice"],
        instructions: [
            "Add vanilla syrup to glass",
            "Fill with ice",
            "Pour cold milk over ice",
            "Pull espresso and pour over milk",
            "Stir to combine"
        ]
    },
    {
        name: "Iced Caramel Macchiato",
        description: "Iced version of the popular caramel macchiato",
        ingredients: ["whole-milk", "vanilla-syrup", "caramel-sauce", "ice"],
        instructions: [
            "Add vanilla syrup to glass",
            "Fill with ice and add cold milk",
            "Pour espresso shots over milk",
            "Drizzle caramel sauce on top",
            "Serve with straw"
        ]
    },
    {
        name: "Cortado",
        description: "Equal parts espresso and steamed milk, perfectly balanced",
        ingredients: ["whole-milk"],
        instructions: [
            "Pull double espresso shot",
            "Steam equal amount of milk (no foam)",
            "Pour steamed milk over espresso",
            "Serve in small glass"
        ]
    },
    {
        name: "Affogato",
        description: "Espresso poured over ice cream - dessert and coffee in one!",
        ingredients: ["vanilla-extract"],
        instructions: [
            "Place scoop of vanilla ice cream in cup",
            "Pull hot double espresso shot",
            "Pour espresso over ice cream",
            "Serve immediately with spoon"
        ]
    },
    {
        name: "Americano",
        description: "Espresso diluted with hot water for a lighter drink",
        ingredients: [],
        instructions: [
            "Pull double espresso shot",
            "Add hot water (1:2 ratio espresso to water)",
            "Adjust strength to preference",
            "Serve hot"
        ]
    },
    {
        name: "Iced Americano",
        description: "Refreshing cold espresso with water",
        ingredients: ["ice"],
        instructions: [
            "Fill glass with ice",
            "Pull double espresso shot",
            "Add cold water over ice",
            "Stir gently"
        ]
    },
    {
        name: "Con Panna",
        description: "Espresso topped with whipped cream",
        ingredients: ["whipped-cream"],
        instructions: [
            "Pull double espresso shot",
            "Top generously with whipped cream",
            "Serve immediately",
            "Drink through the cream"
        ]
    },
    {
        name: "Breve",
        description: "Latte made with half & half instead of milk for extra creaminess",
        ingredients: ["half-and-half"],
        instructions: [
            "Pull double espresso shot",
            "Steam half & half to create rich foam",
            "Pour over espresso",
            "Enjoy the extra creamy texture"
        ]
    },
    {
        name: "Vietnamese Iced Coffee",
        description: "Strong espresso with sweetened condensed milk over ice",
        ingredients: ["condensed-milk", "ice"],
        instructions: [
            "Add 2-3 tablespoons condensed milk to glass",
            "Pull double espresso shot over condensed milk",
            "Stir to combine",
            "Add ice and serve"
        ]
    },
    {
        name: "Pumpkin Spice Latte",
        description: "Fall favorite with warm pumpkin spices",
        ingredients: ["whole-milk", "pumpkin-spice-syrup", "cinnamon"],
        instructions: [
            "Add pumpkin spice syrup to cup",
            "Pull double espresso shot",
            "Steam milk with a pinch of cinnamon",
            "Pour milk over espresso and syrup",
            "Top with whipped cream and cinnamon"
        ]
    },
    {
        name: "Cinnamon Latte",
        description: "Warming cinnamon flavor perfect for cozy moments",
        ingredients: ["whole-milk", "cinnamon-syrup", "cinnamon"],
        instructions: [
            "Add cinnamon syrup to cup",
            "Pull double espresso shot",
            "Steam milk to create microfoam",
            "Pour over espresso",
            "Dust with ground cinnamon"
        ]
    },
    {
        name: "Honey Latte",
        description: "Naturally sweetened with honey",
        ingredients: ["whole-milk", "honey"],
        instructions: [
            "Add 1-2 teaspoons honey to cup",
            "Pull double espresso shot over honey",
            "Stir to dissolve honey",
            "Steam milk and pour over espresso",
            "Stir gently"
        ]
    },
    {
        name: "Oat Milk Latte",
        description: "Creamy dairy-free latte with oat milk",
        ingredients: ["oat-milk"],
        instructions: [
            "Pull double espresso shot",
            "Steam oat milk (foams beautifully)",
            "Pour over espresso",
            "Perfect for latte art"
        ]
    },
    {
        name: "Almond Milk Latte",
        description: "Light and nutty dairy-free alternative",
        ingredients: ["almond-milk"],
        instructions: [
            "Pull double espresso shot",
            "Steam almond milk carefully (lower protein content)",
            "Pour over espresso",
            "Enjoy the subtle nutty flavor"
        ]
    },
    {
        name: "Iced Mocha",
        description: "Cold chocolatey coffee drink",
        ingredients: ["whole-milk", "chocolate-syrup", "ice"],
        instructions: [
            "Add chocolate syrup to glass",
            "Add cold milk and stir",
            "Fill glass with ice",
            "Pull espresso and pour over ice",
            "Top with whipped cream if desired"
        ]
    },
    {
        name: "Cinnamon Dolce Latte",
        description: "Sweet cinnamon with a sugary finish",
        ingredients: ["whole-milk", "cinnamon-syrup", "sugar"],
        instructions: [
            "Add cinnamon syrup to cup",
            "Pull double espresso shot",
            "Steam milk to create microfoam",
            "Pour over espresso",
            "Top with cinnamon sugar mixture"
        ]
    },
    {
        name: "Chocolate Chip Frappé",
        description: "Blended iced coffee with chocolate chips",
        ingredients: ["whole-milk", "chocolate-syrup", "ice", "chocolate-chips", "whipped-cream"],
        instructions: [
            "Blend double espresso with milk, ice, and chocolate syrup",
            "Add chocolate chips and pulse",
            "Pour into glass",
            "Top with whipped cream and more chocolate chips"
        ]
    },
    {
        name: "Caramel Frappé",
        description: "Frozen blended caramel coffee drink",
        ingredients: ["whole-milk", "caramel-syrup", "ice", "whipped-cream"],
        instructions: [
            "Blend double espresso with milk, ice, and caramel syrup",
            "Pour into glass",
            "Top with whipped cream",
            "Drizzle with caramel sauce"
        ]
    },
    {
        name: "Nutella Latte",
        description: "Chocolate hazelnut heaven in a cup",
        ingredients: ["whole-milk", "chocolate-syrup", "hazelnut-syrup"],
        instructions: [
            "Add chocolate and hazelnut syrups to cup",
            "Pull double espresso shot",
            "Steam milk to create microfoam",
            "Pour over espresso and syrups",
            "Stir to combine flavors"
        ]
    },
    {
        name: "Brown Sugar Cinnamon Latte",
        description: "Trendy sweet and spicy latte",
        ingredients: ["whole-milk", "brown-sugar", "cinnamon"],
        instructions: [
            "Mix brown sugar with cinnamon in cup",
            "Add a splash of hot water to dissolve",
            "Pull double espresso shot",
            "Steam milk to create microfoam",
            "Pour over brown sugar mixture and stir"
        ]
    },
    {
        name: "Ristretto",
        description: "Shorter, sweeter espresso shot with less caffeine",
        ingredients: [],
        instructions: [
            "Use same amount of coffee as espresso",
            "Extract for only 15-20 seconds",
            "Aim for 20-25ml output",
            "Enjoy the concentrated sweetness"
        ]
    },
    {
        name: "Lungo",
        description: "Longer espresso extraction for a larger, milder shot",
        ingredients: [],
        instructions: [
            "Use same amount of coffee as espresso",
            "Extract for 35-45 seconds",
            "Aim for 50-60ml output",
            "More bitter than regular espresso"
        ]
    },
    {
        name: "Shaken Espresso",
        description: "Espresso shaken with ice for a frothy, cold drink",
        ingredients: ["ice"],
        instructions: [
            "Pull double espresso shot",
            "Add to cocktail shaker with ice",
            "Shake vigorously for 10-15 seconds",
            "Strain into glass over fresh ice"
        ]
    },
    {
        name: "Brown Sugar Shaken Espresso",
        description: "Trendy shaken espresso with brown sugar and oat milk",
        ingredients: ["brown-sugar", "cinnamon", "oat-milk", "ice"],
        instructions: [
            "Pull double espresso over brown sugar and cinnamon",
            "Stir to dissolve",
            "Add to shaker with ice and shake well",
            "Strain into glass with fresh ice",
            "Top with cold oat milk"
        ]
    },
    {
        name: "Vanilla Sweet Cream Cold Brew Style",
        description: "Espresso over ice with sweet vanilla cream",
        ingredients: ["heavy-cream", "vanilla-syrup", "ice"],
        instructions: [
            "Mix heavy cream with vanilla syrup",
            "Fill glass with ice",
            "Pull double espresso shot over ice",
            "Top with vanilla sweet cream",
            "Watch the beautiful cascade effect"
        ]
    }
];

// Get selected ingredients
function getSelectedIngredients() {
    const selectors = document.querySelectorAll('.ingredient-selector');
    const selected = [];

    selectors.forEach(selector => {
        const options = selector.selectedOptions;
        Array.from(options).forEach(option => {
            selected.push(option.value);
        });
    });

    return selected;
}

// Calculate match score
function calculateMatchScore(recipe, selectedIngredients) {
    if (recipe.ingredients.length === 0) {
        return { score: 100, canMake: true };
    }

    const matchingIngredients = recipe.ingredients.filter(ing =>
        selectedIngredients.includes(ing)
    );

    const canMake = matchingIngredients.length === recipe.ingredients.length;
    const score = Math.round((matchingIngredients.length / recipe.ingredients.length) * 100);

    return { score, canMake };
}

// Find matching recipes
function findRecipes() {
    const selectedIngredients = getSelectedIngredients();

    if (selectedIngredients.length === 0) {
        alert('Please select at least one ingredient to find recipes!');
        return;
    }

    // Filter and sort recipes
    const matchedRecipes = coffeeRecipes
        .map(recipe => {
            const { score, canMake } = calculateMatchScore(recipe, selectedIngredients);
            return { ...recipe, matchScore: score, canMake };
        })
        .filter(recipe => recipe.canMake)
        .sort((a, b) => b.matchScore - a.matchScore);

    displayRecipes(matchedRecipes, selectedIngredients);
}

// Display recipes
function displayRecipes(recipes, selectedIngredients) {
    const resultsSection = document.getElementById('results-section');
    const recipesContainer = document.getElementById('recipes-container');
    const recipeCount = document.getElementById('recipe-count');

    resultsSection.style.display = 'block';
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-recipes">
                <div class="no-recipes-icon">😢</div>
                <p>No recipes found with your selected ingredients.</p>
                <p>Try selecting more ingredients or different combinations!</p>
            </div>
        `;
        recipeCount.textContent = 'No matching recipes found';
        return;
    }

    recipeCount.textContent = `Found ${recipes.length} recipe${recipes.length !== 1 ? 's' : ''} you can make!`;

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        const ingredientsList = recipe.ingredients.length > 0
            ? recipe.ingredients.map(ing => {
                const formattedIng = ing.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                return `<li>${formattedIng}</li>`;
            }).join('')
            : '<li>Just espresso!</li>';

        const instructionsList = recipe.instructions
            .map(instruction => `<li>${instruction}</li>`)
            .join('');

        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-ingredients">
                <h4>🥤 Ingredients:</h4>
                <ul>${ingredientsList}</ul>
            </div>
            <div class="recipe-instructions">
                <h4>📝 Instructions:</h4>
                <ol>${instructionsList}</ol>
            </div>
            <span class="match-score">${recipe.matchScore}% Match</span>
        `;

        recipesContainer.appendChild(recipeCard);
    });

    // Smooth scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Clear all selections
function clearAll() {
    const selectors = document.querySelectorAll('.ingredient-selector');
    selectors.forEach(selector => {
        selector.selectedIndex = -1;
        Array.from(selector.options).forEach(option => {
            option.selected = false;
        });
    });

    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'none';
}

// Event listeners
document.getElementById('find-recipes-btn').addEventListener('click', findRecipes);
document.getElementById('clear-all-btn').addEventListener('click', clearAll);

// Allow Enter key to trigger search
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        findRecipes();
    }
});

// Daily Recipe Inspiration
function getDailyRecipe() {
    // Use current date as seed for consistent daily recipe
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    // Use day of year to pick a recipe (same recipe all day)
    const recipeIndex = dayOfYear % coffeeRecipes.length;
    return coffeeRecipes[recipeIndex];
}

function displayDailyInspiration() {
    const dailyRecipe = getDailyRecipe();
    const today = new Date();

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);

    // Update the DOM
    document.getElementById('inspiration-date').textContent = dateString;
    document.getElementById('daily-recipe-name').textContent = dailyRecipe.name;
    document.getElementById('daily-recipe-description').textContent = dailyRecipe.description;

    // Display ingredients
    const ingredientsList = document.getElementById('daily-ingredients-list');
    ingredientsList.innerHTML = '';

    if (dailyRecipe.ingredients.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Just espresso!';
        ingredientsList.appendChild(li);
    } else {
        dailyRecipe.ingredients.forEach(ing => {
            const li = document.createElement('li');
            const formattedIng = ing.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            li.textContent = formattedIng;
            ingredientsList.appendChild(li);
        });
    }

    // Display instructions (limit to first 3 for brevity)
    const instructionsList = document.getElementById('daily-instructions-list');
    instructionsList.innerHTML = '';

    const instructionsToShow = dailyRecipe.instructions.slice(0, 3);
    instructionsToShow.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    // Add "..." if there are more instructions
    if (dailyRecipe.instructions.length > 3) {
        const li = document.createElement('li');
        li.textContent = '...';
        li.style.fontStyle = 'italic';
        li.style.opacity = '0.8';
        instructionsList.appendChild(li);
    }
}

// Display daily inspiration on page load
displayDailyInspiration();
