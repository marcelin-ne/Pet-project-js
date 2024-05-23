import { expect } from "chai";
import { describe, it } from "mocha";

import {
  filterRepositoriesWithMoreThanFiveStars,
  getLastFiveUpdatedRepositories,
  sumOfAllRepositoryStars,
} from "../src/repositoryUtils.js";
import {
  mockedRepositories,
  mockedRepositoriesFull,
  mockedRepositoriesLess,
} from "./mockedData.js";

describe("filterRepositoriesWithMoreThanFiveStars", () => {
  describe("when it receives an array of objects", () => {
    it("should return repositories with more than 5 stars", () => {
      const filteredRepositories =
        filterRepositoriesWithMoreThanFiveStars(mockedRepositories);

      expect(filteredRepositories).to.deep.equal([
        { id: 1, name: "repo1", stargazers_count: 10 },
        { id: 3, name: "repo3", stargazers_count: 8 },
      ]);
    });

    it("should return an empty array if no repositories have more than 5 stars", () => {
      const filteredRepositories = filterRepositoriesWithMoreThanFiveStars([]);

      expect(filteredRepositories).to.deep.equal([]);
    });
  });
});

describe("getLastFiveUpdatedRepositories", () => {
  describe("when it receives an array of objects", () => {
    it("should return the last 5 updated repositories", () => {
      const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(
        mockedRepositoriesFull,
      );

      expect(lastFiveUpdatedRepositories).to.deep.equal([
        {
          id: 6,
          name: "repo6",
          updated_at: "2023-04-06T12:00:00Z",
          stargazers_count: 5,
        },
        {
          id: 5,
          name: "repo5",
          updated_at: "2023-04-05T12:00:00Z",
          stargazers_count: 5,
        },
        {
          id: 4,
          name: "repo4",
          updated_at: "2023-04-04T12:00:00Z",
          stargazers_count: 5,
        },
        {
          id: 3,
          name: "repo3",
          updated_at: "2023-04-03T12:00:00Z",
          stargazers_count: 5,
        },
        {
          id: 2,
          name: "repo2",
          updated_at: "2023-04-02T12:00:00Z",
          stargazers_count: 5,
        },
      ]);
    });

    it("should return all repositories if there are less than 5", () => {
      const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(
        mockedRepositoriesLess,
      );

      expect(lastFiveUpdatedRepositories).to.deep.equal(mockedRepositoriesLess);
    });
  });
});

describe("sumOfAllRepositoryStars", () => {
  describe("when it receives an array of objects", () => {
    it("should return the sum of all repository stars", () => {
      const totalStars = sumOfAllRepositoryStars(mockedRepositories);

      expect(totalStars).to.equal(10 + 5 + 8);
    });

    it("should return 0 if there are no repositories", () => {
      const totalStars = sumOfAllRepositoryStars([]);

      expect(totalStars).to.equal(0);
    });
  });
});
