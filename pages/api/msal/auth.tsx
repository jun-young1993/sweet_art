import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') {
		return res.status(405).send({ error: 'method not allowed' })
	}
	console.log(req.url)
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
	      )
	res.status(200).json({'hi':'hi'})
}