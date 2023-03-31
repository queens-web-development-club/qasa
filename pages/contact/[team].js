import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TeamInformation } from '@/assets/data/team_information';

export default function TeamPage() {
    const router = useRouter()
    const team_name = router.query.team
    return (
        <>
        <Head>
            <title>QASA - {team_name}</title>
            <meta name="description" content="Queen's Asian Student Association" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <TeamPageTemplate team={team_name || 'senior-leadership'}/>
        </main>
        </>
    )
}

function TeamPageTemplate({ team }) {
    const team_data = TeamInformation[team]
    return (
        <>
        <div className="bg-beige pb-6 px-6 md:px-20 xl:px-44">
            <div className="flex justify-center underline text-4xl text-center lg:text-6xl xl:text-5xl pt-10 pb-6">
                {team_data.name}
            </div>
            <div className="flex justify-center text-xl lg:text-4xl text-black/50 text-center">
                {team_data.description}
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center text-center py-8">
            {team_data.members.map((member, idx) => {
                return (
                    <div key={idx} className="w-full md:w-1/2 xl:w-1/3 flex flex-col items-center justify-center gap-2 py-4 px-2">
                        <Image src={member.headshot}></Image>
                        <div className="text-2xl">
                            {member.name}
                        </div>
                        <div className="text-xl">
                            {member.position}
                        </div>
                    </div>
                )
            })}

        </div>
        </>
    )
}