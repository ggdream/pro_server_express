import { Request, Response, NextFunction } from 'express'


const cors = (req: Request, res: Response, next: NextFunction) => {
    next()
}

export default cors
