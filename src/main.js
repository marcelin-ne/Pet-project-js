
import fs from 'fs';
import { getRepositories } from './githubApi.js';
import { summarizeRepositories , filterRepositoriesWithMoreThanFiveStars, getLastFiveUpdatedRepositories , sumOfAllRepositoryStars} from './repositoryUtils.js';

const TOKEN = process.env.GITHUB_TOKEN;

    async function main() {
        try {
            const repositoriesPromise = getRepositories(TOKEN);
            const repositories = await repositoriesPromise;
            const summarizedRepositories = summarizeRepositories(repositories);
            const filteredRepositories = filterRepositoriesWithMoreThanFiveStars(summarizedRepositories);
            console.log("Repositories with more than 5 stars")
            console.log(filteredRepositories);
            const lastUpdateRepositories= getLastFiveUpdatedRepositories(summarizedRepositories)
            console.log("Las 5 Update Repositores");
            console.log(lastUpdateRepositories);
            const sumOfRepositoriesStar = sumOfAllRepositoryStars(summarizedRepositories);
            console.log("Sum of Repositories Stars: " , sumOfRepositoriesStar);
        } catch (error) {
            console.error('Error processing repositories:', error.message);
            throw error;
        }
    }

    main();

