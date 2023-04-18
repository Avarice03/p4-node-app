import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

export const RecipeContext = createContext();

// Provider for Recipes array
export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([
    {
      id: uuid(),
      name: "Chicken Biryani",
      servings: 6,
      category: "Chicken",
      cuisine: "Indian",
      description:
        "Chicken biryani is a delicious Pakistani/Indian rice dish that's typically reserved for special occasions such as weddings, parties, or holidays such as Ramadan. It has a lengthy preparation, but the work is definitely worth it. For biryani, basmati rice is the ideal variety to use.",
      ingredients: [
        "4 tablespoons vegetable oil, divided",
        "4 small potatoes, peeled and halved",
        "2 large onions, finely chopped",
        "2 cloves garlic, minced",
        "1 tablespoon minced fresh ginger root",
        "2 medium tomatoes, peeled and chopped",
        "1 teaspoon salt",
        "1 teaspoon ground cumin",
        "½ teaspoon chili powder",
        "½ teaspoon ground black pepper",
        "½ teaspoon ground turmeric",
        "2 tablespoons plain yogurt",
        "2 tablespoons chopped fresh mint leaves",
        "½ teaspoon ground cardamom",
        "1 (2 inch) piece cinnamon stick",
        "3 pounds boneless",
        "skinless chicken pieces cut into chunks",
        "1 pound basmati rice",
        "2 ½ tablespoons vegetable oil",
        "1 large onion, diced",
        "5 pods cardamom",
        "3 whole cloves",
        "1 (1 inch) piece cinnamon stick",
        "½ teaspoon ground ginger",
        "1 pinch powdered saffron",
        "4 cups chicken stock",
        "1 ½ teaspoons salt",
      ],
      instructions: [
        "Heat 2 tablespoons of oil in a large skillet. Fry potatoes in hot oil until lightly browned, about 3 to 5 minutes. Remove to a paper towel-lined plate to drain; set aside.",
        "Add remaining 2 tablespoons of oil to the skillet. Add onions, garlic, and fresh ginger; cook and stir until onion is soft and golden. Add tomatoes, salt, cumin, chili powder, pepper, and turmeric; cook, stirring constantly, for 5 minutes. Stir in yogurt, mint, ground cardamom, and cinnamon stick. Cover and cook over low heat, stirring occasionally, until tomatoes are cooked to a pulp. It may be necessary to add a little hot water if mixture becomes too dry and starts to stick to the pan.",
        "Add chicken and stir well to coat. Cover and cook over very low heat until chicken is tender, 35 to 45 minutes. There should only be a little very thick gravy left when chicken is finished cooking. If necessary cook uncovered for a few minutes to reduce the gravy.",
        "Meanwhile, make the rice: Wash rice well and drain in a colander for at least 30 minutes.",
        "Heat oil in a large skillet. Add onion; cook and stir until golden. Add cardamom pods, cloves, cinnamon stick, ground ginger, and saffron; stir in rice until coated with spices.",
        "Heat stock and salt in a medium pot until hot; pour over rice and stir well. Add chicken mixture and potatoes; stir gently to combine. Bring to a boil. Reduce heat to very low, cover with a tight-fitting lid, and steam for 20 minutes without lifting the lid or stirring. Spoon biryani onto a warm serving dish.",
      ],
      notes:
        "You can use ghee instead of vegetable oil for a more authentic taste.",
      image:
        "https://www.allrecipes.com/thmb/KAwcJZXDBDROhVxoZo7XF6dRQsQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1932914-9afbbe1d33a24aef9598f8c8f76bc4a9.jpg",
    },
    {
      id: uuid(),
      name: "Pad Thai",
      servings: 6,
      category: "Pasta",
      cuisine: "Thai",
      description:
        "This is a traditional pad thai recipe used by a friend's mother. You can use chicken, pork, beef, tofu, or a combination. You may want to start with less pepper and work your way up.",
      ingredients: [
        "1 (12 ounce) package rice noodles",
        "2 tablespoons butter",
        "1 pound boneless, skinless chicken breast halves, cut into bite-sized pieces",
        "¼ cup vegetable oil",
        "4 eggs",
        "3 tablespoons white sugar",
        "2 tablespoons fish sauce",
        "1 tablespoon white wine vinegar",
        "⅛ tablespoon crushed red pepper",
        "2 cups bean sprouts",
        "3 green onions, chopped",
        "¼ cup crushed peanuts",
        "1 lemon, cut into wedges"
      ],
      instructions: [
        "Gather all ingredients.",
        "Soak rice noodles in cold water until soft, 30 to 50 minutes. Drain and set aside.",
        "Meanwhile, heat butter in a wok; add chicken and sauté until browned. Remove chicken and set aside.",
        "Heat oil in the wok over medium-high heat. Crack eggs into hot oil and cook until firm. Stir in chicken and cook for 5 minutes.",
        "Add softened noodles, sugar, fish sauce, vinegar, and red pepper; mix well until noodles are tender. Adjust seasonings to taste.",
        "Stir bean sprouts into wok and cook for 3 minutes.",
        "Serve topped with green onions, crushed peanuts, and a wedge of lemon."
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/U-Rg1Co-1t68gcMHf3SNpVxUVCA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/42968-pad-thai-4x3-1530-2a60081848f745379461240c5edcca3d.jpg"
    },
    {
      id: uuid(),
      name: "Greek Salad",
      servings: 6,
      category: "Vegetables",
      cuisine: "Mediterranean",
      description:
        "Greek-inspired salad with tomato, cucumber, and feta cheese.",
      ingredients: [
        "3 large ripe tomatoes, chopped",
        "2 medium cucumbers, peeled and chopped",
        "1 small red onion, chopped",
        "¼ cup olive oil",
        "4 teaspoons lemon juice",
        "1 ½ teaspoons dried oregano",
        "salt and pepper to taste",
        "1 cup crumbled feta cheese",
        "6 black Greek olives, pitted and sliced",
      ],
      instructions: [
        "Toss tomatoes, cucumbers, and red onion together in a shallow salad bowl.",
        "Drizzle oil and lemon juice over top, then sprinkle with oregano, salt, and pepper.",
        "Top with feta and olives.",
      ],
      notes:
        "You can use two green onions instead of the small red onion if desired.",
      image:
        "https://www.allrecipes.com/thmb/eCyWceD7hh2FDJZ4I01wNnEXFm8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3551901-6bf768c2f1cc4996ac17832cd6017864.jpg",
    },
    {
      id: uuid(),
      name: "Disney's Ratatouille",
      servings: 4,
      category: "Vegetables",
      cuisine: "French",
      description:
        "This Disney ratatouille recipe makes the beautiful dish served up in the movie of the same name. Long and narrow vegetables work best. Serve with crusty bread or over a bed of brown rice, couscous, or pasta.",
      ingredients: [
        "1 (6 ounce) can tomato paste",
        "½ onion, chopped",
        "¼ cup minced garlic",
        "¾ cup water",
        "4 tablespoons olive oil, divided",
        "salt and ground black pepper to taste",
        "1 small eggplant, trimmed and very thinly sliced",
        "1 zucchini, trimmed and very thinly sliced",
        "1 yellow squash, trimmed and very thinly sliced",
        "1 red bell pepper, cored and very thinly sliced",
        "1 yellow bell pepper, cored and very thinly sliced",
        "1 teaspoon fresh thyme leaves, or to taste",
        "3 tablespoons mascarpone cheese",
      ],
      instructions: [
        "Preheat the oven to 375 degrees F (190 degrees C).",
        "Spread tomato paste onto the bottom of a 10-inch square baking dish. Sprinkle with onion and garlic. Stir in water and 1 tablespoon olive oil until thoroughly combined. Season with salt and pepper.",
        "Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap slices a little to display colors.",
        "Drizzle vegetables with remaining 3 tablespoons olive oil; season with salt and pepper. Sprinkle with thyme leaves. Cover vegetables with a piece of parchment paper cut to fit inside.",
        "Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese.",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/B7pwC3xXpocRpwJfkPmDk9_A3nM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222006-disneys-ratatouille-ddmfs-4x3-0747-631622b05b4e4bd196b037aed1c9f776.jpg",
    },
    {
      id: uuid(),
      name: "The Basic Burger",
      servings: 4,
      category: "Beef",
      cuisine: "American",
      description: "These burger patties are made with ground beef and an easy bread crumb mixture. Nothing beats a simple hamburger on a warm summer evening. Pile these burgers with your favorite condiments and pop open a cool drink!",
      ingredients: [
        "1 large egg",
        "½ teaspoon salt",
        "½ teaspoon ground black pepper",
        "1 pound ground beef",
        "½ cup fine dry bread crumbs",
      ],
      instructions: [
        "Preheat an outdoor grill for high heat and lightly oil grate.",
        "Whisk together egg, salt, and pepper in a medium bowl.",
        "Add ground beef and bread crumbs and mix with your hands or a fork until well blended.",
        "Form into four 3/4-inch-thick patties.",
        "Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C).",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/u_vrhzebU3If_I3PpDlzBAVSChA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-f65d5518ecc0435f9791d453ee9cd78f.jpg",
    },
    {
      id: uuid(),
      name: "Shrimp Tempura",
      servings: 4,
      category: "Seafood",
      cuisine: "Japanese",
      description:
        "Serve these crisp, fried shrimp with a hot mustard sauce or sweet & sour sauce. The tempura batter may be used for other recipes. Try it with vegetables.",
      ingredients: [
        "½ cup rice wine",
        "¼ teaspoon salt",
        "½ pound fresh shrimp, peeled and deveined",
        "2 quarts oil for deep frying",
        "¼ cup all-purpose flour",
        "⅓ cup ice water",
        "¼ cup cornstarch",
        "1 egg yolk",
        "¼ teaspoon salt",
        "¼ teaspoon white sugar",
        "1 teaspoon shortening",
        "½ teaspoon baking powder",
      ],
      instructions: [
        "In a medium bowl, mix rice wine and salt. Place shrimp into the mixture. Cover and marinate in the refrigerator at least 20 minutes.",
        "Heat oil in deep-fryer or large wok to 375 degrees F (190 degrees C).",
        "In a medium bowl, mix together all-purpose flour, ice water, cornstarch, egg yolk, salt, white sugar, shortening and baking powder.",
        "One at a time, dip shrimp into the flour mixture to coat. Carefully place a few shrimp at a time in the hot oil. Deep fry until golden brown on all sides, about 1 1/2 minutes. Use a slotted spoon to remove from oil. Drain on paper towels. Serve warm.",
      ],
      notes:
        "We have determined the nutritional value of oil for frying based on a retention value of 10% after cooking. The exact amount may vary depending on cook time and temperature, ingredient density, and the specific type of oil used.",
      image:
        "https://www.lutongbahayrecipe.com/wp-content/uploads/2019/03/lutong-bahay-recipe-tempura-1200x878.jpg",
    },
    {
      id: uuid(),
      name: "Mushroom Risotto",
      servings: 6,
      category: "Vegetables",
      cuisine: "Italian",
      description:
        "Authentic Italian-style risotto cooked the slow and painful way, but-oh so worth it. Complements grilled meats and chicken dishes very well. Check the rice by biting into it. It should be slightly al dente (or resist slightly to the tooth but not be hard in the center).",
      ingredients: [
        "6 cups chicken broth, or as needed",
        "3 tablespoons olive oil, divided",
        "1 pound portobello mushrooms, thinly sliced",
        "1 pound white mushrooms, thinly sliced",
        "2 medium shallots, diced",
        "1 ½ cups Arborio rice",
        "½ cup dry white wine",
        "4 tablespoons butter",
        "3 tablespoons finely chopped chives",
        "⅓ cup freshly grated Parmesan cheese",
        "sea salt and freshly ground black pepper to taste",
      ],
      instructions: [
        "Gather all ingredients.",
        "Warm broth in a saucepan over low heat.",
        "Meanwhile, warm 2 tablespoons olive oil in a large saucepan over medium-high heat. Add portobello and white mushrooms; cook and stir until soft, about 3 minutes. Remove mushrooms and their liquid to a bowl; set aside.",
        "Add remaining 1 tablespoon olive oil to the saucepan. Stir in shallots and cook for 1 minute. Add rice; cook and stir until rice is coated with oil and pale, golden in color, about 2 minutes.",
        "Pour in wine, stirring constantly until wine is fully absorbed. Add 1/2 cup warm broth to the rice, and stir until the broth is absorbed. Continue adding broth, 1/2 cup at a time, stirring constantly, until the liquid is absorbed and the rice is tender, yet firm to the bite, about 15 to 20 minutes.",
        "Remove from heat. Stir in reserved mushrooms and their liquid, butter, chives, and Parmesan cheese. Season with salt and pepper and serve immediately.",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/HBCiv1b6WV3oToSIUGs_EZsI73s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85389-gourmet-mushroom-risotto-84-883f9f67760d4fa09d3bc123639d6bde.jpg",
    },
    {
      id: uuid(),
      name: "Sweet and Sour Pork",
      servings: 4,
      category: "Pork",
      cuisine: "Chinese",
      description:
        "This sweet and sour pork recipe is from my husband's grandmother, who was Chinese. She taught me how to make this recipe — it's the way Gramma made sweet and sour dishes her whole life until she died at age 94. The secret is apple cider vinegar.",
      ingredients: [
        "1 pound pork butt, cut into 1 inch cubes",
        "1 teaspoon soy sauce",
        "1 teaspoon salt",
        "¼ teaspoon white sugar",
        "1 egg white",
        "2 green onions, chopped",
        "1 quart vegetable oil for frying",
        "½ cup cornstarch",
        "1 tablespoon vegetable oil",
        "3 stalks celery, cut into 1/2 inch pieces",
        "1 medium green bell pepper, cut into 1 inch pieces",
        "1 medium onion, cut into wedges",
        "1 pinch white sugar, or to taste",
        "salt to taste",
        "1 ¼ cups water, divided",
        "¾ cup white sugar",
        "⅓ cup apple cider vinegar",
        "¼ cup ketchup",
        "½ teaspoon soy sauce",
        "¼ teaspoon salt",
        "1 (8 ounce) can pineapple chunks, undrained",
        "2 tablespoons cornstarch",
      ],
      instructions: [
        "Place cubed pork in a medium bowl and season with soy sauce, salt, and sugar for marinade. Add egg white and green onions and mix until well-combined. Cover and place in the refrigerator for at least 1 hour.",
        "Heat 1 quart oil to 365 degrees F (185 degrees C) in a large, heavy saucepan or deep fryer.",
        "Coat pork with cornstarch and fry in hot oil until evenly browned, about 10 minutes. Drain on paper towels and set aside.",
        "Heat oil for vegetables in a wok over medium heat. Stir in celery, bell pepper, and onion; cook until tender, about 5 minutes. Season with pinch of sugar and salt. Remove from heat and set aside.",
        "Mix 1 cup water, 3/4 cup sugar, apple cider vinegar, ketchup, soy sauce, and salt in a large saucepan; bring to a boil over high heat.",
        "Stir in cooked pork, celery mixture, and pineapple chunks with juice. Return to a boil, then mix in remaining1/4 cup water and cornstarch. Cook until thickened and warmed through, about 2 minutes.",
      ],
      notes:
        "We have determined the nutritional value of oil for frying based on a retention value of 10% after cooking. The exact amount may vary depending on cook time and temperature, ingredient density, and the specific type of oil used.",
      image:
        "https://tasteasianfood.com/wp-content/uploads/2019/05/sweet-and-sour-pork-featured-image-720x540.jpg",
    },
    {
      id: uuid(),
      name: "Nasi Goreng",
      servings: 4,
      category: "Chicken",
      cuisine: "Indonesian",
      description:
        "This recipe for nasi goreng, Indonesian fried rice, is very easy to make and won't take more than 20 minutes to prepare. The dish can be enjoyed by itself or as the basis of a larger meal like a rijsttafel.",
      ingredients: [
        "2 cups water",
        "1 cup uncooked white rice",
        "cooking spray",
        "3 large eggs, beaten",
        "1 tablespoon vegetable oil",
        "1 onion, chopped",
        "1 leek, chopped",
        "2 green chile peppers, chopped",
        "1 clove garlic, minced",
        "½ pound skinless, boneless chicken breasts, cut into thin strips",
        "½ pound peeled and deveined prawns",
        "1 teaspoon ground coriander",
        "1 teaspoon ground cumin",
        "3 tablespoons sweet soy sauce (Indonesian kecap manis)",
      ],
      instructions: [
        "Bring water and rice to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until rice is tender and liquid is absorbed, 20 to 25 minutes. Spread onto a baking sheet, then refrigerate until cold, about 2 hours.",
        "Heat a large nonstick skillet over medium heat. Coat with nonstick cooking spray.",
        "Pour eggs into the hot skillet and cook until the edges begin to set. Lift the edges to allow any uncooked egg to flow onto the hot pan, about 1 minute. Flip omelet in one piece and cook until fully set, about 30 seconds. Transfer omelet to a cutting board and slice into 1/2-inch strips. Set aside.",
        "Heat vegetable oil in a wok or large frying pan over high heat. Stir in onion, leek, chile peppers, and garlic. Cook and stir until onion is soft, 3 to 5 minutes. Stir in chicken, prawns, coriander, and cumin; mix well. Cook and stir for about 5 minutes.",
        "Mix in cold rice, sweet soy sauce, and omelet strips; cook until shrimp are bright pink and chicken is no longer pink in the center, 3 to 5 minutes.",
      ],
      notes: "",
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Nasi-Goreng-square-FS-57.jpg",
    },
    {
      id: uuid(),
      name: "Cabbage Kimchi",
      servings: 56,
      category: "Vegetables",
      cuisine: "Korean",
      description:
        "Kimchi, a popular Korean dish, is best described as a spicy, slightly sweet, pickled or fermented cabbage. I spent a year in South Korea and fell in LOVE with Kimchi! My friend Myong was kind enough to share her recipe and technique with me. Some ingredients may not be readily available in your local supermarket. Look for Kimchi (Fish) Sauce and Korean chili powder in Asian markets or online. Use kimchi in stir fries or your favorite Korean dishes.",
      ingredients: [
        "2 heads napa cabbage",
        "1 ¼ cups sea salt",
        "1 tablespoon fish sauce",
        "5 green onions, chopped",
        "½ small white onion, minced",
        "2 cloves garlic, pressed",
        "2 tablespoons white sugar",
        "1 teaspoon ground ginger",
        "5 tablespoons Korean chile powder",
      ],
      instructions: [
        "Cut the cabbages in half lengthwise and trim the ends. Rinse and cut into pieces about 2 inch square. Place the cabbage into large resealable bags and sprinkle salt on the leaves so they are evenly coated. Use your hands to rub the salt in to the leaves. Seal the bags and leave at room temperature for 6 hours.",
        "Rinse the salt from the cabbage leaves and then drain and squeeze out any excess liquid. Place the cabbage in a large container with a tight fitting lid. Stir in the fish sauce, green onions, white onion, garlic, sugar and ginger. Sprinkle the Korean chile powder over the mixture. Wear plastic gloves to protect your hands and rub the chile powder into the cabbage leaves until evenly coated. Seal the container and set in a cool dry place. Leave undisturbed for 4 days. Refrigerate before serving, and store in the refrigerator for up to 1 month (if it lasts that long!).",
      ],
      notes: "",
      image:
        "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    },
    {
      id: uuid(),
      name: "Chicken Adobo",
      servings: 6,
      category: "Chicken",
      cuisine: "Filipino",
      description:
        "Classic chicken adobo recipe that's simple to make and loved by all who try it. It has been modified to be a bit saucier than traditional adobo and is delicious served over rice.",
      ingredients: [
        "2 tablespoons vegetable oil",
        "1 (3 pound) chicken, cut into pieces",
        "1 large onion, quartered and sliced",
        "2 tablespoons minced garlic",
        "⅔ cup low sodium soy sauce",
        "⅓ cup white vinegar",
        "1 tablespoon garlic powder",
        "2 teaspoons black pepper",
        "1 bay leaf",
      ],
      instructions: [
        "Heat vegetable oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown, 2 to 3 minutes per side. Transfer chicken to a plate and set aside.",
        "Add onion and garlic to the skillet; cook until softened and brown, about 6 minutes.",
        "Pour in soy sauce and vinegar and season with garlic powder, black pepper, and bay leaf.",
        "Return chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes.",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/A52mpRS-LdNrngqAMvN2ajDot5c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/128699-famous-chicken-adobo-ddmfs-step-4-113-3x4-d3e7c90ab46d49c6a3d8e141defaf252.jpg",
    },
    {
      id: uuid(),
      name: "Tacos - Carne",
      servings: 16,
      category: "Beef",
      cuisine: "Mexican",
      description:
        "This Mexican steak taco recipe is for taqueria-style carne asada tacos. These are served on soft corn tortillas, unlike the American version of tacos.",
      ingredients: [
        "½ cup soy sauce",
        "½ cup olive oil",
        "⅓ cup white vinegar",
        "4 cloves garlic, minced",
        "2 limes, juiced",
        "1 teaspoon salt",
        "1 teaspoon ground black pepper",
        "1 teaspoon ground white pepper",
        "1 teaspoon garlic powder",
        "1 teaspoon chili powder",
        "1 teaspoon dried oregano",
        "1 teaspoon ground cumin",
        "1 teaspoon paprika",
        "1 white onion, chopped",
        "½ cup chopped fresh cilantro",
        "1 lime, juiced",
        "4 dried New Mexico chile pods",
        "2 large tomatoes, chopped",
        "1 white onion, quartered",
        "4 cloves garlic, peeled",
        "2 jalapeno peppers, chopped",
        "1 pinch salt and black pepper",
        "1 (32 ounce) package corn tortillas",
        "2 cups grated cotija cheese (Optional)",
        "2 limes, cut into wedges",
      ],
      instructions: [
        "Lay flank steak in a large glass baking dish.",
        "Make the marinade: Whisk soy sauce, oil, vinegar, 4 cloves of garlic, juice of two limes, salt, black pepper, white pepper, garlic powder, chili powder, oregano, cumin, and paprika together in a bowl until well blended; pour over steak, turning to coat both sides. Cover the dish with plastic wrap and marinate in the refrigerator for 1 to 8 hours.",
        "Make the relish: Stir onion, cilantro, and lime juice together in a small bowl. Set aside.",
        "Make the salsa: Preheat the oven to 450 degrees F (230 degrees C). Heat a skillet over medium-high heat. Add chile pods and toast for a few minutes; transfer pods to a bowl of water and soak for 30 minutes.",
        "Place tomatoes, 1 onion, 4 cloves of garlic, and jalapeños onto a baking sheet. Roast in the preheated oven until vegetables are toasted, about 20 minutes. Transfer vegetables into a blender or food processor. Add soaked chiles, salt, and pepper; puree until smooth.",
        "Remove steak from the marinade and shake off excess. Discard the remaining marinade. Cut the marinated flank steak into cubes or strips.",
        "Heat vegetable oil in a large skillet over medium-high heat. Add steak; cook and stir until cooked through and most of the liquid has evaporated.",
        "Warm tortillas in a dry skillet over low heat for about a minute on each side.",
        "Place some steak on each tortilla; top with relish and prepared salsa. Sprinkle with cotija cheese. Garnish with lime wedges and serve.",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/OiYleP7KFJgZ1yWE7xQju-zYDmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg",
    },
    {
      id: uuid(),
      name: "Spicy Salmon Maki",
      servings: 4,
      category: "Seafood",
      cuisine: "Japanese",
      description:
        "I can't claim this to be authentic, but it sure was tasty and packed just enough heat for my preference. If you are concerned with raw fish, try using cold smoked salmon. I had enough for 5 rolls, your results may vary.",
      ingredients: [
        "1 cup glutinous white rice (sushi rice)",
        "1 ½ cups water",
        "¼ cup rice wine vinegar",
        "2 tablespoons white sugar",
        "½ teaspoon salt",
        "1 (1 ounce) package nori (dry seaweed)",
        "1 medium avocado, thinly sliced",
        "1 (8 ounce) farmed Atlantic salmon",
        "3 stalks green onions, halved lengthwise",
        "¼ cup sriracha mayonnaise (Kikkoman)",
        "2 tablespoons hoisin sauce",
        "2 teaspoons black sesame seeds",
        "2 teaspoons toasted sesame seeds",
        "½ teaspoon wasabi paste, or to taste",
        "1 tablespoon pickled ginger, or to taste",
      ],
      instructions: [
        "Rinse rice in a strainer under cold running water until water runs clear. Combine rice and water in a saucepan. Bring to a boil over medium-high heat, reduce heat to low, cover, and cook for 20 minutes. Remove from heat.",
        "Meanwhile, combine rice wine vinegar, sugar, and salt in a small saucepan. Cook over medium heat until sugar dissolves. Remove and allow to cool. Stir vinegar mixture into the cooked rice - rice will dry as it cools. Allow rice to cool completely, about 30 minutes.",
        "Place a sheet of nori onto a sushi mat. Place about 1/2 cup rice on top and, using a rice paddle, spread rice onto the nori sheet.",
        "Flip nori over so rice is facing down. Arrange 3 to 4 avocado slices, about 2 ounces salmon, 1 strip green onion, and 2 teaspoons Sriracha mayonnaise down the middle of the nori sheet.",
        "Carefully, but tightly, roll nori up by closing in on the ingredients to form a roll. Drizzle each roll with hoisin sauce and more Sriracha mayonnaise and sprinkle with both types of sesame seeds.",
        "Slice each sushi roll into 8 pieces. Serve with a dollop of wasabi and pickled ginger on the side.",
      ],
      notes:
        "If you like, you can garnish the rolls with some masago (fish roe).",
      image:
        "https://static.toiimg.com/thumb/54882405.cms?imgsize=547404&width=800&height=800",
    },
    {
      id: uuid(),
      name: "Pork Sinigang",
      servings: 4,
      category: "Pork",
      cuisine: "Filipino",
      description:
        "Sinigang is a Filipino soup cooked with pork. Serve with rice and for additional sauce, use soy or fish sauce. If you want to, you can add what Filipinos call gabi gabi, which is a small taro root. When peeled they look like potatoes. You can add five to six of them when you add the water and make sure they are cooked through. Take them out when they are cooked because they can get too soft.",
      ingredients: [
        "1 tablespoon vegetable oil",
        "1 small onion, chopped",
        "1 teaspoon salt",
        "1 (1/2 inch) piece fresh ginger, chopped",
        "2 plum tomatoes, cut into 1/2-inch dice",
        "1 pound bone-in pork chops",
        "4 cups water, more if needed",
        "1 (1.41 ounce) package tamarind soup base (such as Knorr®)",
        "½ pound fresh green beans, trimmed",
      ],
      instructions: [
        "Heat vegetable oil in a skillet over medium heat. Add onion; cook and stir until softened and translucent, about 5 minutes. Season with salt.",
        "Stir in ginger, tomatoes, and pork chops. Cover and reduce heat to medium-low. Turn the pork occasionally, until browned.",
        "Pour in water and tamarind soup base. Bring to a boil, then reduce heat and simmer until the pork is tender and cooked through, about 30 minutes.",
        "Stir in green beans and cook until tender.",
      ],
      notes: "",
      image:
        "https://www.allrecipes.com/thmb/_9UwW0_g-P8MWHAfLVFWXtX6mBg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/204958-pork-sinigang-mfs-4-59bbe7832c15444995d66644473dd3fc.jpg",
    },
    {
      id: uuid(),
      name: "Bibimbap",
      servings: 3,
      category: "Vegetables",
      cuisine: "Korean",
      description:
        "I created this recipe from looking at a few different ones online and choosing my favorite aspects of each. This is vegetarian but there are many bibimbap recipes with beef or chicken marinades, if you want to add beef or chicken to this dish.",
      ingredients: [
        "2 tablespoons sesame oil",
        "1 cup carrot matchsticks",
        "1 cup zucchini matchsticks",
        "½ (14 ounce) can bean sprouts, drained",
        "6 ounces canned bamboo shoots, drained",
        "1 (4.5 ounce) can sliced mushrooms, drained",
        "⅛ teaspoon salt to taste",
        "2 cups cooked and cooled rice",
        "⅓ cup sliced green onions",
        "2 tablespoons soy sauce",
        "¼ teaspoon ground black pepper",
        "1 tablespoon butter",
        "3 eggs",
        "3 teaspoons sweet red chili sauce, or to taste",
      ],
      instructions: [
        "Heat sesame oil in a large skillet over medium heat; cook and stir carrot and zucchini in the hot oil until vegetables begin to soften, about 5 minutes. Stir in bean sprouts, bamboo shoots, and mushrooms. Cook and stir until carrots are tender, about 5 more minutes. Season to taste with salt and set vegetables aside.",
        "Stir cooked rice, green onions, soy sauce, and black pepper in the same skillet until the rice is hot. In a separate skillet over medium heat, melt butter and gently fry eggs, turning once, until the yolks are still slightly runny but the egg whites are firm, about 3 minutes per egg.",
        "To serve, divide hot cooked rice mixture between 3 serving bowls and top each bowl with 1/3 of the vegetable mixture and a fried egg. Serve sweet red chili sauce on the side for mixing into bibimbap.",
      ],
      notes: "",
      image:
        "https://www.carolinescooking.com/wp-content/uploads/2021/05/vegetarian-bibimbap-sq-500x375.jpg",
    },
  ]);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

const recipeExport = { RecipeContext, RecipeProvider }
export default recipeExport;
