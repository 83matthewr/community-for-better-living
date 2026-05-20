import Image from "next/image";

import Paragraph from "@/app/components/paragraph.component";
import Container from "@/app/components/container.component";

import Link from "next/link";
import SectionHeading from "@/app/components/section-heading.component";


export default function Member({ params }: { params: { recipe: string } }) {

    return (
        <Container>
            {
                params.recipe === "vegan-spinach-puffs" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Vegan Spinach Puffs</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 Cup Raw Cashews, soaked in water overnight</li>
                        <li>1/2 Cup Almond Milk</li>
                        <li>1 1/2 Tbsp Lemon Juice</li>
                        <li>2 Cloves Garlic</li>
                        <li>1 Tsp Salt</li>
                        <li>1 10 oz. Package Frozen Spinach, Thawed</li>
                        <li>1 Small Onion, Chopped</li>
                        <li>2 Tbsp Fresh Dill, Chopped</li>
                        <li>1 Package of Puff Pastry, 2 Sheets, Vegan Olive Oil</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Preheat oven to 400 degrees and lightly oil 2 muffin tins, 18 count. Put the drained
                        cashews, milk, lemon juice, garlic, and salt into a food processor and process until smooth.
                        Drain and squeeze spinach and add to food processor along with the onion and dill. Pulse
                        until the ingredients are fully mixed. Cut each sheet of the pastry into 3 strips and then cut each stip into
                        thirds making 18 squares. Put each square into the bottom of a muffin tin. The corners of the dough
                        should reach a bit beyond the top of the muffin cavity. Spoon about 2 Tbsp of the spinach mixture into each muffin tin.
                        Fold the corners of each square together and pinch them together at the center. Brush top with a bit of olive oil. Bake
                        until the dough is lightly browned, about 25 minutes. Let cool a little before removing from the muffin tins.
                    </div>
                </div>
            }
            {
                params.recipe === "apple-crisp" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Apple Crisp</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 Cup All-purpose Flour</li>
                        <li>2/3 Cup Light Brown Sugar</li>
                        <li>8 Tbsp Unsalted Butter, room temperature</li>
                        <li>8 Cups Peeled and Sliced Apples</li>
                        <li>2 Tbsp Lemon Juice</li>
                        <li>3 Tbsp All-purpose Flour</li>
                        <li>1 Tbsp Cornstarch</li>
                        <li>1/2 Cup White Granulated Sugar</li>
                        <li>1/4 Tsp Kosher Salt</li>
                        <li>1/4 Tsp Allspice</li>
                        <li>1/2 Tsp Cinnamon</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Preheat oven to 400 degrees. Combine sliced apples, lemon juice, 3 Tbsp flour, cornstarch, granulated sugar, salt, allspice, and cinnamon
                        and place in a 9 inch dish, mounded. <br />
                        Combine 1 Cup flour, 2/3 Cup brown sugar, and mix in 8 tbsp unsalted butter. Mix until mixture feels like wet sand.
                        Sprinkle the crumble over the apple prepared dish. <br />
                        Place on large parchment paper lined tray into preheated lower portion of oven. Bake for 30 minutes and reduce heat to 375 degrees.
                        Continue baking approximately 45-55 minutes. <br />
                        The crisp crumble may need to be covered with foil during baking to prevent burn.
                    </div>
                </div>
            }
            {
                params.recipe === "sweet-potato-wedges" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Roast Sweet Potato Wedges (makes 12 wedges, ready in 30 minutes)</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 medium sweet potatoes (1 1/2 lb), peeled and cut lengthwise into 6 wedges</li>
                        <li>1 tsp granulated garlic</li>
                        <li>1/2 tsp ground cumin</li>
                        <li>1/2 tsp chili powder</li>
                        <li>1/4 tsp sea salt</li>
                        <li>1/2 tsp freshly ground black pepper</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Preheat oven to 425 degrees. Line a large baking sheet pan with parchment paper, Place potato wedges in a steamer basket
                        in a large saucepan. Add water to saucepan just below basket. Bring to a boil. Steam covered for 7 minutes or until just tender.
                        Arrange potato wedges on the prepared baking sheet in a single layer. In a small bowl, stir together the remaining ingredients.
                        Sprinkle spice mixture over potato wedges.
                        Roast 15 to 20 minutes or until browned and tender, turning once halfway through to cooking. Serve hot
                    </div>
                </div>
            }
            {
                params.recipe === "tapioca-pudding" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Tapioca Pudding</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 can light coconut milk</li>
                        <li>1/3 cup quick Tapioca</li>
                        <li>3/4 cup non-dairy milk</li>
                        <li>1/4 cup maple syrup</li>
                        <li>Pinch of salt</li>
                        <li>1/2 tsp vanilla</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Cook all ingredients, through salt at medium heat until it reaches a full boil. When pudding is cool, add the vanilla. Top with fresh fruit
                    </div>
                </div>
            }
            {
                params.recipe === "zucchini-casserole" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Zucchini Casserole</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>4 medium unpeeled zucchini, sliced</li>
                        <li>1 cup carrots, shredded</li>
                        <li>1/4 cup onion, chopped</li>
                        <li>2 1/4 cups herbed croutons</li>
                        <li>1/2 cup mushroom gravy</li>
                        <li>1/2 cup Better than Sour Cream</li>
                        <li>1 - 2 tbsp olive oil</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Cook zucchini and drain. Saute the carrots and onion in olive oil. Stir in 1 1/2 cup of herbed croutons, mushroom gravy, and sour cream.
                        Stir in zucchini. Put in a casserole dish and sprinkle the remaining croutons on top. Bake at 350 degrees for 30 - 40 minutes. Serves 4.
                    </div>
                </div>
            }
            {
                params.recipe === "mushroom-gravy" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Mushroom Gravy</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1/3 cup canned mushrooms, with juice</li>
                        <li>2 tbsp cornstarch</li>
                        <li>1 tbps vegetarian beef seasoning</li>
                        <li>3/4 tsp salt</li>
                        <li>2/3 cup raw cashews</li>
                        <li>2 cups water</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Blend water and cashews until creamy. Add vegetarian beef seasoning, salt, and cornstarch and blend well.
                        Add mushrooms and blend briefly. Pour the gravy into a kettle and cook until thickened. Stir frequently.
                    </div>
                </div>
            }
            {
                params.recipe === "lentil-roast" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Lentil Roast</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 cup cooked lentils</li>
                        <li>1 cup chopped pecans</li>
                        <li>2 cup soymilk or any non-dair milk</li>
                        <li>1 onion, finely chopped</li>
                        <li>1 tsp salt</li>
                        <li>1 tsp sage</li>
                        <li>1 1/2 tsp garlic powder1 1/2 cup crushed corn flakes or whole grain cereal flakes</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Mix all ingredients. Bake at 350 degrees for 60 minutes
                    </div>
                </div>
            }
            {
                params.recipe === "sweet-and-sour-vege-burger" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Sweet and Sour Vege-Burger Roast</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 medium onion chopped</li>
                        <li>6 slices of whole wheat bread - cubed</li>
                        <li>1 stick butter/margarine</li>
                        <li>1 box boca ground Burger</li>
                        <li>2 cups grated cheddar cheese</li>
                        <li>4 eggs</li>
                        <li>1 tsp garlic powder</li>
                        <li>1 tsp sage</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Saute onion in butter/margarine. Combine all ingredients, mix well. Put into 9x13x2 baking pan.
                    </div>
                    <div className="my-4 body-1b">Topping</div>
                    <ul className="list-disc list-inside mb-6">
                        <li>1/2 cup ketchup</li>
                        <li>1/2 cup brown sugar</li>
                        <li>1/2 cup water</li>
                    </ul>
                    <div className="">
                        Mix until dissolved. Pour over top of roast. you may put it on at the start of baking, or 15 minutes before it is done.
                    </div>
                </div>
            }
            {
                params.recipe === "spring-roll-bowl" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Spring Roll Bowl (35 minutes makes 2 bowls)</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>4 oz brown rice noodles</li>
                        <li>2/3 cup frozen edamame</li>
                        <li>1 cup fresh snow peas, halved</li>
                        <li>1/2 of a medium cucumber, cut into bite sized strips</li>
                        <li>1/2 cup coarsely shredded carrot</li>
                        <li>2 tbsp sliced radishes</li>
                        <li>1 recipe peanut sauce</li>
                        <li>Optional toppings: crushed peanuts, sliced thai or jalapeno chile peppers, sliced green onions,
                            snipped fresh cilantro, and or lime wedges</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1. Cook noodles according to package directions. Rinse well with cold water and drain. Cook edamame according to package directions <br />
                        2. Divide noodels between two bowls and top with edamame, snow peas, cucumber, carrot, and radishes. Drizzle peanut sauce evenly over bowls. Add desired toppings
                    </div>
                </div >
            }
            {
                params.recipe === "peanut-sauce" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Peanut Sauce</h1>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        In a small bowl, whisk together 2 tbps natural creamy peanut butter, 1 tbsp each of lime juice, pure maple syrup, and snipped fresh cilantro, 1 tsp grated ginger, 1 clove garlic,
                        minced, and if desired, 1/4 tsp crushed red pepper. Gradually stir in 2 tbsp water until sauce is the consistency of maple syrup. Season to taste with sea salt and fresh ground pepper.
                    </div>
                </div >
            }
            {
                params.recipe === "eggplant-parmesan" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Eggplant Parmesan</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 medim eggplants, peeled and cut into 1/3 inch thick slices</li>
                        <li>2 cups italian saesoned bread crumbs or panko</li>
                        <li>1/2 cup aioli or commercial soy mayonnaise</li>
                        <li>1/4 - 1/2 cup water</li>
                        <li>1 jar of your favorite marinara sauce</li>
                        <li>vegan parmesan cheese</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Preheat oven to 350 degrees. Lightly coat a large baking sheet with cooking spray. Mix batter ingredients together
                        in a small bowl and set aside. Place bread crumbs in a shallow dish. Dip eggplant into the batter, then into the breading.
                        Place a breaded eggplant slice onto the baking sheet. Lightly spray the tops of the eggplant with cooking spray. Bake 15 minutes
                        on each side or until browned and crispy. Using a small baking casserole dish, cover the bottom of the dish with pasta sauce and then
                        put down a layer of eggplant slices, cover with sauce and repeat until all the eggplant is used up. Top with remaining sauce and sprinkle
                        on vegan parmesan cheese. Bake at 350 degrees for 30 - 45 minutes or until pasta sauce is bubbly.
                    </div>
                </div >
            }
            {
                params.recipe === "potato-lovers-bowl" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Potato Lover&apos;s Bowl (30 minutes, 2 bowls)</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 medium potatoes, cut into 1/2 inch wedges</li>
                        <li>2 cups small cauliflower florets</li>
                        <li>4 cups shredded kate, stems removed</li>
                        <li>1/2 cup shredded carrots</li>
                        <li>1 recipe <Link href="/recipes/romesco-sauce" className="">Romesco Sauce</Link></li>
                        <li>1/4 cup thinly sliced green onions</li>
                        <li>1/4 cup cooked or canned garbanzo beans, rinsed and drained</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1. Place potato wedges in a steamer basket in a large saucepan. Add water to saucepan to just below basket. Bring to a boil.
                        Steam, covered 10 minutes or until tender. Transfer potatoes to a large nonstick skillet. Brown over medium 5 minutes per side. <br />
                        2. Meanwhile, cook cauliflower in same steamer basket 3 to 5 minutes or until lightly cooked. Transfer cauliflower to the skillet.
                        Brown as with the potatoes <br />
                        3. Cook kale in same steamer basket 1 to 2 minutes or until lightly wilted. <br />
                        4. Divide potatoes, cauliflower, kale, and carrots between 2 bowls. Drizzle Romesco sauce evenly over bowls. Sprinkle bowls with green onions and garbanzos. <br />
                    </div>
                </div >
            }
            {
                params.recipe === "romesco-sauce" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Romesco sauce</h1>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        In a blender, combine 1/2 cup garbanzo beans, 1/2 cup jarred roasted red sweet peper, 1 tbsp water, 1 1/2 tsp each of lemon juice and tahini, 1/2 tsp smoked paprika,
                        1/4 tsp each minced fresh garlic and ground cumin, sea salt, and freshly ground black pepper to taste.
                    </div>
                </div >
            }
            {
                params.recipe === "cream-of-fresh-vegetable-soup" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Cream of Fresh Vegetable Soup</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 1/2 cup chopped fresh vegetables (peas, broccoli, asparagus)</li>
                        <li>1 tbsp olive oil</li>
                        <li>1/2 cup onion, chopped</li>
                        <li>1/2 cup celery, diced</li>
                        <li>1/4 cup carrot, shredded</li>
                        <li>1 cup fresh vegetables, diced (I use about 3/4 cup asparagus, and make the other 1/4 cup with the other vegetables)</li>
                        <li>4 cups water</li>
                        <li>2/3 cup raw cashews</li>
                        <li>2 tbsp chicken style seasoning</li>
                        <li>1 tsp salt</li>
                        <li>1/2 tsp onion powder</li>
                        <li>1/4 tsp celery salt</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Steam 1 1/2 cup of vegetables in a small amount of water until cooked. Place steamed vegetables in a blender and blend until smooth.
                        Put blended vegetables in a bowl. Pour olive oil in a kettle and saute onion, celery, and carrot. Then add 3 cups of water and bring to a slow boil.
                        Add blended vegetables and 1 cup of diced fresh vegetables. Simmer for 5 minutes. Put cashews and 1 cup of water and seasonings in the blender and blend until smooth.
                        Slowly add to the soup and bring to a boil. Serves 4
                    </div>
                </div >
            }
            {
                params.recipe === "minestrone-soup" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Minestrone Soup</h1>
                    <SectionHeading>Night Before:</SectionHeading>
                    <div className="mb-4">
                        Soak 1 cup dried kidney beans (I like red beans better) in water to cover. In the morning, cook beans until soft (1.5 hours). <br />
                        Or if you forget to soak your beans, bring them to a boil, let sit for 5 mins, then cook until soft (2 hours). You may also use canned beans though this soup does not taste nearly as good if you use canned beans.
                    </div>
                    <div className="mb-4">
                        Scald in 3 tbsp of canola or olive oil:<br />
                        1 large peeled diced potato<br />
                        1 large peeled, coined carrot
                    </div>
                    <div className="mb-4">
                        Add:<br />
                        small sliced onion - cook until soft<br />
                        2 cloves garlic, minced
                    </div>
                    <div className="mb-4">
                        Add 8 cups of water with 8 envelopes of George Washington broth, the beans with juice, and 1 can diced unseasoned tomatoes.
                    </div>
                    <div className="mb-4">
                        Season with:<br />
                        1 tsp dried basil<br />
                        1 pinch of oregano<br />
                        1 pinch of parsely<br />
                        Salt and pepper to taste
                    </div>
                    <div className="mb-4">
                        Simmer till vegetables are tender. At the end, add 1-2 handfuls of small pasta macaroni/shells, and 1 large or 2 small sliced zucchini, 1 cup of shredded cabbage,
                        and simmer until the pasta is al dente.
                        Serve with vegan parmesan cheese. Serves 8
                    </div>
                </div >
            }
            {
                params.recipe === "cheaters-chili" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Cheater's chili</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>3/4 cup Bulgar</li>
                        <li>2 tbsp oil</li>
                        <li>1 cup chopped onion</li>
                        <li>1 rib celery, diced</li>
                        <li>2 tbsp chili powder</li>
                        <li>2 tsp cumin</li>
                        <li>1 large clove garlic, minced</li>
                        <li>2 cans kidney beans, chili beans, or black beans</li>
                        <li>2 cans diced tomatoes</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Brown bulgar in oil for a few minutes, then add onions and celery. Add 2 cups of water and simmer until celery is done.
                        Add remaining ingredients and simmer for 30 minutes.
                    </div>
                </div >
            }
            {
                params.recipe === "butter-lettuce-green-pea-salad" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Butter Lettuce and Green Pea Salad (Serves 6, ready in 25 minutes)</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 cup fresh or frozen peas</li>
                        <li>1 medium head butterhead lettuce, torn into 1-2 inch pieces (6 cups)</li>
                        <li>2 medium tomatoes, cut into wedges</li>
                        <li>2 medium Persian cucumbers, thinly sliced</li>
                        <li>1 medium sweet pepper, cut into 1 inch strips</li>
                        <li>1/2 cup cilantro-cashew dressing</li>
                        <li>1 tbsp finely snipped fresh cilantro</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1. In a small saucepan, cook peas in a small amount of boiling water for 5 minutes or until tender, then drain.
                        Rinse with cold water and drain again.<br />
                        2. In a large bowl, combine lettuce, tomatoes, cucumbers, sweet pepper, and cooked peas. Pour cilantro-cashew
                        dressing over lettuce mixture and toss to coat. Top with green onions and cilantro.
                    </div>
                </div >
            }
            {
                params.recipe === "cilantro-cashew-dressing" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Cilantro Cashew dressing</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1/2 cup raw cashews</li>
                        <li>1 cup fresh cilantro leaves</li>
                        <li>3 tbsp lemon juice</li>
                        <li>1/2 inch piece serrano pepper, seeded</li>
                        <li>3 cloves garlic</li>
                        <li>1 tsp hot sauce (optional)</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Blend cashews and 3/4 cup water into a creamy texture. Add cilantro, lemon juice, Serrano pepper, garlic, hot sauce,
                        and salt to taste. Blend until smooth. Taste and adjust seasoning.
                    </div>
                </div >
            }
            {
                params.recipe === "grilled-corn-honey-lime-salad" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Grilled Corn, Avocado, and Tomato Salad with Honey Lime dressing</h1>
                    <SectionHeading>Salad Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 pint grape tomatoes</li>
                        <li>1 ripe Avocado</li>
                        <li>2 ears of fresh corn</li>
                        <li>2 tbsp fresh cilantro, chopped</li>
                    </ul>
                    <SectionHeading>Dressing Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>Juice of one lime</li>
                        <li>3 tbsp vegetable oil</li>
                        <li>1 tbsp honey</li>
                        <li>1 clove garlic, minced</li>
                        <li>Dash of cayenne pepper</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Husk the corn and grill for about 10 minutes or until done. The corn should have some grill marks. Cut the corn off the cob, scrape the cob with the back of the knife to get the juices. Set aside to let cool. Slice the tomatoes in half. Dice the avocado and chop the cilantro.<br /><br />
                        Add all the dressing ingredients in a small bowl and whisk to combine. Set aside. Combine the tomatoes, avocado, cilantro, and grilled corn. Add the dressing and mix gently so evenly coated. Let salad sit for 10-15 minutes to let flavors mingle.
                    </div>
                </div >
            }
            {
                params.recipe === "peanut-butter-balls" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Peanut Butter Balls</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 cups peanut butter (crunchy)</li>
                        <li>½ cup raisins</li>
                        <li>1 cup coconut</li>
                        <li>¼ cup honey</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Add the peanut butter, raisins, and honey. Make a small ball, then roll in coconut. Keep in freezer for at least 35 minutes before serving.
                    </div>
                </div >
            }
            {
                params.recipe === "bruschetta" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Bruschetta</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>8-10 slices Italian bread</li>
                        <li>8oz plum tomatoes, diced</li>
                        <li>¼ cup chopped onion</li>
                        <li>¼ cup basil, thinly sliced</li>
                        <li>2 tbsp olive oil</li>
                        <li>2 cloves garlic, chopped</li>
                        <li>Salt and pepper to taste</li>
                        <li>¼ - ½ cup shredded parmesan cheese</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Preheat oven to 350 degrees. Toast bread directly on oven rack, 3-5 minutes. In a large bowl, combine tomatoes, onions, basil, oil, garlic, and salt and pepper. Arrange toast in a single layer on baking sheet. Divide mixture among the toast and sprinkle with cheese.
                        Makes 8-10 servings.
                    </div>
                </div >
            }
            {
                params.recipe === "meatless-meatballs" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Meatless Meatballs</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 cup chopped nut meal (pecan or walnut)</li>
                        <li>1 cup dry bread crumbs (Italian flavored)</li>
                        <li>1 onion, chopped</li>
                        <li>Salt to taste</li>
                        <li>¼ cup grated vegan cheese</li>
                        <li>Ener-G Egg Replacer for 2 or 3 eggs</li>
                        <li>½ tsp garlic salt</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Combine all ingredients and shape into small meatballs. Bake at 350 degrees for 20 minutes. Place in a casserole dish and pour your favorite spaghetti sauce over all and bake 30-40 minutes.
                    </div>
                </div >
            }
            {
                params.recipe === "egg-salad" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Eggless Egg Salad</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 packages (14 oz) tofu extra firm, well drained</li>
                        <li>4 stalks of celery, diced small</li>
                        <li>½ small onion, diced small</li>
                        <li>½ cup pickle relish</li>
                        <li>½ cup soy mayonnaise</li>
                        <li>1 Tbsp chicken style seasoning</li>
                        <li>1 ½  tsp garlic powder</li>
                        <li>1 to 1 ½ tsp salt</li>
                        <li>1 tsp onion powder</li>
                        <li>¼ tsp turmeric</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	Drain excess water from the tofu. <br />
                        2.	Mash tofu in a large bowl with a fork or potato masher.<br />
                        3.	Add remaining ingredients and mix well. Chill before serving.<br />
                    </div>
                </div >
            }
            {
                params.recipe === "chicken-buns" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">“Chicken” Stuffed Buns</h1>
                    <div className="mb-4">
                        For the buns, I used Rhodes frozen 100 percent whole wheat rolls and followed the thawing direction on the package. This recipe makes 12 buns.
                    </div>
                    <SectionHeading>Filling Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1/3 cup shredded carrots</li>
                        <li>1/3 cup shredded zucchini</li>
                        <li>2 Tbsp sliced green onion</li>
                        <li>1 Tbsp oil</li>
                        <li>3 oz vegan cream cheese</li>
                        <li>1/3 cup some kind of vegan chicken, cut into small pieces</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Cook the carrot, zucchini and green onion until tender in oil or water. Stir in the “chicken,” vegan cream cheese and 1/8 tsp salt.<br /><br />
                        When the rolls are defrosted, flatten with your hands into a 4-inch circle and put about 1 Tbsp of filling into the center. Bring up edges of dough around the filling and seal. Place the buns seam side down on a baking sheet. Bake at 375 degrees for about 18-20 minutes, until nicely browned. Serve warm or at room temperature.
                    </div>
                </div >
            }
            {
                params.recipe === "scrambled-tofu" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Scrambled Tofu</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1lb tofu firm</li>
                        <li>½ tsp salt or less</li>
                        <li>¼ garlic powder</li>
                        <li>1 Tbsp Nutrition yeast</li>
                        <li>1 clove garlic, minced</li>
                        <li>2 tsp chicken seasoning</li>
                        <li>½ tsp turmeric powder</li>
                        <li>½ tsp onion powder</li>
                        <li>½ cup chopped onions</li>
                        <li>¼ tsp celery salt</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Crumble or mash tofu and set aside to drain. In a large skillet, sauté onions in water, adding water a little at a time until the onion is soft.
                        Add spices to mashed tofu and then add tofu to onions in the skillet. Turn tofu mixture, as needed, over medium heat until liquid evaporates. Other
                        seasonings you may add to your liking: cumin, paprika, hickory seasoning, curry powder etc.
                    </div>
                </div >
            }
            {
                params.recipe === "maple-nut-granola" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Maple Nut Granola</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>¾ cup water</li>
                        <li>½ cup honey</li>
                        <li>1 Tbsp Molasses, optional</li>
                        <li>1 tsp maple flavoring</li>
                        <li>1 tsp salt</li>
                        <li>1 Tbsp vanilla</li>
                        <li>1 ½ cups pitted dates</li>
                        <li>1 cup walnuts, Brazil nuts, peanuts, or almonds</li>
                        <li>13 cups old fashioned oats, as needed</li>
                        <li>1-2 cups quick oats, as needed</li>
                        <li>½ cup shredded, unsweetened coconut, optional</li>
                        <li>1-2 cups coarsely chopped walnuts, pecans, almonds, or peanuts</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	Put water, honey, flavorings, dates and 1 cup nuts in blender. Blend for about 1 minute until smooth. (this becomes thick) <br />
                        2.	Place oats and remaining ingredients (except quick oats) in a large mixing bowl. Add blended mix to the oats and gently mix together with your hand.<br />
                        3.	If the mix is too wet, the finished granola will not be tender. If it is sticking to your hands or feels sticky, add an extra cup of quick oats and work them into the mix.<br />
                        4.	Place mixture in two large cake pans or sheet pans that have sides, taking care not to pack or pat it down tightly. Keep it light and airy.<br />
                        5.	Place pans in the oven at 175 degrees for about 8 hours-no need to stir if it is baked slowly. If the temperature is too high, it will become dark brown or burned on top and
                        uncooked underneath. When uncooked park dries out, it will be tough and hard. Longer, slower cooking will result in an even, golden-brown product.<br />
                    </div>
                </div >
            }
            {
                params.recipe === "avocado-wrap" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Avocado Wrap</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>8 whole grain flour tortillas</li>
                        <li>2 cups Guilt-Free guacamole or commercial brand guacamole</li>
                        <li>4 cups mixed salad greens or baby spinach leaves</li>
                        <li>2 large tomatoes, thinly sliced and lightly salted</li>
                        <li>1 large cucumber, thinly sliced and lightly salted</li>
                        <li>1 cup matchstick carrots</li>
                        <li>½ small red onion, thinly sliced</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	Spread guacamole over ¾ of each tortilla, leaving a ½ inch border around the edge.<br />
                        2.	Top with greens, tomatoes, cucumbers, carrots, and onions.<br />
                        3.	Roll up tightly, slice in half, and enjoy.<br />
                        Makes 8 wraps
                    </div>
                </div >
            }
            {
                params.recipe === "guacamole" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Guilt-Free Guacamole</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 medium avocadoes, peeled and chopped</li>
                        <li>1 can (15 oz) canned white beans, rinsed and drained</li>
                        <li>3 Tbsp lime or lemon juice</li>
                        <li>1 clove garlic</li>
                        <li>½ tsp ground cumin</li>
                        <li>½ cup red or green onion, minced</li>
                        <li>¼ cup tomatoes, finely diced</li>
                        <li>2 Tbsp cilantro, chopped (optional)</li>
                        <li>½  small jalapeno, finely chopped (optional)</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	Puree avocados and beans in a food processor.<br />
                        2.	Add lime or lemon juice, garlic, salt, and cumin to the food processor; pulse until just blended.<br />
                        3.	Stir in the remaining ingredients and serve.<br />
                        Makes 3 cups
                    </div>
                </div >
            }
            {
                params.recipe === "chocolate-torte" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">The No-Oil-Added Chocolate Torte</h1>
                    <SectionHeading>Torte Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>½ cup all purpose flour</li>
                        <li>½ cup minus 1 Tbsp whole wheat pastry flour</li>
                        <li>¼ cup plus 1 Tbsp unsweetened Dutch-process cocoa powder</li>
                        <li>¼ cup sugar, finely ground in blender</li>
                        <li>1 ½ Tbsp arrowroot powder or cornstarch</li>
                        <li>1 tsp baking powder</li>
                        <li>½ tsp fine sea salt</li>
                        <li>¼ tsp ground cinnamon</li>
                        <li>½ cup full fat coconut milk (not the light)</li>
                        <li>½ cup almond milk or water</li>
                        <li>½ cup pure maple syrup</li>
                        <li>1 tsp vanilla</li>
                        <li>1 tsp apple cider vinegar</li>
                    </ul>
                    <SectionHeading>Bittersweet Ganache Glaze Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>8 oz dark chocolate (70% to 72%), finely chopped</li>
                        <li>1 ¼ cup almond milk or soy milk</li>
                        <li>2 Tbsp sugar</li>
                        <li>1 pinch fine sea salt</li>
                        <li>1 ½ pure vanilla</li>
                        <li>2 tsp mild olive oil (optional)</li>
                    </ul>
                    <div className="">
                        1.	To make torte: Preheat oven to 350 degrees. Oil sides and bottom of a 9 inch cake pan, and line with parchment circle.<br />
                        2.	Sift flours, cocoa, sugar, arrowroot, baking powder, baking soda, salt and cinnamon into a bowl. Whisk to aerate.<br />
                        3.	Whisk together coconut milk, almond milk, maple syrup, vanilla and vinegar. Whisk dry mixture into wet mixture until smooth. Pour into prepared pans and bake for 20 to 30 minutes or until toothpick inserted into the center comes out clean or with just a few moist crumbs.<br />
                        4.	Cool torte in pan on a wire rack, 10 minutes. Run a think knife around torte, and invert onto the rack. Peel off parchment paper. Invert torte again, top side up, on rack to cool completely. Chill 30 minutes.<br />
                        5.	To make bittersweet ganache glaze: Place chocolate in a bowl. Bring almond milk, sugar and salt to a simmer in a saucepan. Pour hot milk over chocolate to submerge completely.  Cover bowl with a plate and let stand 4 minutes. Add vanilla and oil (if using), and whisk from center out until smooth and glossy. Strain the ganache into a bowl and let thicken at room temperature 15 to 25 minutes or until ganache coats a spoon thickly but is still pourable.<br />
                        6.	Pour cooled ganache over cooled torte. Chill until glaze is set.
                    </div>
                </div >
            }
            {
                params.recipe === "rice-pudding" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Breakfast Rice Pudding (Vegan)</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>2 cups cooked brown rice</li>
                        <li>¼ cup dates or raisins</li>
                        <li>¼ tsp cinnamon</li>
                        <li>¼ cup dried or fresh pineapple chunks</li>
                    </ul>
                    <div className="mb-4">
                        May serve with Rice Dream or Mocha Mix- if you’d like it creamier. <br />
                        Preheat over to 350 degrees.
                    </div>
                    <div className="mb-4">
                        Mix ingredients with almond milk (see below) and put in an oiled casserole dish; bake for 30 minutes. Serve warm with Pear Sauce (see below)
                    </div>
                    <h1 className="display-1 text-primary-900 my-8">Almond Milk</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>½ cup blanched almonds or raw cashews</li>
                        <li>2/3 cup water</li>
                        <li>1 Tbsp honey or maple syrup</li>
                    </ul>
                    <div className="mb-4">
                        Mix ingredients in the blender or food processor until creamy.
                    </div>
                    <h1 className="display-1 text-primary-900 my-8">Pear Sauce</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>¼ cup blanched almonds or raw cashews</li>
                        <li>1/8 tsp salt</li>
                        <li>½ tsp honey</li>
                        <li>½ tsp vanilla</li>
                        <li>1 can (15 oz) pears</li>
                        <li>1 cup pear juice-from the can, or water</li>
                    </ul>
                    <div className="mb-4">
                        Blend ingredients in food processor until creamy.
                    </div>
                </div >
            }
            {
                params.recipe === "chocolate-pancakes" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Chocolate Pancakes</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 ¼ cups gluten-free whole grain flour</li>
                        <li>2 Tbsp unsweetened cocoa powder</li>
                        <li>1 Tbsp baking powder</li>
                        <li>1 Tbsp ground flaxseeds</li>
                        <li>1 Tbsp miniature vegan semisweet chocolate pieces</li>
                        <li>¼ tsp sea salt</li>
                        <li>1 cup unsweetened almond milk</li>
                        <li>1 Tbsp pure maple syrup or ¼ tsp stevia powder</li>
                        <li>1 Tbsp cider vinegar</li>
                        <li>1 tsp vanilla</li>
                        <li>¼ cup unsweetened applesauce</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	In a medium bowl stir together the first six ingredients (through salt). In a small bowl combine milk, maple syrup, vinegar, and vanilla.
                        Add milk mixture and applesauce to flour mixture. Stir just until moistened. Let stand 10 minutes. (batter will thicken)<br />
                        2.	For each pancake, pour ¼ cup batter onto a hot lightly greased griddle or large nonstick skillet. Spread batter if necessary. Cook over
                        medium 2 to 3 minutes or until surfaces are bubbly and edges are slightly dry. Turn pancakes over and cook 1 to 2 minutes more or until light brown. Serve warm.
                    </div>
                </div >
            }
            {
                params.recipe === "energy-bites" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Blueberry Lemon Energy Bites</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>Pinch of salt</li>
                        <li>½ tsp vanilla</li>
                        <li>1 lemon</li>
                        <li>¾ cup pitted dates</li>
                        <li>½ cup dried blueberries</li>
                        <li>½ cup coconut flakes</li>
                        <li>1 ½ cup cashews</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Rinse and dry the lemon. Using a grater, zest the lemon. Cut the lemon in half and juice it into a small bowl and set aside, watching out for seeds.<br />
                        Roughly chop the dates. Blend the cashews and coconut together in a food processor until they resemble corn meal.<br />
                        Add the dried blueberries, dates, lemon juice, lemon zest, vanilla and salt to the food processor. Blend all the ingredients together until it forms a rough ball of dough that sticks together when pinched.<br />
                        Remove from the food processor and roll into balls 1 to 1 ½ inches in diameter. Balls can be stored in the fridge for up to 1 week.
                    </div>
                </div >
            }
            {
                params.recipe === "breakfast-beans" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Breakfast Beans</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>1 lb. Great Northern beans</li>
                        <li>6 cups water</li>
                        <li>1 medium onion, chopped</li>
                        <li>2 Tbsp light olive oil</li>
                        <li>1 ½ tsp salt</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Sort and wash beans. Add the water to the beans and bring to a boil. Boil for 2 minutes. Remove from the heat. Let stand, covered,
                        for 60 minutes. Add onion and oil. Bring to a boil and continue cooking on low heat until nearly done, approximately another hour. Simmer
                        beans until very tender. Add the salt. Serve over whole wheat toast.
                    </div>
                </div >
            }
            {
                params.recipe === "berry-french-toast" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Berry French Toast Casserole</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>12-14 cups French Bread</li>
                        <li>8 large eggs</li>
                        <li>2 cups 2 percent milk</li>
                        <li>2 tsp vanilla</li>
                        <li>1 tsp cinnamon</li>
                        <li>2/3 cup brown sugar</li>
                        <li>1 cup strawberries</li>
                        <li>½ cup blueberries</li>
                        <li>1-2 Tbsp powdered sugar</li>
                        <li>Maple syrup as much as you want!</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        1.	Grease a 9x13” casserole with vegetable oil or butter. Cut up French bread into cubes and add to the casserole (fill up to ~3/4).<br />
                        2.	In a large bowl, combine eggs, milk, vanilla, cinnamon, and brown sugar. Whisk mixture and mix well. Pour mixture into casserole.<br />
                        3.	Slice strawberries. Top casserole with strawberries and blueberries.<br />
                        4.	Wrap the casserole with Saran Wrap and refrigerate for four hours, or overnight.<br />
                        5.	Pre-heat oven to 350 degrees F. Bake for 35-40 minutes.<br />
                        6.	Sprinkle with powdered sugar.<br />
                        7.	Serve with maple syrup and enjoy!
                    </div>
                </div >
            }
            {
                params.recipe === "cranberry-quinoa" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Creamy Cranberry Quinoa</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>¾ cup quinoa</li>
                        <li>1 ½ cups water</li>
                        <li>¼ tsp salt</li>
                        <li>1 cup unsweetened or plain soymilk</li>
                        <li>¼ cup dried cranberries</li>
                        <li>1 tsp vanilla extract (optional)</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Put the quinoa in a fine strainer and rinse under running water until the water runs clear. Drain well. In a medium saucepan, stir
                        together the rinsed quinoa, water and salt. Bring to a boil, reduce heat to low, cover and simmer until the water is absorbed, 15 to
                        20 minutes. Stir in the soymilk, cranberries, and vanilla. Simmer until the cereal is thickened, about 10 minutes.
                    </div>
                </div >
            }
            {
                params.recipe === "asparagus-soup" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Cream of Asparagus Soup</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>8-10 asparagus spears, steamed soft</li>
                        <li>1 onion, thin sliced</li>
                        <li>1 cup asparagus water from cooking</li>
                        <li>1 ½ cups water</li>
                        <li>2 Tbsp butter</li>
                        <li>2 Tbsp flour</li>
                        <li>2 Tbsp minced fresh parsley</li>
                        <li>Salt and pepper</li>
                        <li>1 cup warm milk or light cream</li>
                        <li>1 tsp capers</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        After steaming asparagus, cut off the tips and set aside. Combine stalks, onion and both waters in a pot and boil for 5 minutes.<br />
                        Place mixture in blender and puree. Melt butter. Add flour, stir until blended. Add parsley and whisk in the soup puree.<br />
                        Cook 5 minutes, stirring. Add salt and pepper to taste and the warm milk.<br />
                        Put reserved asparagus tips in serving bowl, pour hot soup over and garnish with capers.<br />
                        Makes 4 servings.
                    </div>
                </div >
            }
            {
                params.recipe === "squash-soup" &&
                <div className="mt-28 px-8 pt-4 pb-16">
                    <Link href="/recipes" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                        Back to Recipes
                    </Link>
                    <h1 className="display-1 text-primary-900 my-8">Buttermilk Squash Soup</h1>
                    <SectionHeading>Ingredients</SectionHeading>
                    <ul className="list-disc list-inside mb-6">
                        <li>4 tsp butter</li>
                        <li>1 ¼ cup chopped sweet onion</li>
                        <li>2 ¼ cups chopped crisp apples</li>
                        <li>4 cups butternut squash, peeled and cubed</li>
                        <li>3 cups chicken broth</li>
                        <li>¼ tsp ground coriander</li>
                        <li>1 Tbsp minced fresh sage</li>
                        <li>½ tsp fresh ground pepper</li>
                        <li>1 cup milk, at room temperature</li>
                        <li>½ tsp ground nutmeg</li>
                        <li>½ tsp ground cloves</li>
                    </ul>
                    <SectionHeading>Directions</SectionHeading>
                    <div className="">
                        Melt butter, add onions, cook until golden. Add apples, squash and broth.<br />
                        Bring to boil and cover. Reduce heat and simmer until squash is tender. Approximately 20 minutes.<br />
                        Put squash mixture, coriander, sage, and pepper in blender, run until smooth. Return to pan and add milk. Cook about 3 minutes to heat through. Serve with a sprinkle of nutmeg and cloves.<br />
                        Makes 6 servings.
                    </div>
                </div >
            }
        </Container >
    )
}