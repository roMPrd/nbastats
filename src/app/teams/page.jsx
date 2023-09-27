
import TeamCard from "@/components/cards/TeamCard";
import Section from "@/components/shared/section";
import SectionCard from "@/components/shared/sectionCard";

export async function getData() {
  const response = await fetch('http://localhost:3000/api/teams',
    { cache: "no-cache" },
    //  {method: "GET"}
  );
  return response.json();
}

export default async function TeamGrid() {
  const data = await getData();
  // console.log(data)
  return (
    <>
      <Section name='EASTERN CONFERENCE'>
        <SectionCard name='ATLANTIC'>
          {data.map((team) => (
            team.division === 'Atlantic' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
        <SectionCard name='CENTRAL'>
          {data.map((team) => (
            team.division === 'Central' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
        <SectionCard name='SOUTHEAST'>
          {data.map((team) => (
            team.division === 'Southeast' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
      </Section>

      <Section name='WESTERN CONFERENCE'>
        <SectionCard name='NORTHWEST'>
          {data.map((team) => (
            team.division === 'Northwest' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
        <SectionCard name='PACIFIC'>
          {data.map((team) => (
            team.division === 'Pacific' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
        <SectionCard name='SOUTHWEST'>
          {data.map((team) => (
            team.division === 'Southwest' ? (
              <TeamCard
                key={team._id}
                id={team._id}
                logo={team.logo}
                city={team.city}
                name={team.name}
                code={team.code}
                division={team.division}
                conference={team.conference}
              />
            ) : (null)
          ))}
        </SectionCard>
      </Section>
    </>
  );
}
