export function summarizeRepositories(repositories) {
    const summarizedRepositories = [];
    
    for (const key in repositories) {
        const repo = repositories[key];
        const summarizedRepo = {
            id: repo.id,
            name: repo.name,
            updated_at: repo.updated_at,
            stargazers_count: repo.stargazers_count
        };
        summarizedRepositories.push(summarizedRepo);
    }
    
    return summarizedRepositories;
}



export function filterRepositoriesWithMoreThanFiveStars(repositories) {
    return repositories.filter(repo => repo.stargazers_count > 5);
}


export function getLastFiveUpdatedRepositories(repositories) {

    const sortedRepositories = repositories.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return sortedRepositories.slice(0, 5);
}

export function sumOfAllRepositoryStars(repositories) {

    const totalStars = repositories.reduce((accumulator, repo) => accumulator + repo.stargazers_count, 0);

    return totalStars;
}

