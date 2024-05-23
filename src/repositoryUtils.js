export function summarizeRepositories(repositories) {
  const summarizedRepositories = repositories.map(repository => {
    return {
      id: repository.id,
      name: repository.name,
      updated_at: repository.updated_at,
      stargazers_count: repository.stargazers_count,
    }
  } )

  return summarizedRepositories;
}

export function filterRepositoriesWithMoreThanFiveStars(repositories) {
  return repositories.filter((repo) => repo.stargazers_count > 5);
}

export function getLastFiveUpdatedRepositories(repositories) {
  const sortedRepositories = repositories.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
  );

  return sortedRepositories.slice(0, 5);
}

export function sumOfAllRepositoryStars(repositories) {
  const totalStars = repositories.reduce(
    (accumulator, repo) => accumulator + repo.stargazers_count,
    0,
  );

  return totalStars;
}
