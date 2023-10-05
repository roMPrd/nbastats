import prisma from '@/utils/prisma';

export default async function findUnique( field, value, includeField ) {
  const data = await prisma.team.findUnique({
    where: { [field]: value },
    include: includeField,
  })
  return data;
}
