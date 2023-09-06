import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = async () => {
  return json({
    ingredients: [
      {
        slug: 'test'
        , title: 'title?'
      }
      , {
        slug: 'test 2'
        , title: 'title !'
      }
    ]
  })
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
