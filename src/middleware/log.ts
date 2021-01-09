import { Request, Response, NextFunction } from 'express'


const logger = (req: Request, res: Response, next: NextFunction) => {
    next()
}

export default logger
