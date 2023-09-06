import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getIngredients } from '~/models/ingredient.server'

export const loader = async () => {
  return json({ ingredients: await getIngredients() })
}

export default function Ingredients() {
  const {ingredients} = useLoaderData<typeof loader>()

  return (
    <main>
      <h2>Ingrédients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.slug}>
            {ingredient.title}
          </li>
        ))}
      </ul>
    </main>
  )
}
