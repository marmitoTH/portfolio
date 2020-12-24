import axios from 'axios'
import cheerio from 'cheerio'

export interface GetReadmeProps {
  username: string
  repository: string
  branch: string
}

const clearText = (text: string) => text?.replace(/\n/g, '').trim() || ''

export const getReadme = async ({
  username, repository, branch
}: GetReadmeProps) => {
  const base = 'https://raw.githubusercontent.com'
  const uri = `${base}/${username}/${repository}/${branch}/README.md`
  return axios.get(uri).then(response => response.data)
}

export const getPinnedRepos = async (username: string) => {
  return axios.get<string>(`https://github.com/${username}`)
    .then(response => response.data)
    .then(html => cheerio.load(html)('.js-pinned-item-list-item'))
    .then($ => $.map((_, element) => {
      const cheer = cheerio(element)
      const repo = cheer.find('.repo').attr('title')
      const stars = cheer.find('.pinned-item-meta')[0]?.lastChild['data']
      const forks = cheer.find('.pinned-item-meta')[1]?.lastChild['data']
      const language = cheer.find('*[itemprop="programmingLanguage"]').text()
      const description = cheer.find('.pinned-item-desc').text()

      return {
        owner: username,
        repo,
        language,
        description: clearText(description),
        url: `https://github.com/${username}/${repo}`,
        stars: clearText(stars) || 0,
        forks: clearText(forks) || 0
      }
    }).get())
}
