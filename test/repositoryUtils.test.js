const { filterRepositoriesWithMoreThanFiveStars } = require('../src/repositoryUtils.js');

describe('filterRepositoriesWithMoreThanFiveStars', () => {
    describe('when it receives an array of objects', () => {
    test('Return repositories with more than 5 stars', () => {

        const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 2, name: 'repo2', stargazers_count: 5 },
        { id: 3, name: 'repo3', stargazers_count: 8 }
        ];


    const filteredRepositories = filterRepositoriesWithMoreThanFiveStars(repositories);


    expect(filteredRepositories).toEqual([
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 3, name: 'repo3', stargazers_count: 8 }
    ]);
    });

    test('Return an empty array if no repositories have more than 5 stars', () => {
    const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 3 },
        { id: 2, name: 'repo2', stargazers_count: 5 },
        { id: 3, name: 'repo3', stargazers_count: 2 }
    ];


    const filteredRepositories = filterRepositoriesWithMoreThanFiveStars(repositories);


    expect(filteredRepositories).toEqual([]);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////

const { getLastFiveUpdatedRepositories } = require('../src/repositoryUtils');
describe('getLastFiveUpdatedRepositories', () => {
    describe('when it receives an array of objects', () => {
    test('Return the last 5 updated repositories', () => {

        const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
            { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
            { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
            { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' }
        ];
        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);

    expect(lastFiveUpdatedRepositories).toEqual([
        { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' },
        { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
        { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
        { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
        { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' }
        ]);
    });

    test('Return all repositories if there are less than 5', () => {

            const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' }
            ];


        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);


        expect(lastFiveUpdatedRepositories).toEqual(repositories);
        });
});

const { sumOfAllRepositoryStars } = require('../src/repositoryUtils');

describe('sumOfAllRepositoryStars', () => {
    describe('when it receives an array of objects', () => {
    test('Return the sum of all repository stars', () => {

        const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 2, name: 'repo2', stargazers_count: 20 },
        { id: 3, name: 'repo3', stargazers_count: 30 }
        ];


    const totalStars = sumOfAllRepositoryStars(repositories);


    expect(totalStars).toBe(10 + 20 + 30);
    });

    test('Return 0 if there are no repositories', () => {

    const repositories = [];


    const totalStars = sumOfAllRepositoryStars(repositories);


    expect(totalStars).toBe(0);
    });
})

