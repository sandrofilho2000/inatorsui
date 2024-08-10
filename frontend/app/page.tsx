import HomeMain from '@/components/ui/HomeMain';
import { api } from '../utils/index';

export default async function Home() {
  const data = await api();
  return <HomeMain data={data} />;
}
