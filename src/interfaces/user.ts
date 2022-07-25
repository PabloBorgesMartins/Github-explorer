export interface IUserListed {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
}

export interface IUser extends IUserListed {
    name: string;
    bio: string | null,
    public_repos: number;
    public_gists: number;
    followers: string;
    following: string;
    created_at: string;
    updated_at: string;
}