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

interface IUserUrls {
    "followers_url": "https://api.github.com/users/PabloBorgesMartins/followers",
    "following_url": "https://api.github.com/users/PabloBorgesMartins/following{/other_user}",
    "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
    "organizations_url": "https://api.github.com/users/pjhyett/orgs",
    "repos_url": "https://api.github.com/users/pjhyett/repos",
    "events_url": "https://api.github.com/users/PabloBorgesMartins/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PabloBorgesMartins/received_events",
}