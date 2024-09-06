import express, { Request, Response } from 'express'
import * as AnattaService from '../services/anatta.service'
import { Variant } from '../interfaces/anatta.interface'

export const anattaRouter = express.Router()

// GET product variants
anattaRouter.get('/products/variants', async (req: Request, res: Response) => {
  try {
    const variants: Variant[] = await AnattaService.queryProductVariants({
      ...req.query,
    })
    res.status(200).send(variants)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})
