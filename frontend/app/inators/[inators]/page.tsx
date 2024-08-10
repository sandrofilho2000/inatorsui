import PreviewComponent from '@/components/previewComponent';
import Types from '../list';
import { iInatorsPage } from '@/interfaces';

export default function Page({ params }: iInatorsPage) {
  const selectedType = Types.find((type) => type.component === params.inators);

  return (
    <div>
      {selectedType?.types.map((type, index) => {
        return (
          <PreviewComponent
            code={type?.code}
            installation={type?.installation}
            key={index}
          >
            {type?.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
}
