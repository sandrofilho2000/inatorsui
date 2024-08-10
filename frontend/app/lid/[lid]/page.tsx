import HomeMain from '@/components/ui/HomeMain';
import { iLidPage } from '@/interfaces';
import { api } from '@/lib/utils';

export default async function Home({ params }: iLidPage) {
  const data = await api(params.lid);
  return <HomeMain data={data} />;
}
