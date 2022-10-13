import type { NextPage } from 'next'
import Head from 'next/head'

export const getServerSideProps = async({ query }) => {
    // console.log(query.id)

    const response = await fetch(`https://api.github.com/users/${query.id}`)
    const data = await response.json()
    // console.log(data)
    let name = data?.name ?? "Not found"
    let bio = data?.bio ?? "Not found"
    let img_url = data?.avatar_url ?? "https://avatars.githubusercontent.com/u/72264218?v=4"
    return {
        props: {
            name,
            bio,
            img_url
        }
    }
} 

const GithubUser: NextPage = ({ name , bio, img_url } : { name: string, bio: string, img_url: string}) => {
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Dynamic Github OG based on your username" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen justify-center items-center">
        <div className='flex flex-col'>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg font-normal">{bio}</p>
        </div>
        <img alt="avatar"
          width="256"
          src={img_url}
          style={{
            borderRadius: 128,
          }} />
      </main>

    </div>
  )
}

export default GithubUser
