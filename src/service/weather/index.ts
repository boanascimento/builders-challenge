import axios, { AxiosPromise } from 'axios'

/**
 * Gets a Github User by login name.
 * @param userName User name to get.
 * @returns AxiosPromise<any>
 */
export const getGitUser = (
  userName: string,
): AxiosPromise<any> => {
  return axios.get(`https://api.github.com/users/${userName}`)
}
