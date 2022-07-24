export interface IRepository {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	fork: boolean;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	stargazers_count: number;
	watchers_count: number;
	language: string;
}