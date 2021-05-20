import { Ctx, NotFoundError } from "blitz"

export default async function myFailingQuery(_ = null, { session }: Ctx) {
  throw new NotFoundError()
  return "I never can reach my full potential"
}
