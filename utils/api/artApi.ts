import fetch from 'isomorphic-unfetch'

export default {
	getList: async (resource: string, pageNumber: number, itemPerPage: number) => {
		const res = await fetch(`http://127.0.0.1:8000/art/${resource}/page-${pageNumber}/item-${itemPerPage}`);
		return await res.json();
	},
	getOne: async (resource: string, identifier: string/*slug*/ | number) => {
		const res = await fetch(`http://127.0.0.1:8000/art/${resource}/${identifier}`);
		return await res.json();
	}
}