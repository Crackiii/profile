export async function fetchMediumPosts() {
  const rssUrl = 'https://medium.com/feed/@nadeem.ahmad.na' // Replace with your RSS feed URL
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
  )
  const data = await response.json()

  if (data.status === 'ok') {
    return data.items
  } else {
    console.error('Failed to fetch Medium posts')

    return []
  }
}
