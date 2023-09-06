type Ingredient = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  price: number;
  unit: string;
  origin_animal: any;
  average_weight: any;
}

export async function getIngredients(): Promise<Array<Ingredient>> {
  const domain = process.env.API_BASE_URL
  const res = await fetch(`${domain}/ingredients`)

  return res.json()
}
