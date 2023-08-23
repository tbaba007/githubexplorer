import Card from "../../components/ui/Card";
import Loader from "../../components/ui/Loader";
import {
  getUserRepositories,
  searchRepositories,
} from "../../services/githubApi";
import styles from "./GitRepo.module.scss";
import RepositoryList from "./RepositoryList";
import { RepositoryProps } from "./RepositoryList/types";
import Search from "./Search";
import UserList from "./UserList";
import { GitRepoProps } from "./type";
import React, { useState } from "react";


let query='';
const GithubRepo = () => {
  const [username, setUserName] = useState("");
  const [users, setUsers] = useState<GitRepoProps[] | undefined>();
  const [repositories, setRepositories] = useState<
    RepositoryProps[] | undefined
  >();
  const [selectedUser, setSelectedUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    query=username;
    setIsLoading(true);
    try {
      const data: GitRepoProps = await searchRepositories(username);
      if (data.items) {
        setIsLoading(false);
        const result = data.items as GitRepoProps[];
        const repositoryList: GitRepoProps[] = result.slice(0, 5);
        setUsers(repositoryList);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSelectedUser = async (user: string) => {
    if (selectedUser === user) {
      setSelectedUser("");
      setRepositories([]);
      return;
    }
    const userRepositories = await getUserRepositories(user);

    setSelectedUser(user);
    setRepositories(userRepositories);
  };

  return (
    <div className={styles.Container}>
      <Card width="300px" height="500px">
        <>
          <section className={styles.Container__formContainer}>
            <Search
              handleOnChange={handleOnChange}
              handleSearch={handleSearch}
            />
          </section>
          <section className={styles.Container__formResults}>
            <section>
              {!isLoading && users!!?.length > 0 && (
                <span className={styles.Container__repoResponsetitle}>
                  Showing users for "{query}"
                </span>
              )}
              {!isLoading && users!!?.length < 1 && (
                <span className={styles.Container__repoResponsetitle}>
                  No record found for "{query}"
                </span>
              )}
              {isLoading && <Loader />}
              {!isLoading &&
                users!!?.length > 0 &&
                users?.map((item) => {
                  return (
                    <>
                      <UserList
                        {...item}
                        handleSelectedUser={handleSelectedUser}
                        key={item.login}
                      />
                      {selectedUser === item.login && (
                        <section className={styles.Container__repoResult}>
                          {repositories?.map((repo) => {
                            return (
                              <section>
                                <RepositoryList {...repo} key={repo.name} />
                              </section>
                            );
                          })}
                        </section>
                      )}
                    </>
                  );
                })}
            </section>
          </section>
        </>
      </Card>
    </div>
  );
};

export default GithubRepo;
