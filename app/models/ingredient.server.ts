type Ingredient = {
  slug: string;
  title: string;
}

export async function getIngredients(): Promise<Array<Ingredient>> {
  return [
    {
      slug: 'first-ingredient'
      , title: 'First ingredient'
    }
    , {
      slug: 'second-ingredient'
      , title: 'Second ingredient'
    }
  ]
}
