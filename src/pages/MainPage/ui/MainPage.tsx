import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const {t} = useTranslation();
  const [value,setValue] = useState('');

  // const onChange = (val: string) => {
  //   setValue(val)
  // }
  return (
    <Page>
      {t('Главная страницa')}
      <HStack>
        <ListBox
          defaultValue="Выберите значение"
          onChange={() => {}}
          value={undefined}
          items={[
            {value: '1', content: '345'},
            {value: '2', content: '785', disabled: true},
            {value: '3', content: '965'},
          ]}
        />
      </HStack>
      <div>lsdjhksd</div>
      <div>lsdjhksd</div>
      <div>lsdjhksd</div>
      <div>lsdjhksd</div>
      <div>lsdjhksd</div>
    </Page>
  );
};

export default MainPage;
