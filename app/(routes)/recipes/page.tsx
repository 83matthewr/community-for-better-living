import Link from "next/link"

import Container from "@/app/components/container.component"
import MobileHero from "@/app/components/mobile-hero.component"
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component"
import SectionHeading from "@/app/components/section-heading.component"
import Paragraph from "@/app/components/paragraph.component"
import ParagraphPicture from "@/app/components/paragraph-picture.component"
import CallToAction from "@/app/components/call-to-action.component"
import ImageCard from "@/app/components/image-card.component"

import cookingService from "../../../public/assets/cooking_service.jpg"

const RECIPES = [
  {
    name: "Vegan Spinach Puffs",
    link: '/recipes/vegan-spinach-puffs'
  },
  {
    name: "Apple Crisp",
    link: '/recipes/apple-crisp'
  },
  {
    name: "Roast Sweet Potato Wedges",
    link: '/recipes/sweet-potato-wedges'
  },
  {
    name: "Tapioca Pudding",
    link: '/recipes/tapioca-pudding'
  },
  {
    name: "Zucchini Casserole",
    link: '/recipes/zucchini-casserole'
  },
  {
    name: "Mushroom Gravy",
    link: '/recipes/mushroom-gravy'
  },
  {
    name: "Lentil Roast",
    link: '/recipes/lentil-roast'
  },
  {
    name: "Sweet and Sour Vege-Burger Roast",
    link: '/recipes/sweet-and-sour-vege-burger'
  },
  {
    name: "Spring Roll Bowl",
    link: '/recipes/spring-roll-bowl'
  },
  {
    name: "Peanut Sauce",
    link: '/recipes/peanut-sauce'
  },
  {
    name: "Eggplant Parmesan",
    link: '/recipes/eggplant-parmesan'
  },
  {
    name: "Potato Lover's Bowl",
    link: '/recipes/potato-lovers-bowl'
  },
  {
    name: "Romesco sauce",
    link: '/recipes/romesco-sauce'
  },
  {
    name: "Cream of Fresh Vegetable Soup",
    link: '/recipes/cream-of-fresh-vegetable-soup'
  },
  {
    name: "Minestrone Soup",
    link: '/recipes/minestrone-soup'
  },
  {
    name: "Cheater's chili",
    link: '/recipes/cheaters-chili'
  },
  {
    name: "Butter Lettuce and Green Pea Salad",
    link: '/recipes/butter-lettuce-green-pea-salad'
  },
  {
    name: "Cilantro Cashew dressing",
    link: '/recipes/cilantro-cashew-dressing'
  },
  {
    name: "Grilled Corn, Avocado, and Tomato Salad with Honey Lime dressing",
    link: '/recipes/grilled-corn-honey-lime-salad'
  },
  {
    name: "Peanut Butter Balls",
    link: '/recipes/peanut-butter-balls'
  },
  {
    name: "Bruschetta",
    link: '/recipes/bruschetta'
  },
  {
    name: "Meatless Meatballs",
    link: '/recipes/meatless-meatballs'
  },
  {
    name: "Eggless Egg Salad",
    link: '/recipes/egg-salad'
  },
  {
    name: "“Chicken” Stuffed Buns",
    link: '/recipes/chicken-buns'
  },
  {
    name: "Scrambled Tofu",
    link: '/recipes/scrambled-tofu'
  },
  {
    name: "Maple Nut Granola",
    link: '/recipes/maple-nut-granola'
  },
  {
    name: "Avocado Wrap",
    link: '/recipes/avocado-wrap'
  },
  {
    name: "Guilt-Free Guacamole",
    link: '/recipes/guacamole'
  },
  {
    name: "The No-Oil-Added Chocolate Torte",
    link: '/recipes/chocolate-torte'
  },
  {
    name: "Breakfast Rice Pudding (Vegan)",
    link: '/recipes/rice-pudding'
  },
  {
    name: "Chocolate Pancakes",
    link: '/recipes/chocolate-pancakes'
  },
  {
    name: "Blueberry Lemon Energy Bites",
    link: '/recipes/energy-bites'
  },
  {
    name: "Breakfast Beans",
    link: '/recipes/breakfast-beans'
  },
  {
    name: "Berry French Toast Casserole",
    link: '/recipes/berry-french-toast'
  },
  {
    name: "Creamy Cranberry Quinoa ",
    link: '/recipes/cranberry-quinoa'
  },
  {
    name: "Cream of Asparagus Soup",
    link: '/recipes/asparagus-soup'
  },
  {
    name: "Buttermilk Squash Soup ",
    link: '/recipes/squash-soup'
  },
];

export default function Recipes() {
  return (
    <div>
      <MobileHero image={cookingService} alt="Hero Image" title="Cooking Class recipes" />
      <DesktopHeroSingle
        image={cookingService}
        alt="Hero Image"
        title="Cooking Class Recipes"
      />

      <Container>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Recipes</SectionHeading>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(0, 3).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(3, 6).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(6, 9).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(9, 12).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(12, 15).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(15, 18).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(18, 21).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(21, 24).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(24, 27).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(27, 30).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(30, 33).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(33, 36).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-4">
            {RECIPES.slice(36, 38).map((recipe) => {
              return (
                <div className="w-full bg-secondary-100 rounded-md shadow-md p-8">
                  <h3 className="display-4 md:display-3 text-primary-900 mb-6">{recipe.name}</h3>
                  <Link href={recipe.link} className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">See Recipe</Link>
                </div>
              )
            })}
          </div>

        </div>
      </Container>
    </div>
  )
}